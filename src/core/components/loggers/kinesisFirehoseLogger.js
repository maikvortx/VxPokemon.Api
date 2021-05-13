require("dotenv/config")
const Logger = require('./logger')

const WFirehose = require('winston-firehose')

const { kinesis_firehose_configuration } = require('../../config/logger')

const transportMode = new WFirehose(kinesis_firehose_configuration)

module.exports = new Logger(transportMode)