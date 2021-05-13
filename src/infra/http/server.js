require('dotenv/config')

const express = require('express')
const cors = require('cors')
const morgan = require('cors')
const { ApolloServer, addSchemaLevelResolveFunction } = require('apollo-server-express')

const Health = require("./controllers/health")
const schema = require("./graphQL/schema")
const kinesisFirehoseLogger = require("../../components/loggers/kinesisFirehoseLogger")
const autenticacao = require("./middleware/auth")

const port = process.env.PORT || 3002
const env = process.env.NODE_ENV || 'dev'

class Server {
  constructor(app){
    this.app = app
    this.useCors()
    this.morgan()
    this.schemas()
    this.apollo()
    this.init()
  }

  useCors() {
    this.app.use(cors())
  }

  schemas() {
    const rootResolveFunction = (parent, args, context, info) => { }
    addSchemaLevelResolveFunction(schema, rootResolveFunction)
  }

  async middlewares(req) {
    return {
      ...(await autenticacao(req)),
    }
  }

  morgan() {
    this.app.use(morgan(env))
  }

  apollo() {
    const server = new ApolloServer({
      introspection: true,
      playground: true,
      schema,
      context: this.middlewares,
      formatError: (err) => {
        kinesisFirehoseLogger.error("Erro GraphQl", err)
        return err
      },
    })
    server.applyMiddleware({ app: this.app, path: '/graphql' })
  }

  banner() {
    const log = `🚀 Sua api está executando e no endereço http://localhost:${port}`
    kinesisFirehoseLogger.info(log)
    console.log(log)
  }

  init() {
    this.app.get('/health', Health.health)
    return this.app.listen({ port: port }, this.banner)
  }
}

module.exports = new Server(express())