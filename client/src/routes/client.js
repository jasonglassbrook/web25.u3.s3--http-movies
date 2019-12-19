import fill from './_fill';

const route = {
  base : '',
  to   : {},
  full : {},
}

route.to.root =
  () => (`/`)
route.to.allMovies =
  () => (`/movies`)
route.to.oneMovie =
  (id) => (`/movies/${id}`)

route.full = fill (route.base, route.to)

export default route
