import { like } from 'tools/iffy'

const fill = (base, ends) => (
  Object.fromEntries (
    Object.entries (ends).map (([ key, x ]) => {
      if (like ('Object', x)) {
        return [ key, fill (base, x) ]
      }
      else {
        return [ key, (...args) => (base + x (...args)) ]
      }
    })
  )
)

export default fill
