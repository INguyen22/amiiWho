import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import AmiiboContainer from "../AmiiboContainer/AmiiboContainer";
import AmiiboDetails from "../AmiiboDetails/AmiiboDetails";
import UserCollection from "../UserCollection/UserCollection";
import AboutUs from "../AboutUs/AboutUs";
import { Route } from 'react-router-dom';

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

  const filter = (characterName, characterSeries) => {
    if(characterName && characterSeries) {
      const filteredAmiibos = amiibos.filter(amiibo => amiibo.name.toLowerCase().startsWith(characterName.toLowerCase()) && amiibo.amiiboSeries === characterSeries)
        return setAmiibos(filteredAmiibos)
    }
    else if(characterName && !characterSeries) {
      const filteredAmiibos = amiibos.filter(amiibo => amiibo.name.toLowerCase().startsWith(characterName.toLowerCase()))
        return setAmiibos(filteredAmiibos)
    }
    else if(!characterName && characterSeries) {
      const filteredAmiibos = amiibos.filter(amiibo => amiibo.amiiboSeries === characterSeries)
        return setAmiibos(filteredAmiibos)
    }
    else {
      getAmiiboData();
    }
  }

  const addToFavorites = (amiiboTail) => {
    const favoriteAmiibo = amiibos.find(amiibo => amiibo.tail === amiiboTail)
    if(!favoriteList.includes(favoriteAmiibo)) {
      setFavoriteList([...favoriteList, favoriteAmiibo])
    }
  }

  const removeFromFavorites = (amiiboTail) => {
    const filteredAmiibos = favoriteList.filter(amiibo => amiibo.tail !== amiiboTail)
    setFavoriteList(filteredAmiibos)
  }

  useEffect(() => {
    getAmiiboData()
  }, [])

  return (
    <div>
      <Header/>
      <Route exact path="/" render={() => <AmiiboContainer amiiboData={amiibos} filter={filter} favoriteList={favoriteList} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}/>
      <Route exact path="/amiiWho/amiiboDetails/:amiiboTail" render={({match}) => {
          const foundAmiibo = amiibos.find(amiibo => amiibo.tail === match.params.amiiboTail)
          return <AmiiboDetails amiibo={foundAmiibo}/>}}/>
      <Route exact path="/amiiWho/myCollection" render={() => <UserCollection favoriteList={favoriteList} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}/>
      <Route exact path="/amiiWho/AboutUs" render={() => <AboutUs/>}/>
    </div>
  )
}

export default App;
