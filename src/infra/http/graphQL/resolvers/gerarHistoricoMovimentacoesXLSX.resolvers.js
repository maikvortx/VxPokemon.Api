 const dependency = {
    GerarHistoricoMovimentacoesXLSX: require('../../../../domain/usecases/GerarHistoricoMovimentacoesXLSX')
  }
  
  async function gerarHistoricoMovimentacoesXlsx(parent, args, context, info){
    const di = {...dependency, ...args.injection, ...context}
  
    const { carteiras, dataInicio, dataFim, codigoOperacao } = args
  
    const gerarHistoricoMovimentacoesXlsxUC = di.GerarHistoricoMovimentacoesXLSX(di)
  
    const historico = await gerarHistoricoMovimentacoesXlsxUC.run({
      carteiras, 
      dataInicio, 
      dataFim, 
      codigoOperacao
    })
  
    if(historico.isErr) throw new Error(historico.err)
  
    return historico.ok.relatorio
  }
  
  module.exports = { gerarHistoricoMovimentacoesXlsx }
  