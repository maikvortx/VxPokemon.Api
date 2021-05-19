const BuscarPokemons = require("./BuscarPokemons")
const assert = require('assert')

describe("Test: Obter pokemons - Caso de uso", () => {

  it("Sucesso: deve retornar pokemons", async () => {

    // Given
    const pokemons = [
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

    const injection = {
      PokemonRepository: class {
        async getAll() { return pokemons }
      },
    }

    const user = { user: 'Treinador Pokemon 1', id: '91ef254e-1c65-4cce-a6eb-b0b0420e1065', token }

    // When
    const ucBuscarPokemons = BuscarPokemons(injection)
    uc.authorize(user)
    const pokemons = await ucBuscarPokemons.run()

     // Then
     assert.ok(ret.isOk)
     assert.deepStrictEqual(ret.value.items, itemList)
  })
})
