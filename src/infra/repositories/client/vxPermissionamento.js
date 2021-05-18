const { createApolloFetch } = require('apollo-fetch')
const kinesisLogger = require('../../../core/components/loggers/kinesisFirehoseLogger')
const { vxPermissionamento } = require("../../../config/clients")

class VxPermissionamentoClient {
  constructor(token){
    this.fetch = createApolloFetch({
      uri: vxPermissionamento.baseURL
    })

    this.fetch.use(({ _, options}, next) => {
      if(!options.headers) options.headers = {}
      
      options.headers.authorization = token

      next()
    })
  }

  obterPermissoes({
    userId,
    groupId,
  }) {
    try {
      const query = `
        query GetPermissions($userId: String, $groupId: String) {
          getPermissions(userId: $userId, groupId: $groupId) {
            ... on ExtendedPermissionList {
              permissions {
                id
                actionId
                actionName
                groupId
                groupName
                policyId
                policyName
                instanceKey
                instanceLabel
                actionId
                actionName
                objectId
                objectName
                resourceId
                resourceName
                createdAt
                updatedAt
                deletedAt
              }
            }
            ... on Validation {
              code
              message
              errors {
                validations
                parameter
              }
            }
          }
        }
      `

      const variables = {
        userId,
        groupId,
      }

      const response = this.fetch({
        query,
        variables
      }).then(result => {
        const {data, errors} = result
        if(errors) {
          kinesisLogger.error(JSON.stringify(errors), JSON.stringify(errors))
          throw new Error(JSON.stringify(errors))
        }

        return data.getPermissions
      }).catch(error => {
        kinesisLogger.error(error.message, error)
        throw new Error(error.message)
      })

      return response
    } catch (error) {
      kinesisLogger.error(error.message, error)
      throw new Error(error)
    }
  }

  obterPermissoesUsuario({
    userId,
    actionName,
    resourceName,
    objectName,
    instanceKey,
  }) {
    try {
      const query = `
        query Enforcement($userId: String, $actionName: String, $resourceName: String, $objectName: String, $instanceKey: String) {
          enforcement(userId: $userId, actionName: $actionName, resourceName: $resourceName, objectName: $objectName, instanceKey: $instanceKey) {
            ... on Enforcement {
                userId
                actionName
                resourceName
                objectName
                instanceKey
                allowed
                permissionId
              }
              ... on Validation {
                code
                message
                errors {
                  parameter
                  validations
                }
            }
          }
        }
      `

      const variables = {
        userId,
        actionName,
        resourceName,
        objectName,
        instanceKey,
      }

      const response = this.fetch({
        query,
        variables
      }).then(result => {
        const {data, errors} = result
        if(errors) {
          kinesisLogger.error(JSON.stringify(errors), JSON.stringify(errors))
          throw new Error(JSON.stringify(errors))
        }

        return data.enforcement
      }).catch(error => {
        kinesisLogger.error(error.message, error)
        throw new Error(error.message)
      })

      return response
    } catch (error) {
      kinesisLogger.error(error.message, error)
      throw new Error(error)
    }
  }

  obterPermissoesEntidade({
    policyId,
    resourceName,
    actionName,
    instanceKey,
    objectName,
  }) {
    try {
      const query = `
        query GetEntitiesWithPermission($policyId: String, $resourceName: String, $actionName: String, $instanceKey: String, $objectName: String) {
          getEntitiesWithPermission(policyId: $policyId, resourceName: $resourceName, actionName: $actionName, instanceKey: $instanceKey, objectName: $objectName) {
            ... on EntitiesWithPermissionList {
              users {
                id
              }
              groups {
                id
                name
              }
            }
            ... on Validation {
              code
              message
              errors {
                parameter
                validations
              }
            }
          }
        }
      `

      const variables = {
        policyId,
        resourceName,
        actionName,
        instanceKey,
        objectName,
      }

      const response = this.fetch({
        query,
        variables
      }).then(result => {
        const {data, errors} = result
        if(errors) {
          kinesisLogger.error(JSON.stringify(errors), JSON.stringify(errors))
          throw new Error(JSON.stringify(errors))
        }

        return data.getEntitiesWithPermission
      }).catch(error => {
        kinesisLogger.error(error.message, error)
        throw new Error(error.message)
      })

      return response
    } catch (error) {
      kinesisLogger.error(error.message, error)
      throw new Error(error)
    }
  }
  
}

module.exports = VxPermissionamentoClient
