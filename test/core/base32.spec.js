/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const CID = require('cids')
const CIDTool = require('../../')
const TestCID = require('../fixtures/test-cid')

describe('core base32', () => {
  it('should convert CIDs to base32', () => {
    const inputs = [
      TestCID.v0,
      new CID(TestCID.v0),
      new CID(TestCID.v0).bytes,
      TestCID.b32,
      new CID(TestCID.b32),
      new CID(TestCID.b32).bytes,
      TestCID.b58,
      new CID(TestCID.b58),
      new CID(TestCID.b58).bytes,
      TestCID.b64,
      new CID(TestCID.b64),
      new CID(TestCID.b64).bytes
    ]

    inputs.forEach(input => {
      expect(CIDTool.base32(input)).to.eql(TestCID.b32)
    })
  })

  it('should throw error for invalid CID', () => {
    expect(() => CIDTool.base32('INVALID_CID')).to.throw(/^invalid cid/)
  })
})
