import React from "react";
import './LoginForm.css';

const LoginForm = () => {
    return (

        <div className="wrapper">
            <form action="">
                <h1>Sign in</h1>
                <div className="input-box">
                <input type="text" placeholder='Enter email or user name' required />
                </div>
                <div className="input-box">
                <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-forgot">
                <a href="#">Forgot password?</a>
                </div>
            <button type="sumbit">Login</button>
            <div className="additional-text">
                <h1>Sign in to</h1>
                <h4>Lorem ipsum is simply</h4>
                <p>If you don't have an account register</p>
                
            </div>
            <div className="register-link">
                <p>You can <a href="#">Register here!</a></p>
            </div>

           <div className="adding">
            <p>or continue with</p>
            <div className="social-icons">
            <a href="URL_FOR_FACEBOOK"><i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
            <a href="URL_FOR_APPLE"><i className="fab fa-apple" style={{ color: '#000' }}></i></a>
            <a href="URL_FOR_GOOGLE"><i className="fab fa-google" style={{ color: '#EA4335' }}></i></a>
            
            </div>
            
           </div>
            </form>
        </div>
        
        
    );
};

export default LoginForm;