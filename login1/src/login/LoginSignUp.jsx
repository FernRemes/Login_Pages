import React, {useState} from 'react';
import './LoginSignUp.css';

import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png';
import email_icon from '../assets/email.png';

function LoginSignUp(){

    const [action, setAction] = useState('Sign Up');
    return(
        <div className = 'container'>
            <div className = 'header'>
                <div className = 'text'>{action}</div>
                <div className = 'underline'></div>
            </div>
            <div className = 'inputs'>
                {action === 'Login' ? <div></div> : 
                <div className = 'input'>
                    <img src = {user_icon} alt = 'user_icon'/>
                    <input type = 'text' placeholder = 'Username'/>
                </div>}
                
                <div className = 'input'>
                    <img src = {email_icon} alt = 'email_icon'/>
                    <input type = 'text' placeholder = 'Email'/>
                </div>
                <div className = 'input'>
                    <img src = {password_icon} alt = 'password_icon'/>
                    <input type = 'text' placeholder = 'Password'/>
                </div>
                {/* <div className = 'input'>
                    <img src = {password_icon} alt = 'password_icon'/>
                    <input type = 'text' placeholder = 'Confirm Password'/>
                </div> */}
                {action === 'Sign Up' ? <div></div> : 
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
                
                <div className = 'submit-container'>
                    <div className= {action === "Login" ? "submit gray" : "submit"} onClick = {() => {setAction('Sign Up')}}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"}onClick = {() => {setAction('Login')}}>Login</div>
                </div>
            </div>
            
        </div>
    )

}

export default LoginSignUp;