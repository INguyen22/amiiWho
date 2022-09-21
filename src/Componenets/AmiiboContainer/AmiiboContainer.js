import React from "react";
import "./AmiiboContainer.css"
import Amiibo from "../Amiibo/Amiibo";
import Form from "../Form/Form";

const AmiiboContainer = ({amiiboData, filter}) => {
    const series = amiiboData.map(amiibo => amiibo.amiiboSeries)
    const uniqueSeries = series.filter((currentSeries, index) => {
        return series.indexOf(currentSeries) === index
    })
    const amiiboFigures = amiiboData.map(amiibo => {
        const {image, name} = amiibo
        return <Amiibo
            key={image}
            image={image}
            name={name}
        />
    })
    return (
        <div className="amiibo-container">
            <Form uniqueSeries={uniqueSeries} filter={filter}/>
            {amiiboFigures}
        </div>
    )
}

export default AmiiboContainer