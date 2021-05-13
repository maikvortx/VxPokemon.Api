const dependency = {
    RetornarPosicaoAnaliticaUc: require('../../../../domain/usecases/RetornarPosicaoAnalitica')
  }
  
  async function retornarPosicaoAnalitica (parent, args, context, info){
    const di = {...dependency, ...args.injection, ...context}
  
    const { carteira, dataPosicao } = args
  
    const retornarPosicaoUC = di.RetornarPosicaoAnaliticaUc(di)
  
    const posicoes = await retornarPosicaoUC.run({
        carteira, 
        dataPosicao,
    })
  
    if(posicoes.isErr) throw new Error(posicoes.err)
  
    return posicoes.ok.posicoes
  }
  
  module.exports = { retornarPosicaoAnalitica }
  