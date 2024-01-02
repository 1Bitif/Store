// import { FaUser, FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css"
import { onAuthStateChanged , signOut } from "firebase/auth";
import {auth} from '../../firebases';
import LogOut from "./LogOut";


const NavBar = () => {


  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleLogOut = () => {
    signOut(auth)
  }

  const state = useSelector(state => state.handleCart)
  
  return <>

<div className="fixed-top">
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
          <div className="container ">
            <NavLink  to="/" className="navbar-brand fw-bold fs-4 " >
              The <span className="text-warning" >Store</span> 
            </NavLink>
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
                  <NavLink to="/" className="nav-link " aria-current='page' >
                    <span className="nav-hover">
                    Home
                    </span>
                  </NavLink>
                </li>
         
                <li className="nav-item">
                  <NavLink to="/aboutUs" className="nav-link ">
                    <span className="nav-hover">
                    About
                    </span>
                  </NavLink>
                </li>
                
                 
                <li className="nav-item">
                  <NavLink to="/contactUs" className="nav-link">
                    <span className="nav-hover">
                    Contact
                    </span>
                  </NavLink>
                </li>        
              </ul>

              <div className="buttons ">
                {
                  user ? (
                    
                      <LogOut />
                    
                  ) : (
                    <NavLink to='/login' className="btn btn-outline-warning ">
                     <i className="pi pi-user"></i> Login
                  </NavLink>
                  )
                }
                

                {/* <NavLink to="/signup" className="btn btn-outline-light ms-2">
                 <i className="fa fa-user-plus me-1"></i>
                    Sign UP     
                </NavLink> */}
                <NavLink to="/cart" className="btn btn-outline-warning ms-2">
                 <i className="pi pi-shopping-cart"></i> Cart({state.length})
                </NavLink>
              </div>

            </div>
          </div>
        </nav>
      </div>
         {/* <div className="fixed-top ">
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
          <div className="container ">
            <Link  to="/" className="navbar-brand fw-bold fs-4 main-title " >
              <h2>
                The Store
              </h2> 
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
                  <Link to="/AboutUS" className="nav-link">
                    About
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/ContactUS" className="nav-link">

                    Contact
                  </Link>
                </li>        
              </ul>

              <div className="nav_btn ">
                <Link to="/signup" >
                  <div className="btn btn-outline-light" style={{marginRight: '10px'}}>
                  <FaUser /> SignUP
                  </div>
                </Link>
                <Link to="/cart" >
                  <div className="btn btn-outline-light">
                  <FaShoppingCart /> Cart ({state.length})
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </nav>
      </div> */}

      {/* <li className="nav-item">
        <Link to="/products" className="nav-link">
          Product
        </Link>
      </li> */}
    </>
}
export default NavBar