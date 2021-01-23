import React from 'react'
import './login.css';


function Login() {
    return (
        <div className="login">
            <div className="login_continer">
                <form>
                    <center>
                        <input type="text" placeholder="Email Address"/>
                    </center>
                    <center>
                        <input type="text" placeholder="Password"/>  
                    </center>
                    <center>
                        <button type="submit" className="login_login">Log In </button>
                    </center>
                </form>

            </div>
            
        </div>
    )
}

export default Login
