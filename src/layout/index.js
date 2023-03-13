import React from "react";
import PublicRoutes from '../config/router';
import Footer from './footer';
import Header from './header';

const Layout = (props) => {
    return (
        <>
            <Header />
            <PublicRoutes />
            <Footer />
        </>
    )
}

export default Layout