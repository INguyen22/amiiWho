import React from "react";
import "./Amiibo.css"
import unFavoriteIcon from "../Images/blackStar.png"

const Amiibo = ({image, name}) => {
    return (
        <div>
            <img className="amiibo-image" src={image} alt={name}/>
            <div className="amiibo-name-fav">
                <p>{name}</p>
                <img className="star" src={unFavoriteIcon} alt={unFavoriteIcon}/>
            </div>
        </div>
    )
}

export default Amiibo