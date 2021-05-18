const { Ok, Err } = require("buchu")
const VxPermissionamento = require("../../infra/repositories/client/vxPermissionamento")


function herbs2permissionamento(user, permissao) {
  const { id, token } = user
  const { actionName, resourceName, objectName } = permissao

  const vxPermissionamentoClient = new VxPermissionamento(token)
  const response = vxPermissionamentoClient.obterPermissoesUsuario({ 
    userId: id,
    actionName,
    resourceName,
    objectName
  })

  if(response != null)
    return Ok()
  else
    return Err()
}

module.exports = {
  herbs2permissionamento
}