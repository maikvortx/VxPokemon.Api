const dependency = {
  RetornarMovimentacaoInvestidorUC: require('../../../../domain/usecases/RetornarMovimentacaoInvestidor')
}

async function retornarMovimentacaoInvestidor(parent, args, context, info){
  const di = {...dependency, ...args.injection, ...context}

  const { carteiras, dataInicio, dataFim, codigoOperacao } = args

  const retornarMovimentacaoUC = di.RetornarMovimentacaoInvestidorUC(di)

  const historico = await retornarMovimentacaoUC.run({
    carteiras, 
    dataInicio, 
    dataFim, 
    codigoOperacao,
  })

  if(historico.isErr) throw new Error(historico.err)

  return historico.ok.movimentacoes
}

module.exports = { retornarMovimentacaoInvestidor }
