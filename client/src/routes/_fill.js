import { like } from 'tools/iffy'

const fill = (base, path) => (
  Object.fromEntries (
    Object.entries (path).map (([ key, x ]) => {
      if (like ('Object', x)) {
        return [
          key,
          fill (base, x),
        ]
      }
      else {
        return [
          key,
          (...args) => (base + x (...args)),
        ]
      }
    })
  )
)

export default fill
