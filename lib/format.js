const { render } = require('prettyjson')

const renderOptions = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}

module.exports = ({ data }) => render(data, renderOptions)
