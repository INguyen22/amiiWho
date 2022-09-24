import React from "react";
import UsersAmiibo from "../UsersAmiibo/UsersAmiibo";
import "./UserCollection.css"
import PropTypes from 'prop-types';

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

UserCollection.propTypes = {
    favoriteList: PropTypes.arrayOf(PropTypes.object),
    removeFromFavorites: PropTypes.func.isRequired
  };