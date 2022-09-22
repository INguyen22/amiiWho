import React from "react";
import trash from "../Images/Garbage-Can.png"
import { NavLink } from 'react-router-dom';
import "./UsersAmiibo.css"

const UsersAmiibo = ({image, name, tail, removeFromFavorites}) => {
    return (
        <div className="collection-container">
            <NavLink to={`/amiiWho/amiiboDetails/${tail}`}>
                <img className="user-amiibo-image" src={image} alt={name}/>
            </NavLink>
            <img className="trash-icon" src={trash} alt={trash} onClick={() => removeFromFavorites(tail)}/>
        </div>
    )
}

export default UsersAmiibo