/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const multihash = require('multihashes')
const CIDTool = require('../../')

describe('core hashes', () => {
  it('should return list of multihash hashing algorithm names and codes', () => {
    const hashes = CIDTool.hashes()

    expect(Object.keys(multihash.names).every(name => {
      return hashes.find(h => h.name === name && h.code === multihash.names[name])
    })).to.be.true()
  })
})
