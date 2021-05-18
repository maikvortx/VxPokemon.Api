const { Ok, Err, usecase, step, ifElse } = require("buchu")

const dependency = {
  //Usuario: require("../../entities/Usuario"),
  //VortxPortalClient: require("../../../repository/client/vortx/vortxPortalClient"),
  kinesisFirehoseLogger: require("../../../components/loggers/kinesisFirehoseLogger"),
  hashValidator: require("../../../components/hashValidator"),
}

const Autenticar = (injection) =>
  usecase("Autenticar", {
    request: { tipo: String, token: String },

    setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

    "Autenticação baseada no tipo de token": ifElse({
      "Valida se o token é do tipo ApiKey": step(async (ctx) => {
        const { tipo } = ctx.req
        if (tipo === "ApiKey") return Ok(true)
        else if (tipo === "Bearer") return Ok(false)
      }),

      "Então: Valida se o ApiKey está correto": step(async (ctx) => {
        const { token } = ctx.req
        const hashValidator = ctx.di.hashValidator

        if (hashValidator.validarHash(token)) return Ok()
        return Err("Token de aplicação não passou pela validação")
      }),

      // "Caso contrário: Valida se o usuário é válido": step(async (ctx) => {
      //   try {
      //     const portalCli = new ctx.di.VortxPortalClient(ctx.di)
      //     const responseToken = await portalCli.getDecryptToken(ctx.req.token)

      //     if (responseToken.iss !== "VxCadastro")
      //       return Err("Usuario não possui permissão para API")

      //     ctx.ret.usuario = ctx.di.Usuario.fromJwtObject(responseToken)
      //     return Ok(ctx.ret.usuario)
      //   } catch (error) {
      //     ctx.di.kinesisFirehoseLogger.error(
      //       "Não conseguimos validar a autenticidade do token",
      //       error
      //     )
      //     return Err("Não conseguimos validar a autenticidade do token")
      //   }
      // }),
    }),
  })

module.exports = Autenticar