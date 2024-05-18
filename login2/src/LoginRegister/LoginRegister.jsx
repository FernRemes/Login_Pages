import React, {useState} from 'react';
import './LoginRegister.css';
import { IoPersonCircle } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function LoginRegister(){

    const [action, setAction] = useState('Login');
    return(
        <div className = 'wrapper'>
            <div className = {'form-box ${action.toLowerCase()}'}>
                <form action = ''>
                    <h1>{action}</h1>
                    <div className = 'input-group'>
                        <input type = 'text' placeholder = 'Username' required/>
                        <IoPersonCircle className = 'icon'/>
                    </div>
                    {action === 'Login' ? <div></div> : <div className = 'input-group'>
                        <input type = 'text' placeholder = 'Email' required/>
                        <IoMdMail className = 'icon'/>
                    </div>
                    }
                    <div className = 'input-group'>
                        <input type = 'password' placeholder = 'Password' required/>
                        <FaLock className = 'icon'/>
                    </div>
                    {action === 'Login' ? <div className = 'remember-forgot'>
                        <label><input type = 'checkbox'/>Remember Me</label>
                        <a href = '#'>Forgot password?</a>
                    </div> : <div></div>}
                    {action === 'Login' ? <button type = 'submit'>Login</button> : <button type = 'submit'>Register</button>}
                    
                    {action === 'Login' ? <div className="register-link">
                        <p>Don't have an account? <a href = '#' onClick = {() => {setAction('Registation')}}>Register</a></p>
                    </div> : <div className="register-link">
                        <p>Already have an account? <a href = '#' onClick = {() => {setAction('Login')}}>Login</a></p>
                    </div>
                    }

                </form>
            </div>

            {/* <div className = 'form-box register'>
                <form action = ''>
                    <h1>Registration</h1>
                    <div className = 'input-group'>
                        <input type = 'text' placeholder = 'Username' required/>
                        <IoPersonCircle className = 'icon'/>
                    </div>
                    <div className = 'input-group'>
                        <input type = 'text' placeholder = 'Email' required/>
                        <IoMdMail className = 'icon'/>
                    </div>
                    <div className = 'input-group'>
                        <input type = 'password' placeholder = 'Password' required/>
                        <FaLock className = 'icon'/>
                    </div>

                    <button type = 'submit'>Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href = '#'>Login</a></p>
                    </div>

                </form>
            </div> */}
        </div>
    )
}

export default LoginRegister;