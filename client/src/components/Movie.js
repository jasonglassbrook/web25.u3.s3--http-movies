import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import MovieCard from './MovieCard'

import { client, server } from 'routes'

const onServer = {
  toMovie : server.full.movies.one,
}
const onClient = {
  toMovie : client.path.movies.one,
}

export default class Movie extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      movie: null
    }
  }

  componentDidMount () {
    this.fetchMovie (this.props.match.params.id)
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie (newProps.match.params.id)
    }
  }

  fetchMovie = (id) => {
    axios
      .get (onServer.toMovie.GET (id))
      .then ((response) => this.setState ({ movie: response.data }))
      .catch ((error) => console.log (error.response))
  }

  saveMovie = (e) => {
    e.preventDefault ()
    const addToSavedList = this.props.addToSavedList
    addToSavedList (this.state.movie)
  }

  render () {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    return (
      <div className='save-wrapper'>
        <MovieCard movie={this.state.movie} />
        <div className='save-button' onClick={this.saveMovie}>
          Save
        </div>
        <Link to={onClient.toMovie.EDIT (this.state.movie.id)}>
          Edit
        </Link>
        <Link to={onClient.toMovie.DELETE (this.state.movie.id)}>
          Delete
        </Link>
      </div>
    )
  }
}
