const dependency = {
  BuscarInformeUC: require('../../../../domain/usecases/BuscarInformeRendimentos')
}

async function buscarInformeRendimentos(parent, args, context, info){
  const di = {...dependency, ...args.injection, ...context}

  const { ano } = args

  const buscarInformeUC = di.BuscarInformeUC(di)

  const informeRendimento = await buscarInformeUC.run({
    ano 
  })

  if(informeRendimento.isErr) throw new Error(informeRendimento.err)

  return informeRendimento.ok
}

module.exports = { buscarInformeRendimentos }
