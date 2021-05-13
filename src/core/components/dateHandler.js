function stringParaDataUTC(data) {
  const objetoData = new Date(data)
  return new Date(objetoData.getTime() + objetoData.getTimezoneOffset() * 60000)
}

function dataUTCParaDataGMC(data) {
  const objetoData = new Date(data)
  return new Date(objetoData.getTime() - objetoData.getTimezoneOffset() * 60000)
}

module.exports = {
  stringParaDataUTC,
  dataUTCParaDataGMC
}