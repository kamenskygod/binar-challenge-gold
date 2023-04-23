import { useRoutes } from "react-router-dom";
import Login from "../pages/login";

const routing = (props) => {
  return [
    { index: true, path: "/Login", element: <Login {...props} title="Login" /> },
    { index: true, path: "*", element: <div>Halaman Not Found</div> },
  ];
};

const PublicRoutes = (props) => {
  const routes = useRoutes(routing(props));
  return routes;
};

export default PublicRoutes;
