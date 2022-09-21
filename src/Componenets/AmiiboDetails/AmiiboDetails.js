import React, { useEffect, useState } from "react";
import "./AmiiboDetails.css"
import waddleDee from "../Images/waddleDee.png"
import { Link } from 'react-router-dom'

const AmiiboDetails = ({amiibo}) => {
    console.log('amiibo', amiibo)
    const [threeDsFeat, setThreeDsFeat] = useState([])
    const [switchFeat, setSwitchFeat] = useState([])
    const [wiiUFeat, setWiiUFeat] = useState([])

    const getAmiiboFeatures = async (amiiboName) => {
        await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${amiiboName}&showusage`)
        .then(res => res.json())
        .then(data => {
            const specificAmiiboFeats = data.amiibo.find(character => character.tail === amiibo.tail)
            // console.log('specidic amiibo feats: ', specificAmiiboFeats)
            setThreeDsFeat(specificAmiiboFeats.games3DS)
            setSwitchFeat(specificAmiiboFeats.gamesSwitch)
            setWiiUFeat(specificAmiiboFeats.gamesWiiU)
        })
    }
    
    const releaseDateKeys = Object.keys(amiibo.release)
    const releaseDate = releaseDateKeys.map(key => {
        return <li key={key}> {key}: {amiibo.release[key]}</li>
    })

    const features = (console) => {
        const feats = console.map(feat => {
            // console.log('use', console.log(threeDsFeat))
            const {amiiboUsage, gameName} = feat
            return <li key={Math.random()}> {amiiboUsage[0].Usage} in {gameName}</li>
        })
        return feats
    }

    useEffect(() => {
        getAmiiboFeatures(amiibo.character)
    }, [])

    return (
        <div className="amiibo-details-container">
            <div className="back-button-container">
                {/* <button className="back-button"> */}
                    <Link to={`/`} className="link"> Go Back Home<img className="waddle-icon"  src={waddleDee} alt="back icon"/></Link>
                {/* </button> */}
            </div>
        <div className="amiibo-details">
            <div>
                <img src={amiibo.image} alt={amiibo.name}/>
                <h2>{amiibo.name}</h2>
                <p>
                    Series: {amiibo.amiiboSeries}
                </p>
                <p>Release Dates:</p>
                <ul>
                    {releaseDate}
                </ul>
            </div>
            <div className="amiibo-features">
                <div className="ds-features">
                    <h2>3DS unlockables</h2>
                    <ul>
                        {features(threeDsFeat)}
                    </ul>
                </div>
                <div className="switch-features">
                    <h2>Switch unlockables</h2>
                    <ul>
                        {features(switchFeat)}
                    </ul>
                </div>
                <div className="wiiU-features">
                    <h2>WiiU unlockables</h2>
                    <ul>
                        {features(wiiUFeat)}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AmiiboDetails