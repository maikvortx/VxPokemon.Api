const { expect } = require("chai")
const ApagarPokemon = require("./ApagarPokemon")

describe("Test: Apagar um pokemon - Caso de uso", () => {
  const injection = {
    tokenRecebido: {
      token: "123abc",
    },
    usuario: {
      cpf: '123123123'
    },
    PokemonRepository: class {
      async remove() {
      }
    },
  }

  it("Sucesso: deve retornar resumo do investidor", async () => {
    const ucApagarPokemon = ApagarPokemon(injection)
    const pokemons = await ucApagarPokemon.run()

    expect(pokemons.isOk).to.be.true
  })
})
