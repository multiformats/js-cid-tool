'use strict'

const CID = require('cids')
// @ts-ignore no types
const explain = require('explain-error')

/**
 * @param {CID | string | Uint8Array} cid
 */
module.exports = function base32 (cid) {
  try {
    cid = new CID(cid)
  } catch (err) {
    throw explain(err, `invalid cid: ${cid}`)
  }

  if (cid.version !== 1) {
    cid = cid.toV1()
  }

  return cid.toBaseEncodedString('base32')
}
