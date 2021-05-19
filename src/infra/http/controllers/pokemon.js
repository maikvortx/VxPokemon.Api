const BuscarPokemons = require('../../../core/domain/usecases/BuscarPokemons')
const CadastrarPokemon = require('../../../core/domain/usecases/CadastrarPokemon')
const AtualizarPokemon = require('../../../core/domain/usecases/AtualizarPokemon')
const ApagarPokemon = require('../../../core/domain/usecases/ApagarPokemon')

class PokemonController {
  async buscaPokemons(req, res) {
    const token = req.headers.authorization
    
    const user = { user: 'Treinador Pokemon 1', id: '91ef254e-1c65-4cce-a6eb-b0b0420e1065', token }

    const ucBuscarPokemons = BuscarPokemons()
    //ucBuscarPokemons.authorize(user)
    const caseResponse = await ucBuscarPokemons.run()

    if (caseResponse.isErr) {
      return res.status(200).json({ status: 'error', error: caseResponse.err })
    }

    return res.status(200).json(caseResponse.ok)
  }

  async cadastraPokemon(req, res) {
    const token = req.headers.authorization
    const { name, type } = req.body
    
    const user = { user: "luis", id: '91ef254e-1c65-4cce-a6eb-b0b0420e1065', isAdmin: true, token }

    const ucCadastrarPokemon = CadastrarPokemon()
    ucCadastrarPokemon.authorize(user)
    const caseResponse = await ucCadastrarPokemon.run({ name, type })

    if (caseResponse.isErr) {
      return res.status(200).json({ status: 'error', error: caseResponse.err })
    }

    return res.status(200).json({ status: 'ok' })
  }

  async atualizaPokemon(req, res) {
    const token = req.headers.authorization
    const { name, type } = req.body

    const user = { user: "luis", id: req.headers.userid, isAdmin: true, token }

    const ucAtualizarPokemon = AtualizarPokemon()
    ucAtualizarPokemon.authorize(user)
    const caseResponse = await ucAtualizarPokemon.run({ name, type })

    if (caseResponse.isErr) {
      return res.status(401).json({ status: 'error', error: caseResponse.err })
    }

    return res.status(200).json({ status: 'ok' })
  }

  async apagaPokemon(req, res) {
    const token = req.headers.authorization
    
    const user = { user: "luis", id: '91ef254e-1c65-4cce-a6eb-b0b0420e1065', isAdmin: true, token }

    const ucApagarPokemon = ApagarPokemon()
    ucApagarPokemon.authorize(user)
    const caseResponse = await ucApagarPokemon.run()

    if (caseResponse.isErr) {
      return res.status(200).json({ status: 'error', error: caseResponse.err })
    }

    return res.status(200).json({ status: 'ok' })
  }
}

module.exports = new PokemonController()
