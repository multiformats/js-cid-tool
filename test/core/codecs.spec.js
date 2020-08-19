/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const CID = require('cids')
const CIDTool = require('../../')

describe('core codecs', () => {
  it('should return list of CID codec names and codes', () => {
    const codecs = CIDTool.codecs()

    expect(Object.keys(CID.codecs).every(name => {
      return codecs.find(c => {
        return c.name === name &&
          c.code === CID.codecs[name]
      })
    })).to.be.true()
  })
})
