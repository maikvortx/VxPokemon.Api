const dependency = {
    RetornarFundosInvestidorUc: require("../../../../domain/usecases/RetornarFundosInvestidor"),
  }
  
  async function retornarFundosInvestidor(parent, args, context, info) {
    const di = { ...dependency, ...args.injection, ...context }
  
    const ucRetornaFundosInvestidor = di.RetornarFundosInvestidorUc(di)
    const retornarFundosInvestidorResultado = await ucRetornaFundosInvestidor.run()
  
    if (retornarFundosInvestidorResultado.isErr) throw new Error(retornarFundosInvestidorResultado.err)  

    return retornarFundosInvestidorResultado.ok.fundosInvestidor
  }
  
  module.exports = { retornarFundosInvestidor }
  