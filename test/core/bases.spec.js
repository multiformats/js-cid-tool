/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const multibase = require('multibase')
const CIDTool = require('../../')

describe('core bases', () => {
  it('should return list of multibase names and codes', () => {
    const bases = CIDTool.bases()
    expect(Object.keys(multibase.names).every(name => bases.find(b => b.name === name)))
      .to.be.true()
  })
})
