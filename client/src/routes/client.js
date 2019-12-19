import fill from './_fill';

/***************************************
  base
***************************************/

const base = ''

/***************************************
  path[s]
***************************************/

/// .root ///
const root = () => ('/')

/// .allMovies ///
const allMovies = {}
allMovies.VIEW =
  () => (`/movies`)

/// .oneMovie ///
const oneMovie = {}
oneMovie.VIEW =
  (id) => (`/movies/${id}`)
oneMovie.EDIT =
  (id) => (`/movies/${id}/edit`)
oneMovie.DELETE =
  (id) => (`/movies/${id}/delete`)

/// assemble! ///
const path = {
  root,
  allMovies,
  oneMovie,
}

/***************************************
  url[s]
***************************************/

const url = fill (base, path)

/**************************************/

export default { base, path, url }
export { base, path, url }
