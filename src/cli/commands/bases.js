'use strict'

const CIDTool = require('../../')

module.exports = {
  command: 'bases',

  describe: 'List available multibase encoding names.',

  builder: {
    prefix: {
      describe: 'Display the single letter encoding codes as well as the encoding name.',
      type: 'boolean',
      default: false
    },
    numeric: {
      describe: 'Display the numeric encoding code as well as the encoding name',
      type: 'boolean',
      default: false
    }
  },

  /**
   * @param {object} argv
   * @param {boolean} [argv.prefix]
   * @param {boolean} [argv.numeric]
   */
  handler (argv) {
    CIDTool.bases().forEach(({ name, code }) => {
      if (argv.prefix && argv.numeric) {
        console.log(`${code}\t${code.charCodeAt(0)}\t${name}`) // eslint-disable-line no-console
      } else if (argv.prefix) {
        console.log(`${code}\t${name}`) // eslint-disable-line no-console
      } else if (argv.numeric) {
        console.log(`${code.charCodeAt(0)}\t${name}`) // eslint-disable-line no-console
      } else {
        console.log(name) // eslint-disable-line no-console
      }
    })
  }
}
