const { Ok, Err, usecase, step } = require("buchu")
const { Usuario } = require("../entities/Usuario")

const dependency = {
  UsuarioRepository: require("../../../infra/repositories/UsuarioRepository"),
}

const CadastrarUsuario = (injection) => usecase("Cadastrar Usuário", {
  request: Usuario,
  response: [Usuario],

  setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

  "Retorna usuários do banco de dados": step(async (ctx) => {
    const repository = new di.UsuarioRepository()
    const usuario = ctx.req
    await repository.create(usuario)
    return Ok()
  }),
})

module.exports = { CadastrarUsuario }
