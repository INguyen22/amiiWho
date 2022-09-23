import React, { useState } from "react";
import "./AmiiboContainer.css"
import Amiibo from "../Amiibo/Amiibo";
import Form from "../Form/Form";

const AmiiboContainer = ({amiiboData, amiiboSeries, filter, favoriteList, addToFavorites, removeFromFavorites}) => {

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
    return (
        <div className="amiibo-container">
            <Form uniqueSeries={amiiboSeries} filter={filter}/>
            {amiiboData.length === 0 && <h2>Sorry there are no characters with that name or series, please try again🥲</h2>}
            <div className="figures">
                {amiiboFigures}
            </div>
        </div>
    )
}

export default AmiiboContainer