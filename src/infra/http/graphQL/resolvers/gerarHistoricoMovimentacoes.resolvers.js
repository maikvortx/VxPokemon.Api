const dependency = {
  GerarHistoricoMovimentacoesPDFUc: require("../../../../domain/usecases/GerarHistoricoMovimentacoesPDF"),
}

async function gerarHistoricoMovimentacoesPdf(parent, args, context, info) {
  const di = { ...dependency, ...args.injection, ...context }
  const { carteiras, dataInicio, dataFim, codigoOperacao } = args

  const ucGerarHistoricoMovimentacoesPDF = di.GerarHistoricoMovimentacoesPDFUc(di)
  const retornarHistoricoMovimentacoesPDF = await ucGerarHistoricoMovimentacoesPDF.run({
    carteiras, 
    dataInicio, 
    dataFim, 
    codigoOperacao
  })

  if (retornarHistoricoMovimentacoesPDF.isErr) throw new Error(retornarHistoricoMovimentacoesPDF.err)  

  return retornarHistoricoMovimentacoesPDF.ok
}

module.exports = { gerarHistoricoMovimentacoesPdf }
