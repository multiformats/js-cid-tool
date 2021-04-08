'use strict'

const CIDTool = require('../../')

module.exports = {
  command: 'codecs',

  describe: 'List available CID codec names.',

  builder: {
    numeric: {
      describe: 'Display the numeric code as well as the codec name',
      type: 'boolean',
      default: false
    }
  },

  /**
   * @param {object} argv
   * @param {boolean} [argv.numeric]
   */
  handler (argv) {
    CIDTool.codecs().forEach(({ name, code }) => {
      if (argv.numeric) {
        console.log(`${code}\t${name}`) // eslint-disable-line no-console
      } else {
        console.log(name) // eslint-disable-line no-console
      }
    })
  }
}
