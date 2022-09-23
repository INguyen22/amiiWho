import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import AmiiboContainer from "../AmiiboContainer/AmiiboContainer";
import AmiiboDetails from "../AmiiboDetails/AmiiboDetails";
import UserCollection from "../UserCollection/UserCollection";
import AboutUs from "../AboutUs/AboutUs";
import Error from "../Error/Error";
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [amiibos, setAmiibos] = useState([])
  const [amiiboSeries, setAmiiboSeries] = useState([])
  const [favoriteList, setFavoriteList] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getAmiiboData = () => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
    .then(res => {
      if(!res.ok) {
        throw new Error()
      } else {
        setError(false)
        return res.json()
      }
    })
    .then(data => {
      console.log(data.amiibo)
      const series = data.amiibo.map(amiibo => amiibo.amiiboSeries)
      const uniqueSeries = series.filter((currentSeries, index) => {
          return series.indexOf(currentSeries) === index
      })
      setAmiiboSeries(uniqueSeries)
      setAmiibos(data.amiibo)
    })
    .catch(error => {
      setError(true)
      setErrorMessage('Error 404. The data could not be fetched. Please reload and try again')
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
      <Switch>
      {error && <h3 className="error-message">{errorMessage}</h3>}
        <Route exact path="/" render={() => <AmiiboContainer amiiboData={amiibos} amiiboSeries={amiiboSeries} filter={filter} favoriteList={favoriteList} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}/>
        <Route exact path="/amiiWho/amiiboDetails/:amiiboTail" render={({match}) => {
            const foundAmiibo = amiibos.find(amiibo => amiibo.tail === match.params.amiiboTail)
            return <AmiiboDetails amiibo={foundAmiibo}/>}}/>
        <Route exact path="/amiiWho/myCollection" render={() => <UserCollection favoriteList={favoriteList} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}/>
        <Route exact path="/amiiWho/AboutUs" render={() => <AboutUs/>}/>
        <Route render={() => <Error/>}/>
      </Switch>
    </div>
  )
}

export default App;
