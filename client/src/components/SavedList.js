import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { client } from 'routes'

const onClient = {
  toHome : client.path.root,
  toMovie : client.path.movies.one,
}

export default class SavedList extends Component {
  render () {
    return (
      <div className='saved-list'>
        <h3>Saved Movies:</h3>
        {this.props.list.map ((movie) => {
          return (
            <NavLink
            to={onClient.toMovie.VIEW (movie.id)}
            key={movie.id}
            activeClassName='saved-active'
            >
              <span className='saved-movie'>{movie.title}</span>
            </NavLink>
          )
        })}
        <div className='home-button'>
          <Link to={onClient.toHome ()}>Home</Link>
        </div>
      </div>
    )
  }
}
