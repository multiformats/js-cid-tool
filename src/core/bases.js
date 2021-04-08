'use strict'

const multibase = require('multibase')

module.exports = function bases () {
  const output = []

  for (const base of Object.values(multibase.names)) {
    output.push({ name: base.name, code: base.code })
  }

  return output
}
