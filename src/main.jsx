import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./App.css";

function Root() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
