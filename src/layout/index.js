import React from "react";
import PublicRoutes from "../config/router";
import Footer from "./footer";
import Header from "./header";
import PublicAuthorized from "../config/router-public";
import { useLocation } from "react-router-dom";

const LoginRoutes = (props) => {
  return (
    <>
      <PublicAuthorized />
    </>
  );
};

const InlineRoutes = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
    </>
  );
};

const Layout = (props) => {
  const { pathname } = useLocation();
  return <>{pathname !== "/login" ? <InlineRoutes {...props} /> : <LoginRoutes {...props} />}</>;
};

export default Layout;
