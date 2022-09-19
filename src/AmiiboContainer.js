import React from "react";
import "./AmiiboContainer.css"
import Amiibo from "./Amiibo";
import Form from "./Form";

const AmiiboContainer = ({amiiboData}) => {
    const series = amiiboData.map(amiibo => amiibo.amiiboSeries)
    const uniqueSeries = series.filter((currentSeries, index) => {
        return series.indexOf(currentSeries) === index
    })
    console.log('series amiibos', uniqueSeries)
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
            <Form uniqueSeries={uniqueSeries}/>
            {amiiboFigures}
        </div>
    )
}

export default AmiiboContainer