const format = require('./lib/format')
const data = require('./info.json')

module.exports = ({ json, cow = 'whale' }) => json
  ? JSON.stringify(data)
  : format({ data, cow })
