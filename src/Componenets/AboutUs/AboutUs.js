import React from "react";
import blathers from "../Images/blathers.png"
import egad from "../Images/Egad.png"
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div>
            <h2>Our Purpose</h2>
            <p>
                Did you ever want to figure out what cool features your amiibos unlock in other games?
                Well look no further cause AmiiWho is your one stop place for all your questions!
                Find your the amiibo you're looking for and see what specific console/games your amiibo unlocks cool features in.
                Don't want to look for them again in the future? Just add them to your collection by favoriting them and you can see all your saved amiibos all in one place.
            </p>
            <div className="smart-peeps">
                <img className="blathers" src={blathers} alt={blathers}/>
                <img className="egad" src={egad} alt={egad}/>
            </div>
        </div>
    )
}

export default AboutUs