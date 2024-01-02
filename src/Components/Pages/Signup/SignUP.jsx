import React , {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
// import './SignUp.css'
import {auth} from "../../../firebases"
import {createUserWithEmailAndPassword} from "firebase/auth"
function SignUp() {
    
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        if(password !== confPassword){
            alert('password not match')
            return
        }
        try {
            const user = await createUserWithEmailAndPassword(auth , email, password)
            if(user){
                   navigate("/login")
            }
        } catch (error) {
            //alert( "error")
            console.error(error)
        }
    }
    return (<>
            <body className='container body_style my-5 py-5'>
        <div className="container  pt-5 style_body">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow-lg ">
                        <div className="card-body bg-light">
                            <form action="">

                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Username" name='user' value={user} onChange={(e) => setUser(e.target.value)} />
                                </div>

                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-at"></i>
                                    </span>
                                    <InputText placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-lock"></i>
                                    </span>
                                    <Password name='password' placeholder="Password" feedback={true} toggleMask  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>

                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-lock"></i>
                                    </span>
                                    <Password name='confPassword' placeholder="Confirme Password" feedback={true} toggleMask  value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                </div>

                                <div className="text-center mt-3">
                                <button onClick={submit} className=" btn btn-outline-dark mb-2">
                                    Sign UP
                                </button>
                                <NavLink to="/login" className="nav-link">Already have an account ?</NavLink>
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

export default SignUp;