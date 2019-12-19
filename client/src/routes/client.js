import fill from './_fill';

/**************************************/

/// route, route.base ///
const route = {
  base : ''
}

/// route.to ///
route.to = {}
route.to.root =
  () => (`/`)
route.to.allMovies =
  () => (`/movies`)
route.to.oneMovie =
  (id) => (`/movies/${id}`)

/// route.url ///
route.url = fill (route.base, route.to)

/**************************************/

export default route
