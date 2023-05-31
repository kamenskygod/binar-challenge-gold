import { useRoutes } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/registrasi';
const routing = (props) => {
  return [
    { index: true, path: '/sign-in', element: <Login {...props} title="Login" /> },
    { index: true, path: '/registrasi', element: <Register {...props} title="Registrasi" /> },
    { index: true, path: '*', element: <div>Halaman Not Found</div> },
  ];
};

const PublicAuthorized = (props) => {
  const routes = useRoutes(routing(props));
  return routes;
};

export default PublicAuthorized;
