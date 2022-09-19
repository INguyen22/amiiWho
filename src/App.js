import React, { useState, useEffect } from "react";
import Header from "./Header";
import AmiiboContainer from "./AmiiboContainer";
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
      <Switch>
        <Route exact path="/" render={() => <AmiiboContainer amiiboData={amiibos}/>}/>
      </Switch>
    </div>
  )
}

export default App;
