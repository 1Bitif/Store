import React, { useState } from 'react';
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import {auth} from "../../../firebases"
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { Button } from 'primereact/button';
function Login() {

    const [value_login, setValue_login] = useState('');
    const [value_password, setValue_password] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            signInWithEmailAndPassword(auth, value_login, value_password)
            navigate("/")
            console.log("succs")
        } catch (error) {
            console.error(error)
        }
        
    }

    return (
    <>
    <body className='container body_style'>
        <div className="container  pt-5 style_body">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow-lg ">
                        <div className="card-body bg-light">
                            <form action="" className='container'>

                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-at "></i>
                                    </span>
                                    <InputText 
                                        placeholder="Email" 
                                        value={value_login}
                                        onChange={(e)=> {
                                            setValue_login(e.target.value)
                                        }}     
                                    />
                                </div>

                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-lock"></i>
                                    </span>
                                    <Password placeholder="Password" feedback={false} toggleMask  value={value_password} onChange={(e) => setValue_password(e.target.value)}/>
                                </div>
                                                            
                                <div className="text-center mt-3">
                                <button onClick={handleSubmit} className=" btn btn-outline-dark mb-2">
                                    Login
                                </button> <br/> 
                                
                                <NavLink to="/signup" className="nav-link ">Sign UP</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </>
    );
}

export default Login;