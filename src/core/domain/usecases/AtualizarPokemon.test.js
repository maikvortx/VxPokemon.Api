const { expect } = require("chai")
const AtualizarPokemon = require("./AtualizarPokemon")

describe("Test: Atualizar um pokemon - Caso de uso", () => {
  const injection = {
    tokenRecebido: {
      token: "123abc",
    },
    usuario: {
      cpf: '123123123'
    },
    PokemonRepository: class {
      async update() {
        return {
          data: [
            {
              id: "bcd29a65-e08b-4078-b951-8d27c3cf359d",
              name: "bulbasaur",
              type: "grass"
            },
            {
              id: "168785ec-ac82-4d1f-b65c-732a27a81868",
              name: "charizard",
              type: "fire"
            },
            {
              id: "73920bbf-a7b6-441c-abb9-f77c3810e904",
              name: "blastoise",
              type: "water"
            }
          ]
        }
      }
    },
  }

  it("Sucesso: deve retornar resumo do investidor", async () => {
    const ucAtualizarPokemon = AtualizarPokemon(injection)
    const pokemons = await ucAtualizarPokemon.run()

    expect(pokemons.isOk).to.be.true
  })
})
