'use strict'

const multibase = require('multibase')

module.exports = function bases () {
  return Object.keys(multibase.names).map(name => {
    const base = multibase.names[name]

    return { name: base.name, code: base.code }
  })
}
