const { entity, field } = require('gotu')

const Usuario = entity('Usuario', {
  cpf: field(Number),
  nome: field(String),
  cnpj: field(String),
  email: field(String),
  autorizado: field(Boolean)
})

module.exports = { Usuario }
