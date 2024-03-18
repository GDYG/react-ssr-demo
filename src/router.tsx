import { Outlet, RouteObject } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
const { json, useLoaderData } = require("react-router-dom");

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const routes: RouteObject[] = [
  {
    path: "/",
    // element: <Layout />,
    loader() {
      return json({ message: "Welcome to React Router!" });
    },
    Component() {
      let data = useLoaderData();
      console.log(12123, data);
      return <Layout />;
    },
    children: [
      {
        path: "",
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
