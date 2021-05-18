const { Ok, Err, usecase, step } = require("buchu")
const permissionamentoService = require('../../services/permissionamentoService')

const dependency = {
  PokemonRepository: require("../../../infra/repositories/PokemonRepository")
}

const BuscarPokemons = (injection) => 
  usecase("Buscar pokemons", {
    request: {},

    setup: (ctx) => (ctx.di = Object.assign({}, dependency, injection)),

    authorize: (user) => permissionamentoService.herbs2allpermissionamento(user),

    "Retorna pokemons do banco de dados": step(async (ctx) => {
      const { PokemonRepository } = ctx.di

      const repository = new PokemonRepository()
      const pokemons = await repository.getAll()
      
      ctx.ret = pokemons
      return Ok()
    }),
})

module.exports = BuscarPokemons
