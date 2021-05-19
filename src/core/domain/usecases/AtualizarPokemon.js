const { Ok, Err, usecase, step } = require("buchu")
const { herbs2permissionamento } = require('../../services/permissionamentoService')

const dependency = {
  PokemonRepository: require("../../../infra/repositories/PokemonRepository"),
}

const permissao = { actionName: 'fogo', resourceName: 'Listar', objectName: 'Johto' }

const AtualizarPokemon = (injection) => usecase("Cadastrar Pokemon", {
  request: {
    name: String,
    type: String
  },
  response: [],

  setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

  authorize: (user) => herbs2permissionamento(user, permissao),

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
