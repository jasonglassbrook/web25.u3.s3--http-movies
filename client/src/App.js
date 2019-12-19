import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { client } from 'routes'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [ savedList, setSavedList ] = useState ([])

  const addToSavedList = (movie) => {
    setSavedList ([ ...savedList, movie ])
  }

  return (
    <Router>
      <SavedList list={savedList} />
      <Route exact path={client.to.root ()} component={MovieList} />
      <Route
        path={client.to.oneMovie (':id')}
        render={(props) => {
          return <Movie {...props} addToSavedList={addToSavedList} />
        }}
      />
    </Router>
  )
}

export default App
