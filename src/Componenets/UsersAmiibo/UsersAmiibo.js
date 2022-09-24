import React from "react";
import trash from "../Images/Garbage-Can.png"
import { NavLink } from 'react-router-dom';
import "./UsersAmiibo.css"
import PropTypes from 'prop-types';

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

UsersAmiibo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    tail: PropTypes.string,
    removeFromFavorites: PropTypes.func.isRequired
  };