import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import SideBar from '../components/Sidebar';
import { token } from '../config/token';
const Header = (props) => {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const openSideBar = () => {
    setopen(!open);
  };
  return (
    <>
      <header className="header-nav sticky-top" id="headerNavbar">
        <nav className="container container-custom nav-custom py-4 px-3 px-md-0">
          <div className="wrapper-nav">
            <div className="d-flex align-items-center">
              <div>
                <div className="logo-nav"></div>
              </div>
            </div>
            <ul className="nav nav-pills d-none d-lg-flex justify-content-lg-center">
              <li className="nav-item">
                <div className="nav-link">Our Services</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Why Us</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Testimonial</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">FAQ</div>
              </li>
              <li>
                {!token ? (
                  <Button
                    type="button"
                    onClick={() => navigate('/masuk')}
                    className="btn btn-sm btn-success"
                  >
                    Register
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('ACCESS_TOKEN');
                      window.location.reload();
                    }}
                    className="btn btn-sm btn-success"
                  >
                    Logout
                  </Button>
                )}
              </li>
            </ul>
            <div className="text-end">
              <button
                className="btn btn-sidebar-menu d-lg-none px-1"
                type="button"
                onClick={openSideBar}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <SideBar open={open} close={openSideBar} />
    </>
  );
};

export default Header;
