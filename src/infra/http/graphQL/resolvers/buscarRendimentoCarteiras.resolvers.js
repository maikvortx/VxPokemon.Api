const dependency = {
  BuscarRendimentoCarteiras: require("../../../../domain/usecases/Fundos/BuscarRendimentoCarteiras"),
}

async function buscarRendimentoCarteiras(parent, args, context, info) {
  const di = { ...dependency, ...args.injection, ...context }

  const useCase = di.BuscarRendimentoCarteiras(di)
  const respostaUseCase = await useCase.run()

  if (respostaUseCase.isErr) throw new Error(respostaUseCase.err)
  return respostaUseCase.ok.rendimentos
}

module.exports = { buscarRendimentoCarteiras }
