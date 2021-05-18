const { Ok, Err, usecase, step } = require("buchu")

const dependency = {
  VxPermissionamento: require("../../../infra/repositories/client/vxPermissionamento"),
}

const Login = (injection) =>
  usecase("Login", {
    request: { token: String, userId: String },

    setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

    "Realiza Login usuário": step(async (ctx) => {
      return Ok()
    }),

    "Retorna permissões usuário": step(async (ctx) => {
      return Ok()
    }),
  })

module.exports = Autenticar