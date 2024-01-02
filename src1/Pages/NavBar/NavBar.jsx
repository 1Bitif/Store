import React from 'react';
import { Link } from "react-router-dom"
export default function NavBar() {
    return (

        <>
            <div className="fixed-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
                    <div className="container ">
                        <Link to="/" className="navbar-brand fw-bold fs-4 " >
                            The Store
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nab_ar">

                                <li className="nav-item me">
                                    <Link to="/" className="nav-link " aria-current='page' >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/products" className="nav-link">
                                        Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            <div className="buttons ">
                                <Link to="/login" className="btn btn-outline-light ">
                                    <i className="fa fa-sign-in me-1"></i>
                                    Login
                                </Link>
                                <Link to="/signup" className="btn btn-outline-light ms-2">
                                    <i className="fa fa-user-plus me-1"></i>
                                    Sign UP
                                </Link>
                                <Link to="/cart" className="btn btn-outline-light ms-2">
                                    <i className="fa fa-shopping-cart me-1"></i>
                                    {/* Cart({state.length}) */}
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="container bg-primary">
                <Outlet />
            </div> */}
        </>
    );
}