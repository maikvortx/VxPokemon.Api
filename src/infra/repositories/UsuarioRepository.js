const knex = require('./Connection')
const { Usuario } = require("../../core/domain/entities/Usuario")

class UsuarioRepository {
  constructor() {
    this.knex = knex
    this.runner = this.knex('Usuarios')
  }

  async getAll() {
    var ret = await this.runner.select('*')
    return ret.map(Usuario.fromJSON)
  }

  async create(usuario) {
    return await this.runner.insert(usuario)
  }

}

module.exports = UsuarioRepository