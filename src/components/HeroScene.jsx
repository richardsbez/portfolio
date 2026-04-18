import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

/* ─────────────────────────────────────────────────────────────
   Config responsiva APENAS para mobile/tablet (< 1024px).
   Desktop nunca chama essa função.
───────────────────────────────────────────────────────────── */
function getMobileConfig() {
  const w = window.innerWidth;
  const landscape = window.innerWidth > window.innerHeight;

  if (w <= 375)
    return { fov: 58, camY: 0.10, camZ: 5.2, modelScale: 2.0, pixelRatio: Math.min(window.devicePixelRatio, 1.0), keyIntensity: 2.0, rimIntensity: 1.0 };
  if (w <= 480)
    return { fov: 55, camY: 0.15, camZ: 5.2, modelScale: 2.1, pixelRatio: Math.min(window.devicePixelRatio, 1.0), keyIntensity: 2.1, rimIntensity: 1.1 };
  if (w <= 600)
    return { fov: 52, camY: 0.18, camZ: 5.3, modelScale: 2.2, pixelRatio: Math.min(window.devicePixelRatio, 1.25), keyIntensity: 2.2, rimIntensity: 1.2 };
  if (w <= 768)
    return { fov: 48, camY: 0.20, camZ: landscape ? 5.2 : 5.4, modelScale: landscape ? 2.3 : 2.25, pixelRatio: Math.min(window.devicePixelRatio, 1.5), keyIntensity: 2.3, rimIntensity: 1.3 };
  // 769 – 1023px
  return { fov: 44, camY: 0.22, camZ: landscape ? 5.3 : 5.5, modelScale: landscape ? 2.45 : 2.4, pixelRatio: Math.min(window.devicePixelRatio, 1.5), keyIntensity: 2.4, rimIntensity: 1.4 };
}

/**
 * HeroScene — Santos Dumont em Prata/Concreto Moderno
 */
export default function HeroScene({ groupRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isMobile = () => window.innerWidth < 1024;

    /* ── Renderer ─────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    el.appendChild(renderer.domElement);

    /* ── Camera — valores originais ───────────────────── */
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.25, 5.5);
    camera.lookAt(0, 0, 0);

    /* ── Scene & Environment ──────────────────────────── */
    const scene = new THREE.Scene();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    /* ── Lights — originais ───────────────────────────── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(3, 5, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.001;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xdbe9ff, 0.6);
    fill.position.set(-4, 2, 2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffffff, 1.5);
    rim.position.set(-2, -3, -3);
    scene.add(rim);

    const bounce = new THREE.DirectionalLight(0xffffff, 0.3);
    bounce.position.set(0, -4, 2);
    scene.add(bounce);

    /* ── Model group ──────────────────────────────────── */
    const group = new THREE.Group();
    scene.add(group);
    if (groupRef) groupRef.current = group;

    let modelRef = null;
    let modelNativeSize = null; // dimensão em object-space, imutável após load

    /* ── applySize — desktop usa os valores originais intocados ── */
    const applySize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;

      if (isMobile()) {
        const cfg = getMobileConfig();
        renderer.setPixelRatio(cfg.pixelRatio);
        camera.fov = cfg.fov;
        camera.position.set(0, cfg.camY, cfg.camZ);
        camera.lookAt(0, 0, 0);
        key.intensity = cfg.keyIntensity;
        rim.intensity = cfg.rimIntensity;
      } else {
        /* ── Desktop: exatamente igual ao original ── */
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        camera.fov = 40;
        camera.position.set(0, 0.25, 5.5);
        camera.lookAt(0, 0, 0);
        key.intensity = 2.5;
        rim.intensity = 1.5;
      }

      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    /* ── Reescala model para o breakpoint mobile atual ── */
    const applyMobileModelScale = () => {
      if (!modelRef || !modelNativeSize) return;
      const cfg = getMobileConfig();
      const newScale = cfg.modelScale / modelNativeSize;
      modelRef.scale.setScalar(newScale);

      // Recentra após rescale
      const bbox = new THREE.Box3().setFromObject(modelRef);
      const center = bbox.getCenter(new THREE.Vector3());
      modelRef.position.sub(center);
    };

    /* ── GLB Loader — lógica original intocada ────────── */
    const loader = new GLTFLoader();
    loader.load(
      "/santos_dumont.glb",
      (gltf) => {
        const model = gltf.scene;

        const bbox = new THREE.Box3().setFromObject(model);
        const center = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());
        const scale = 2.6 / Math.max(size.x, size.y, size.z);

        model.scale.setScalar(scale);
        model.position.copy(center.multiplyScalar(-scale));

        model.traverse((child) => {
          if (!child.isMesh) return;
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.color.setHex(0xbcbcbc);
            child.material.roughness = 0.3;
            child.material.metalness = 0.8;
            child.material.envMapIntensity = 1.2;
            child.material.needsUpdate = true;
          }
        });

        group.add(model);
        modelRef = model;

        // Salva dimensão nativa para rescale seguro em qualquer momento
        const rawBbox = new THREE.Box3().setFromObject(model);
        const rawSize = rawBbox.getSize(new THREE.Vector3());
        modelNativeSize = Math.max(
          rawSize.x / model.scale.x,
          rawSize.y / model.scale.y,
          rawSize.z / model.scale.z
        );

        // Se já está em mobile, aplica o rescale correto após o load
        if (isMobile()) applyMobileModelScale();
      },
      undefined,
      (err) => console.error("[HeroScene] GLB load error:", err)
    );

    /* ── Render loop — original ───────────────────────── */
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };

    applySize();
    tick();

    /* ── Resize ───────────────────────────────────────── */
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      // Debounce: orientation-change dispara múltiplos eventos no iOS
      resizeTimer = setTimeout(() => {
        applySize();
        if (isMobile()) applyMobileModelScale();
      }, 120);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      pmremGenerator.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="s1-scene-canvas"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
