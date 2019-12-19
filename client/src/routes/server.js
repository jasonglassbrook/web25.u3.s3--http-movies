import fill from './_fill';

/***************************************
  base
***************************************/

const base = 'http://localhost:5000/api'

/***************************************
  path[s]
***************************************/

/// .allMovies ///
const allMovies = {}
allMovies.GET =
  () => (`/movies`)

/// .oneMovie ///
const oneMovie = {}
oneMovie.GET =
  (id) => (`/movies/${id}`)

/// assemble! ///
const path = {
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
