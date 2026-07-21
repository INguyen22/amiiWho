import React, { useEffect, useState } from "react";
import "./Form.css"
import PropTypes from 'prop-types';

const Form = ({uniqueSeries, filter, amiiboName, setAmiiboName, amiiboSeries, setAmiiboSeries}) => {
    // const [amiiboName, setAmiiboName] = useState("")
    // const [amiiboSeries, setAmiiboSeries] = useState("")

    const seriesOptions = uniqueSeries.map(series => {
        return <option key={series} value={series}>{series}</option>
    })

    useEffect(() => {
        filter(amiiboName,amiiboSeries)
        }, [amiiboName, amiiboSeries, filter])
    // useEffect(() => {
    //     filter(amiiboName)
    //   }, [amiiboName, filter])

    // useEffect(() => {
    //     filter(amiiboSeries)
    // }, [amiiboSeries,filter])

    return (
        <div className="form-container">
            <form >
                <input 
                    name="amiiboName"
                    value={amiiboName}
                    placeholder="Find Character By Name"
                    onChange={(event) => setAmiiboName(event.target.value)}
                />
                <select 
                    name="amiiboSeries"
                    value={amiiboSeries}
                    placeholder="Find Amiibos By Series"
                    onChange={(event) => setAmiiboSeries(event.target.value)}
                >
                    <option value="">Find Amiibo By Series</option>
                        {seriesOptions}  
                </select>
            </form>
        </div>
    )
}

export default Form

Form.propTypes = {
    uniqueSeries: PropTypes.arrayOf(PropTypes.string),
    filter: PropTypes.func.isRequired,
    amiiboName: PropTypes.string.isRequired,
    setAmiiboName: PropTypes.func.isRequired,
    amiiboSeries: PropTypes.string.isRequired,
    setAmiiboSeries: PropTypes.func.isRequired
  };