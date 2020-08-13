/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const multibase = require('multibase')
const CIDToolCli = require('./utils/cid-tool-cli')

describe('cli bases', () => {
  it('should list multibase names', async () => {
    const cli = CIDToolCli()
    const expectedOutput = Object.keys(multibase.names).join('\n') + '\n'
    const { stdout } = await cli('bases')
    expect(stdout).to.equal(expectedOutput)
  })

  it('should list multibase codes and names', async () => {
    const cli = CIDToolCli()
    const expectedOutput = Object.keys(multibase.names)
      .map(name => multibase.names[name])
      .map(base => `${base.code}\t${base.name}`)
      .join('\n') + '\n'
    const { stdout } = await cli('bases --prefix')
    expect(stdout).to.equal(expectedOutput)
  })

  it('should list multibase numeric codes and names', async () => {
    const cli = CIDToolCli()
    const expectedOutput = Object.keys(multibase.names)
      .map(name => multibase.names[name])
      .map(base => `${base.code.charCodeAt(0)}\t${base.name}`)
      .join('\n') + '\n'
    const { stdout } = await cli('bases --numeric')
    expect(stdout).to.equal(expectedOutput)
  })

  it('should list multibase codes, numeric codes and names', async () => {
    const cli = CIDToolCli()
    const expectedOutput = Object.keys(multibase.names)
      .map(name => multibase.names[name])
      .map(base => `${base.code}\t${base.code.charCodeAt(0)}\t${base.name}`)
      .join('\n') + '\n'
    const { stdout } = await cli('bases --prefix --numeric')
    expect(stdout).to.equal(expectedOutput)
  })
})
