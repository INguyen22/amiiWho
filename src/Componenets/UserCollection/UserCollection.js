import React from "react";
import UsersAmiibo from "../UsersAmiibo/UsersAmiibo";
import "./UserCollection.css"

const UserCollection = ({favoriteList, removeFromFavorites}) => {
    const amiiboFigures = favoriteList.map(amiibo => {
        const {image, name, tail} = amiibo
        return <UsersAmiibo
            key={image}
            image={image}
            name={name}
            tail={tail}
            removeFromFavorites={removeFromFavorites}
        />
    })
    return (
        <div className="user-amiibo-collection-container">
            {amiiboFigures}
        </div>
    )
}

export default UserCollection