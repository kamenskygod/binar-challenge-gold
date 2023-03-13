import React from 'react';

const SideBar = ({ open, close }) => {
    return (
        <>
            <div className={open ? "offcanvas offcanvas-end sidebar-menu-nav show" : "offcanvas offcanvas-end sidebar-menu-nav"} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <p className="offcanvas-title fw-bold" id="offcanvasRightLabel">BCR</p>
                    <button type="button" className="btn btn-close-sidebar" aria-label="Close" onClick={close}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="offcanvas-body pt-0">
                    <ul className="list-group list-sidebar-menu">
                        <li className="list-group-item px-0">
                            <div className="link-sidebar-menu fw-normal">Our Services</div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="link-sidebar-menu fw-normal">Why Us</div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="link-sidebar-menu fw-normal">Testimonial</div>
                        </li>
                        <li className="list-group-item px-0">
                            <div className="link-sidebar-menu fw-normal">FAQ</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={open ? "offcanvas-backdrop show" : ""}></div>
        </>
    )
}
export default SideBar