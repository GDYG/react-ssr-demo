import { hydrateRoot } from "react-dom/client";
import App from "./pages/App";
import React from "react";

const container = document.getElementById("root");

if (container) {
  const serverRenderedData = (window as any).__context__ || {};

  hydrateRoot(
    container,
    <React.StrictMode>
      <App {...serverRenderedData} />
    </React.StrictMode>
  );
}
