function extractToken(req) {
  const authorization = req.headers.authorization
  const apiKey = req.headers.apikey

  if (!authorization && !apiKey) return null

  if (apiKey) return { tipo: "ApiKey", token: apiKey }
  else if (authorization && authorization.split(" ")[0] === "Bearer")
    return { tipo: "Bearer", token: authorization.split(" ")[1] }

  return null
}

module.exports = extractToken
