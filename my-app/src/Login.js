import React from 'react'
import './login.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className="login_continer">
                <h3>Log In To New App</h3>
                <form>
                    <center>
                        <input type="text" placeholder="Email Address"/>
                    </center>
                    <center>
                        <input type="text" placeholder="Password"/>  
                    </center>
                    <center>
                        <button type="submit" className="login_login"> Log In </button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr/>
                    </center>
                    <center>
                        <link to="/register">
                            <button className="login_CreateNewAccount">Create New Account</button>

                        </link>
                    </center>
                </form>

            </div>
            
        </div>
    )
}

export default Login
