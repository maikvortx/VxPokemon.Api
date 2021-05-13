const moment = require('moment-timezone')

class dateTimeHelper {
  static format(date, format) {
    return moment.utc(date).format(format)
  }

  static tzFormat(date, format) {
    moment.locale('pt')
    return moment(date)
      .tz('America/Sao_Paulo')
      .format(format)
  }
}

module.exports = dateTimeHelper
