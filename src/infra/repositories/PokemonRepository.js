const pokemonDB = require("./data/pokemons.json")
const uuidv4 = require('uuid/v4')

class PokemonRepository {
  constructor(){
    this.pokemonMock = pokemonDB.pokemons
  }

  async getAll() {
    return this.pokemonMock
  }

  async create(pokemon) {
    return this.pokemonMock.data.push({
      id: uuidv4(),
      ...pokemon
    })
  }

  async remove(id) {
    const pokemonIndex = this.pokemonMock.data.findIndex(pokemon => pokemon.id === id);

    if(pokemonIndex !== -1)
      this.pokemonMock.data.splice(pokemonIndex, 1)

    return true
  }

  async update(pokemon) {
    const pokemonIndex = this.pokemonMock.data.findIndex(pokemon => pokemon.id === pokemon.id);

    if(pokemonIndex !== -1) {
      const newPokemon = { ...pokemon }

      this.pokemonMock.data.splice(pokemonIndex, 1, newPokemon)
    }

    return this.pokemonMock
  }

}

module.exports = PokemonRepository