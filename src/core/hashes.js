'use strict'

const multihash = require('multihashes')

// TODO: list only safe hashes https://github.com/ipfs/go-verifcid
module.exports = function hashes () {
  const output = []

  for (const [name, code] of Object.entries(multihash.names)) {
    output.push({ name, code })
  }

  return output
}
