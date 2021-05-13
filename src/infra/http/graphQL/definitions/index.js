const { gql } = require("apollo-server-express")

const typeDefs = gql`  
  ${require("./scalar.type")}
  type Query {
    getHealth : String
  }
  type Mutation {
    getHealth : String
  }
  ${require("./entity.type")}
  ${require("./usecases.query")}
`

module.exports = typeDefs

