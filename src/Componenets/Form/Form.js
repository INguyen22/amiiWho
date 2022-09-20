import React, { useState } from "react";
import "./Form.css"

const Form = ({uniqueSeries}) => {
    const [amiiboName, setAmiiboName] = useState('')
    const [amiiboSeries, setAmiiboSeries] = useState('')

    const seriesOptions = uniqueSeries.map(series => {
        return <option key={series} value={series}>{series}</option>
    })

    const handleChange = (event) => {
        const {value} = event.target
        setAmiiboName(value)
        setAmiiboSeries(value)
    }
    return (
        <div className="form-container">
            <form>
                <input 
                    name="amiiboName"
                    value={amiiboName}
                    placeholder="Find Character By Name"
                    onChange={handleChange}
                />
                <select 
                    name="amiiboSeries"
                    value={amiiboSeries}
                    placeholder="Find Amiibos By Series"
                    onChange={handleChange}
                >
                    <option disabled value="">Find Amiibo By Series</option>
                        {seriesOptions}  
                </select>
            </form>
        </div>
    )
}

export default Form