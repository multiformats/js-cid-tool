/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const CIDToolCli = require('./utils/cid-tool-cli')
const TestCID = require('../fixtures/test-cid')

describe('cli format', () => {
  it('should format CID and change to CIDv1', async () => {
    const cli = CIDToolCli()
    const expectedOutput = TestCID.b58 + '\n'
    const { stdout } = await cli(`format ${TestCID.v0} --cid-version=1`)
    expect(stdout).to.equal(expectedOutput)
  })

  it('should format CID and change to base64', async () => {
    const cli = CIDToolCli()
    const expectedOutput = TestCID.b64 + '\n'
    const { stdout } = await cli(`format ${TestCID.b32} --base=base64`)
    expect(stdout).to.equal(expectedOutput)
  })

  it('should format CID and change to CIDv1 and base32', async () => {
    const cli = CIDToolCli()
    const expectedOutput = TestCID.b32 + '\n'
    const { stdout } = await cli(`format ${TestCID.v0} --cid-version=1 --base=base32`)
    expect(stdout).to.equal(expectedOutput)
  })

  it('should support piping multiple newline delimited CIDs to formatter', async () => {
    const cli = CIDToolCli()
    const input = Object.keys(TestCID).map(k => TestCID[k])
    const expectedOutput = input.map(() => TestCID.b32).join('\n') + '\n'
    const proc = cli('format --cid-version=1 --base=base32')
    input.forEach(cid => proc.stdin.write(`${cid}\n`))
    proc.stdin.end()
    const { stdout } = await proc
    expect(stdout).to.equal(expectedOutput)
  })
})
