import React, { useState } from "react";
import "./Amiibo.css"
import unFavoriteIcon from "../Images/blackStar.png"
import favoriteIcon from "../Images/yellowStar.png"
import { NavLink } from 'react-router-dom';

const Amiibo = ({image, name, tail, favorited, addToFavorites}) => {
    const [favoritedAmiibo, setFavoritedAmiibo] = useState(favorited)
    const addFavorites = () => {
        if (!favorited) {
            setFavoritedAmiibo(true)
            addToFavorites(tail)
        } else {
            setFavoritedAmiibo(false)
        }
    }
    return (
        <div>
            <NavLink to={`/amiiWho/${tail}`}>
                <img className="amiibo-image" src={image} alt={name}/>
            </NavLink>
            <div className="amiibo-name-fav">
                <p>{name}</p>
                {favoritedAmiibo ? <img className="star" src={favoriteIcon} alt={favoriteIcon}/> : <img className="star" src={unFavoriteIcon} alt={unFavoriteIcon} onClick={() => addFavorites()}/>}
            </div>
        </div>
    )
}

export default Amiibo