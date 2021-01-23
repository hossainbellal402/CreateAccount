import React from 'react'
import './Header.css';
import { link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <link className= "link" to="/" >
                <img src=" "/> 
            </link>
            <link className= "/register" to= "/register" >
            <button className= "header_button" >Create New Account </button>
            </link>
        </div>
    )
}

export default Header

