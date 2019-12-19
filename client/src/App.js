import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { client } from 'routes'

import SavedList from 'components/SavedList'
import MovieList from 'components/MovieList'
import Movie from 'components/Movie'
// import AddMovieForm from 'components/AddMovieForm'
import EditMovieForm from 'components/EditMovieForm'
import DeleteMovieForm from 'components/DeleteMovieForm'

const App = () => {
  const [ savedList, setSavedList ] = useState ([])

  const addToSavedList = (movie) => {
    setSavedList ([ ...savedList, movie ])
  }

  return (
    <Router>
      <SavedList list={savedList}/>
      <Route
        exact path={[
          client.path.root (),
          client.path.movies.all.VIEW (),
        ]}
        component={MovieList}
      />
      <Route
        path={client.path.movies.one.VIEW (':id')}
        render={(props) => (
          <Movie {...props}
          addToSavedList={addToSavedList}
          />
        )}
      />
      <Route
        exact path={client.path.movies.one.EDIT (':id')}
        render={(props) => (
          <EditMovieForm {...props}/>
        )}
      />
      <Route
        exact path={client.path.movies.one.DELETE (':id')}
        render={(props) => (
          <DeleteMovieForm {...props}/>
        )}
      />
    </Router>
  )
}

export default App
