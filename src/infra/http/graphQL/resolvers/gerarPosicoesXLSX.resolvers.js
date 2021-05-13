const dependency = {
  GerarPosicoesXLSXUC: require('../../../../domain/usecases/GerarPosicoesXLSX'),
}

async function gerarPosicoesXlsx(parent, args, context, info) {
  const di = { ...dependency, ...args.injection, ...context }

  const { carteiras, dataPosicao } = args

  const GerarPosicoesXLSXUC = di.GerarPosicoesXLSXUC(di)

  const posicoes = await GerarPosicoesXLSXUC.run({
    carteiras,
    dataPosicao,
  })

  if (posicoes.isErr) throw new Error(posicoes.err)

  return posicoes.ok.relatorio
}

module.exports = { gerarPosicoesXlsx }
