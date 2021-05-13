const { makeExecutableSchema } = require("graphql-tools")

module.exports = makeExecutableSchema({
  typeDefs: require("./definitions"),
  resolvers: require("./resolvers"),
})
