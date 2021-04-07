'use strict'

const CID = require('cids')

module.exports = function codecs () {
  const output = []

  for (const [key, value] of Object.entries(CID.codecs)) {
    output.push({ name: key, code: value })
  }

  return output
}
