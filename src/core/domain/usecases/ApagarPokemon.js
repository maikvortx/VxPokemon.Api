const { Ok, Err, usecase, step } = require("buchu")
const permissionamentoService = require('../../services/permissionamentoService')

const dependency = {
  PokemonRepository: require("../../../infra/repositories/PokemonRepository"),
}

const ApagarPokemon = (injection) => usecase("Cadastrar Pokemon", {
  request: {
    id: String
  },
  response: [],

  setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

  authorize: (user) => permissionamentoService.herbs2allpermissionamento(user),

  "Apaga pokemon do banco de dados": step(async (ctx) => {
    const { id } = ctx.req
    const { PokemonRepository } = ctx.di

    const repository = new PokemonRepository()
    await repository.remove(id)

    return Ok()
  }),
})

module.exports = ApagarPokemon
