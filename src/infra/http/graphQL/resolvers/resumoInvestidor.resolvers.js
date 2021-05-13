const dependency = {
    RetornarResumoInvestidorUc: require("../../../../domain/usecases/RetornarResumoInvestidor"),
  }
  
  async function retornarResumoInvestidor(parent, args, context, info) {
    const di = { ...dependency, ...args.injection, ...context }
  
    const ucRetornarResumoInvestidor = di.RetornarResumoInvestidorUc(di)
    const retornarResumoInvestidorResultado = await ucRetornarResumoInvestidor.run()
  
    if (retornarResumoInvestidorResultado.isErr) throw new Error(retornarResumoInvestidorResultado.err)  

    return retornarResumoInvestidorResultado.ok
  }
  
  module.exports = { retornarResumoInvestidor }
  