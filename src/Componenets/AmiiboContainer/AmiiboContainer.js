import React, { useState } from "react";
import "./AmiiboContainer.css"
import Amiibo from "../Amiibo/Amiibo";
import Form from "../Form/Form";
import PropTypes from 'prop-types';

const AmiiboContainer = ({amiiboData, filterData, filterMessage, amiiboSeries, filter, favoriteList, addToFavorites, removeFromFavorites}) => {
    const amiiboFigures = amiiboData.map(amiibo => {
        const {image, name, tail} = amiibo
       const isFavorited = Boolean(favoriteList.find(amiibo => amiibo.tail === tail))
        return <Amiibo
            key={image}
            image={image}
            name={name}
            tail={tail}
            isFavorited={isFavorited}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
        />
    })
    const filteredAmiibos = filterData.map(amiibo => {
        const {image, name, tail} = amiibo
       const isFavorited = Boolean(favoriteList.find(amiibo => amiibo.tail === tail))
        return <Amiibo
            key={image}
            image={image}
            name={name}
            tail={tail}
            isFavorited={isFavorited}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
        />
    })
    return (
        <div className="amiibo-container">
            <Form uniqueSeries={amiiboSeries} filter={filter}/>
            <div className="figures">
                {filterMessage && filterData.length === 0 && <h2>Sorry there are no characters with that name and or series, please try again🥲</h2>}
                {filterData.length !== 0 ? filteredAmiibos : amiiboFigures}
            </div>
        </div>
    )
}

export default AmiiboContainer

AmiiboContainer.propTypes = {
    amiiboData: PropTypes.arrayOf(PropTypes.object),
    filterData: PropTypes.arrayOf(PropTypes.object),
    filterMessage: PropTypes.bool,
    amiiboSeries: PropTypes.arrayOf(PropTypes.string),
    filter: PropTypes.func,
    favoriteList: PropTypes.arrayOf(PropTypes.object),
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
  };