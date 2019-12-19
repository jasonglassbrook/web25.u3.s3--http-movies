import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { client } from 'routes'

import SavedList from 'components/SavedList'
import MovieList from 'components/MovieList'
import Movie from 'components/Movie'

const App = () => {
  const [ savedList, setSavedList ] = useState ([])

  const addToSavedList = (movie) => {
    setSavedList ([ ...savedList, movie ])
  }

  return (
    <Router>
      <SavedList list={savedList} />
      <Route exact path={client.path.root ()} component={MovieList} />
      <Route
        path={client.path.oneMovie.VIEW (':id')}
        render={(props) => {
          return <Movie {...props} addToSavedList={addToSavedList} />
        }}
      />
    </Router>
  )
}

export default App
