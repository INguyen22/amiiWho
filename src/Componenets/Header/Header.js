import React from "react";
import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header-link"><h1>AmiiWho?</h1></NavLink>
            <nav>
                <button className="nav-button" id="home" ><NavLink to="/" className="nav">Home</NavLink></button>
                <button className="nav-button" id="myCollection" ><NavLink to="/amiiWho/myCollection" className="nav">View My Collection</NavLink></button>
                <button className="nav-button" id="aboutUs" ><NavLink to="/amiiWho/AboutUs" className="nav">About Us</NavLink></button>
            </nav>
        </div>
    )
}

export default Header