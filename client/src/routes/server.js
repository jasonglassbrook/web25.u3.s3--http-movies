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
movies.all.POST =
  () => (`/movies`)

/// .movies.one ///
movies.one = {}
movies.one.GET =
  (id) => (`/movies/${id}`)
movies.one.PUT =
  (id) => (`/movies/${id}`)
movies.one.DELETE =
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
