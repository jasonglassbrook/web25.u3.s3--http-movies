import fill from './_fill';

/***************************************
  base
***************************************/

const base = 'http://localhost:5000/api'

/***************************************
  path[s]
***************************************/

/// .movies ///
const movies = {}

/// .movies.all ///
movies.all = {}
movies.all.GET =
  () => (`/movies`)

/// .movies.one ///
movies.one = {}
movies.one.GET =
  (id) => (`/movies/${id}`)

/// assemble! ///
const path = {
  movies,
}

/***************************************
  full[s]
***************************************/

const full = fill (base, path)

/**************************************/

export default { base, path, full }
export { base, path, full }
