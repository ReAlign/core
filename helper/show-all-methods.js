const TinyCore = require('../dist/tiny-core')

function depthFirst(tree) {
  const stack = [[tree, '']]
  const res = []
  while (stack.length) {
    const [crt, crtPath] = stack.pop()
    if (typeof crt === 'object') {
      const entries = Object.entries(crt)
      let i = entries.length
      while (i--) {
        const [key, value] = entries[i]
        const path = crtPath ? `${crtPath}.${key}` : key
        stack.push([value, path])
      }
    } else {
      res.push(crtPath)
    }
  }
  return res
}
const result = depthFirst(TinyCore)
  .filter(item => item.indexOf('default') === -1)
  .join('\n')

console.log(result)