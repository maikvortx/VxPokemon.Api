const { Ok, Err, usecase, step } = require("buchu")
const { Usuario } = require("../entities/Usuario")

const dependency = {
  UsuarioRepository: require("../../../infra/repositories/UsuarioRepository"),
}

const BuscarUsuarios = (injection) => usecase("Buscar usuários", {
  request: {},
  response: [Usuario],

  setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

  "Retorna usuários do banco de dados": step(async (ctx) => {
    const repository = new di.UsuarioRepository()
    const usuarios = await repository.getAll()
    ctx.ret = usuarios
    return Ok()
  }),
})

module.exports = { BuscarUsuarios }
