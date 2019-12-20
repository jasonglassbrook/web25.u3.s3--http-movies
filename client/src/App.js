import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import SavedList from 'components/SavedList'
import MovieList from 'components/MovieList'
import Movie from 'components/Movie'
// import AddMovieForm from 'components/AddMovieForm'
import EditMovieForm from 'components/EditMovieForm'
import DeleteMovieForm from 'components/DeleteMovieForm'

import { client } from 'routes'

const onClient = {
  toHome : client.path.root,
  toMovieList : client.path.movies.all,
  toMovie : client.path.movies.one,
}

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
          onClient.toHome (),
          onClient.toMovieList.VIEW (),
        ]}
        component={MovieList}
      />
      <Route
        exact path={onClient.toMovie.VIEW (':id')}
        render={(props) => (
          <Movie {...props}
          addToSavedList={addToSavedList}
          />
        )}
      />
      <Route
        exact path={onClient.toMovie.EDIT (':id')}
        render={(props) => (
          <EditMovieForm {...props}/>
        )}
      />
      <Route
        exact path={onClient.toMovie.DELETE (':id')}
        render={(props) => (
          <DeleteMovieForm {...props}/>
        )}
      />
    </Router>
  )
}

export default App
