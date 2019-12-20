import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MovieCard from './MovieCard'

import { client, server } from 'routes'

const onServer = {
  toMovieList : server.full.movies.all,
}
const onClient = {
  toMovie : client.path.movies.one,
}

export default class MovieList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    axios
    .get (onServer.toMovieList.GET ())
    .then ((response) => {
      console.log (response);
      this.setState ({ movies: response.data })
    })
    .catch ((error) => {
      console.log (error);
    })
  }

  render () {
    return (
      <div className='movie-list'>
        {this.state.movies.map ((movie) => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    )
  }
}

function MovieDetails ({ movie }) {
  return (
    <Link to={onClient.toMovie.VIEW (movie.id)}>
      <MovieCard movie={movie} />
    </Link>
  )
}
