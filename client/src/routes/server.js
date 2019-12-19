import fill from './_fill';

const route = {
  base : 'http://localhost:5000/api',
  to   : {},
  full : {},
}

route.to.movies.GET =
  (id) => (`/movies/${id}`)


route.full = fill (route.base, route.to)

export default route
