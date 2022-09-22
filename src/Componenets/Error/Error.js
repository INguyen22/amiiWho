import React from "react";
import { Link } from 'react-router-dom'
import merchant from "../Images/merchant.png"
import "./Error.css"

const Error = () => {
    return (
        <div className="error-container">
            <h2 className="error" >Oh no...looks like you need help. Click me and i'll take you back home hehehehe </h2>
            <Link to="/"><img className="merchant-guy" src={merchant} alt="Invlaid url" /></Link>
        </div>
    )
}

export default Error