const defaultLevel = process.env.NODE_ENV === "development" ? "debug" : "error"

const level = process.env.LOGGER_LEVEL || defaultLevel

const consoleConfiguration = {
  json: true,
  stringify: true,
  level,
}

const fileConfiguration = {
  filename: `logs/apioneinvestidor.log`,
  maxSize: process.env.S3_LOGGER_SIZE,
  maxDays: process.env.S3_LOGGER_ROTATION_DAYS,
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
}

const s3_configuration = {
  bucket: process.env.S3_LOGGER_BUCKET_NAME,
  access_key_id: process.env.S3_LOGGER_ACCESS_KEY_ID,
  folder: process.env.S3_LOGGER_FOLDER_NAME,
  name_format: "%Y-%m-%d-%H-%M-%S-%L.log",
  secret_access_key: process.env.S3_LOGGER_SECRET_ACCESS_KEY,
}

const kinesis_configuration = {
  streamName: process.env.KINESIS_LOGGER_NAME,
  environment: process.env.NODE_ENV === "development" ? "development" : "production",
  kinesisOptions: {
    region: process.env.KINESIS_LOGGER_REGION,
    accessKeyId: process.env.S3_LOGGER_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_LOGGER_SECRET_ACCESS_KEY,
  },
}

const kinesis_firehose_configuration = {
  streamName: process.env.KINESIS_FIREHOSE_LOGGER_NAME,
  firehoseOptions: {
    region: process.env.KINESIS_LOGGER_REGION,
    accessKeyId: process.env.S3_LOGGER_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_LOGGER_SECRET_ACCESS_KEY,
  },
}


module.exports = {
  consoleConfiguration,
  fileConfiguration,
  s3_configuration,
  kinesis_configuration,
  kinesis_firehose_configuration,
}
