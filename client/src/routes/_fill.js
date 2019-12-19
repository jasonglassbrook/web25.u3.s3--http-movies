const fill = (base, ends) => (
  Object.fromEntries (
    Object.entries (ends).map (([ key, x ]) => {
      if (Object.isObject (x)) {
        return [ key, fill (base, x) ]
      }
      else {
        return [ key, (...args) => (base + x (...args)) ]
      }
    })
  )
)

export default fill
