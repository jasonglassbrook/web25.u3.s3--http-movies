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

/// .movies ///
const movies = {}

/// .movies.all ///
movies.all = {}
movies.all.VIEW =
  () => (`/movies`)
movies.all.ADD =
  () => (`/movies/add`)

/// .movies.one ///
movies.one = {}
movies.one.VIEW =
  (id) => (`/movies/${id}`)
movies.one.EDIT =
  (id) => (`/movies/${id}/edit`)
movies.one.DELETE =
  (id) => (`/movies/${id}/delete`)

/// assemble! ///
const path = {
  root,
  movies,
}

/***************************************
  full[s]
***************************************/

const full = fill (base, path)

/**************************************/

export default { base, path, full }
export { base, path, full }
