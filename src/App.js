import React, { useState, useEffect } from "react";
import Header from "./Header";
import AmiiboContainer from "./AmiiboContainer";
import AmiiboDetails from "./AmiiboDetails";
import UserCollection from "./UserCollection";
import AboutUs from "./AboutUs";
import { Route, Switch} from 'react-router-dom';

const App = () => {
  const [amiibos, setAmiibos] = useState([])
  const [favoriteList, setFavoriteList] = useState([])

  const getAmiiboData = () => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
    .then(res => res.json())
    .then(data => {
      console.log(data.amiibo)
      setAmiibos(data.amiibo)
    })
  }

  useEffect(() => {
    getAmiiboData()
  }, [])

  return (
    <div>
      <Header/>
      {/* <Switch> */}
        <Route exact path="/" render={() => <AmiiboContainer amiiboData={amiibos}/>}/>
        <Route exact path="/amiiWho/:amiiboTail" render={({match}) => {
            const foundAmiibo = amiibos.find(amiibo => amiibo.tail === match.params.amiiboTail)
            return <AmiiboDetails amiibo={foundAmiibo}/>}}/>
        <Route exact path="/amiiWho/myCollection" render={() => <UserCollection favoriteList={favoriteList}/>}/>
        <Route exact path="/amiiWho/AboutUs" render={() => <AboutUs/>}/>
      {/* </Switch> */}
    </div>
  )
}

export default App;
