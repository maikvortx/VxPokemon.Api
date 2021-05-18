class HealthController {
  async health(req, res) {
    // const ucHealth = Health()
    // const caseResponse = await ucHealth.run()

    // if (caseResponse.isErr) {
    //   return res.status(200).json({ status: 'error', error: caseResponse.err })
    // }

    return res.status(200).json({ status: 'ok' })
  }
}

module.exports = new HealthController()
