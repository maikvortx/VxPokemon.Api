const Autenticar = require('../../../domain/usecases/Autenticacao/Autenticar')

const extractToken = require('../../../components/tokenExtract')
const kinesisFirehoseLogger = require('../../../components/loggers/kinesisFirehoseLogger')

async function authRequest({ req, res }) {
  const tokenExtraido = extractToken(req)

  if (!tokenExtraido || !tokenExtraido.token) {
    res.status(401).json('Token inválido')
    kinesisFirehoseLogger.error('Token inválido', { Headers: req.headers })
    throw new Error('Token inválido')
  }

  const ucAuth = Autenticar()
  const responseAuth = await ucAuth.run(tokenExtraido)

  if (responseAuth.isErr) {
    kinesisFirehoseLogger.error('Usuario não autenticado', {
      Headers: req.headers,
      ResponseAuthError: responseAuth.err,
    })
    res.status(401).json(responseAuth.err)
    throw new Error('Usuario não autenticado')
  }

  return { usuario: responseAuth.ok.usuario, secret: req.headers['vx-secrets'], tokenRecebido: tokenExtraido }
}

module.exports = authRequest
