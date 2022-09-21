import React, { useEffect, useState } from "react";

const AmiiboDetails = ({amiibo}) => {
    const [threeDsFeat, setThreeDsFeat] = useState([])
    const [switchFeat, setSwitchFeat] = useState([])
    const [wiiUFeat, setWiiUFeat] = useState([])

    const getAmiiboFeatures = async (amiiboName) => {
        await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${amiiboName}&showusage`)
        .then(res => res.json())
        .then(data => {
            const specificAmiiboFeats = data.amiibo.find(character => character.tail === amiibo.tail)
            console.log('specidic amiibo feats: ', specificAmiiboFeats)
            setThreeDsFeat(specificAmiiboFeats.games3DS)
            setSwitchFeat(specificAmiiboFeats.gamesSwitch)
            setWiiUFeat(specificAmiiboFeats.gamesWiiU)
        })
    }
    
    const releaseDateKeys = Object.keys(amiibo.release)
    const releaseDate = releaseDateKeys.map(key => {
        return <p key={key}> {key}: {amiibo.release[key]}</p>
    })

    const features = (console) => {
        const feats = console.map(feat => {
            // console.log('use', console.log(threeDsFeat))
            const {amiiboUsage, gameName} = feat
            return <p key={Math.random()}> {amiiboUsage[0].Usage} in {gameName}</p>
        })
        return feats
    }

    useEffect(() => {
        getAmiiboFeatures(amiibo.name)
    }, [])

    return (
        <div>
            <div>
                <img src={amiibo.image} alt={amiibo.name}/>
                <h2>{amiibo.name}</h2>
                <p>
                    Series: {amiibo.amiiboSeries}
                </p>
                <p>Release Dates:</p>
                {releaseDate}
            </div>
            <div className="amiibo-features">
                <div className="ds-features">
                    <h2>3DS unlockables</h2>
                    {features(threeDsFeat)}
                </div>
                <div className="switch-features">
                    <h2>Switch unlockables</h2>
                    {features(switchFeat)}
                </div>
                <div className="wiiU-features">
                    <h2>WiiU unlockables</h2>
                    {features(wiiUFeat)}
                </div>
            </div>
        </div>
    )
}

export default AmiiboDetails