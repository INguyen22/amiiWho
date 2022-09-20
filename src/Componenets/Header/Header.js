import React from "react";
import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>AmiiWho?</h1>
            <nav>
                <button><NavLink to="/" className="nav">Home</NavLink></button>
                <button><NavLink to="/amiiWho/myCollection" className="nav">View My Collection</NavLink></button>
                <button><NavLink to="/amiiWho/aboutUs" className="nav">About Us</NavLink></button>
            </nav>
        </div>
    )
}

export default Header