import React, { useState } from "react";
import "./AmiiboContainer.css"
import Amiibo from "../Amiibo/Amiibo";
import Form from "../Form/Form";

const AmiiboContainer = ({amiiboData, amiiboSeries, filter, favoriteList, addToFavorites, removeFromFavorites}) => {

    const amiiboFigures = amiiboData.map(amiibo => {
        const {image, name, tail} = amiibo
        // console.log('rendering', amiibo)
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
            {amiiboFigures}
        </div>
    )
}

export default AmiiboContainer