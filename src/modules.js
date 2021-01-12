const path = require('path')
const requireContext = require('node-require-context')
const mockDir = path.join(process.env.PWD, '/mock')
const context = requireContext(mockDir, true, /\.js$/)
module.exports = () => {
  return context.keys().reduce((moduleA, moduleB) => {
    return moduleA.concat(context(moduleB))
  }, [])
}
