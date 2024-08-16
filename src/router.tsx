import { Outlet, RouteObject } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
const { json, useLoaderData } = require("react-router-dom");

const Layout = () => {
  let data = useLoaderData();
  console.log("server log", data);
  return (
    <div>
      <Outlet />
    </div>
  );
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    loader() {
      return json({ message: "Welcome to React Router!" });
    },
    children: [
      {
        path: "home?",
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
