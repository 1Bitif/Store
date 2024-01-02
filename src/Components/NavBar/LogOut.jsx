import React, { useEffect, useState } from 'react';
import { onAuthStateChanged , signOut } from "firebase/auth";
import 'primeicons/primeicons.css';
import {auth} from '../../firebases'
import { NavLink } from 'react-router-dom';

export default function LogOut() {
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
    return (
        <>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="pi pi-user"></span>  Profile
                </button>
                <ul className="dropdown-menu">
                    <NavLink onClick={handleLogOut} className ="btn btn-outline-light  ">
                          <i className="pi pi-sign-out "></i> LoginOut  
                    </NavLink>
                {/* <li><a className="dropdown-item" href="#">Dropdown link</a></li> */}
                </ul>
            </div>
   
        </>
    );
}