const { Ok, Err, usecase, step } = require("buchu")
const permissionamentoService = require('../../services/permissionamentoService')

const dependency = {
  PokemonRepository: require("../../../infra/repositories/PokemonRepository"),
}

const AtualizarPokemon = (injection) => usecase("Cadastrar Pokemon", {
  request: {
    name: String,
    type: String
  },
  response: [],

  setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

  authorize: (user) => permissionamentoService.herbs2allpermissionamento(user),

  "Atualizar pokemon no banco de dados": step(async (ctx) => {
    const { name, type } = ctx.req
    const { id } = ctx.req
    const { PokemonRepository } = ctx.di

    const repository = new PokemonRepository()  
    await repository.update({ id, name, type })

    return Ok()
  }),
})

module.exports = AtualizarPokemon
