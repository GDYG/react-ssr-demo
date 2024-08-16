import routes from "@/router";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routing = createBrowserRouter(routes, {
  basename: "/",
});

function App(props: { __context__: string }) {
  console.log(2222222, props);

  return <RouterProvider router={routing} />;
}

export default App;
