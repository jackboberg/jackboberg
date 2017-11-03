const format = require('./lib/format')
const data = require('./info.json')

module.exports = ({ json }) => json ? JSON.stringify(data) : format({ data })
