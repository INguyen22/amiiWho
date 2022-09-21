import React from "react";
import "./Amiibo.css"
import unFavoriteIcon from "../Images/blackStar.png"
import { NavLink } from 'react-router-dom';

const Amiibo = ({image, name, tail}) => {
    return (
        <div>
            <NavLink to={`/amiiWho/${tail}`}>
                <img className="amiibo-image" src={image} alt={name}/>
            </NavLink>
            <div className="amiibo-name-fav">
                <p>{name}</p>
                <img className="star" src={unFavoriteIcon} alt={unFavoriteIcon}/>
            </div>
        </div>
    )
}

export default Amiibo