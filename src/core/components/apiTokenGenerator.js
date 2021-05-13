const crypto = require('crypto')

class apiTokenGenerator {
  static generateToken (tokenFixo) {
    const date = new Date()
    const UTCDate = date.toISOString().split('T')[0]
    return crypto.createHash('sha256').update(`${tokenFixo}-${UTCDate}`).digest('hex')
  }
}

module.exports = apiTokenGenerator
