require('dotenv/config')

const express = require('express')
const cors = require('cors')
const morgan = require('cors')

const Health = require("./controllers/health")
const Pokemon = require("./controllers/pokemon")

const kinesisFirehoseLogger = require("../../core/components/loggers/kinesisFirehoseLogger")
const autenticacao = require("./middleware/auth")

const port = process.env.PORT || 3002
const env = process.env.NODE_ENV || 'dev'

const permission = {
  list: true,
  update: true,
  delete: true,
  create: true
}

class Server {
  constructor(app){
    this.app = app
    this.useCors()
    this.rest()
    this.morgan()
    this.init()
  }

  useCors() {
    this.app.use(cors())
  }

  rest() {
    this.app.use((req, res, next) => { req.permission = permission; next() })
    this.app.use(express.json())
    //controllers(this.app)
  }

  async middlewares(req) {
    return {
      ...(await autenticacao(req)),
    }
  }

  morgan() {
    this.app.use(morgan(env))
  }

  banner() {
    const log = `🚀 Sua api está executando e no endereço http://localhost:${port}`
    kinesisFirehoseLogger.info(log)
    console.log(log)
  }

  init() {
    this.app.get('/health', Health.health)

    this.app.get('/pokemons', Pokemon.buscaPokemons)
    this.app.post('/pokemons', Pokemon.cadastraPokemon)
    this.app.put('/pokemons/:id', Pokemon.atualizaPokemon)
    this.app.delete('/pokemons/:id', Pokemon.apagaPokemon)

    return this.app.listen({ port: port }, this.banner)
  }
}

module.exports = new Server(express())