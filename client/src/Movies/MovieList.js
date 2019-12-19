import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { client, server } from 'routes'

import MovieCard from './MovieCard'
export default class MovieList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    axios
    .get (server.url.allMovies.GET ())
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
    <Link to={client.to.oneMovie (movie.id)}>
      <MovieCard movie={movie} />
    </Link>
  )
}
