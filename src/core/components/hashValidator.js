const { hashKey } = require("../config/hashKey")
const crypto = require('crypto')

class hashValidator {
  static validarHash(token) {
    const hash = crypto.createHmac('sha512', hashKey)
    const dataFormatada = new Date().toISOString().split("T")[0]

    hash.update(dataFormatada)
    
    if (token === hash.digest('hex')) return true
    return false
  }
}

module.exports = hashValidator
