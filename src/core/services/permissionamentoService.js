const { Ok, Err } = require("buchu")
const VxPermissionamento = require("../../infra/repositories/client/vxPermissionamento")


function herbs2permissionamento(user, permissao) {
  // const { id, token } = user

  // const vxPermissionamentoClient = new VxPermissionamento(token)
  // const response = vxPermissionamentoClient.obterPermissoesUsuario({ 
  //   userId: id,
  //   ...permissao
  // })

  let mockResponse;

  if(user.id == "2884b772-a782-43c4-a2a8-566728c28f9f")
  {
    mockResponse = {
      userId: '2884b772-a782-43c4-a2a8-566728c28f9f',
      actionName: 'editar',
      resourceName: 'Fogo',
      objectName: 'Charizard',
      instanceKey: null,
      allowed: true,
      permissionId: 'cd58d1e3-c960-4ac8-8623-51347b39567d'
    }
  } else {
    mockResponse = {
      userId: 'teste',
      actionName: 'editar',
      resourceName: 'Agua',
      objectName: 'Blastoise',
      instanceKey: null,
      allowed: false,
      permissionId: 'cd58d1e3-c960-4ac8-8623-51347b39567d'
    }
  }

  if(mockResponse.allowed)
    return Ok()
  else
    return Err()
}

module.exports = {
  herbs2permissionamento
}