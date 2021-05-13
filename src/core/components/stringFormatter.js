class stringFormatter {
  static formatNumericValue(value, minimumFractionDigits = 0) {
    const formatter = new Intl.NumberFormat("pt-BR", { minimumFractionDigits })
    const formatedValue = formatter.format(value)
    return formatedValue
  }

  static formatCurrencyValue(value) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
    })
    const formatedValue = formatter.format(value)
    return formatedValue
  }

  static formatMaskCNPJ(value) {
    let formatedValue = String(value).replace(/[^0-9]/g, "")
    formatedValue = formatedValue.padStart(14, 0)
    formatedValue = formatedValue.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    )
    return formatedValue
  }

  static formatNumericValueDecimals(value, maximumDigits, minimumDigits) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: minimumDigits || 2,
      maximumFractionDigits: maximumDigits || 8,
    })
    const formatedValue = formatter.format(value)
    return formatedValue
  }

  static cpfCnpjRemoveMask(value) {
    return value.replace(/\./g, "").replace("-", "").replace("/", "")
  }
}

module.exports = stringFormatter
