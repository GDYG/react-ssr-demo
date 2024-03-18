import { hydrateRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";

const routing = createBrowserRouter(routes, {
  basename: "/",
});

const App = () => {
  return <RouterProvider router={routing} />;
};

const container = document.getElementById("root");

if (container) {
  const serverRenderedData = (window as any).__context__ || {};

  hydrateRoot(container, <App {...serverRenderedData} />);
}
