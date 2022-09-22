import React, { useState } from "react";
import "./Amiibo.css"
import unFavoriteIcon from "../Images/blackStar.png"
import favoriteIcon from "../Images/yellowStar.png"
import { NavLink } from 'react-router-dom';

const Amiibo = ({image, name, tail, isFavorited, addToFavorites, removeFromFavorites}) => {
    // const [favoritedAmiibo, setFavoritedAmiibo] = useState(isFavorited)
    const addFavorites = () => {
        if (!isFavorited) {

            addToFavorites(tail)
        } else {

            removeFromFavorites(tail)
        }
    }
    return (
        <div>
            <NavLink to={`/amiiWho/amiiboDetails/${tail}`}>
                <img className="amiibo-image" src={image} alt={name}/>
            </NavLink>
            <div className="amiibo-name-fav">
                <p>{name}</p>
                {isFavorited ? <img className="star" src={favoriteIcon} alt={favoriteIcon} onClick={() => addFavorites()}/> : <img className="star" src={unFavoriteIcon} alt={unFavoriteIcon} onClick={() => addFavorites()}/>}
            </div>
        </div>
    )
}

export default Amiibo