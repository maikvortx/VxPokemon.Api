const dependency = {
  GerarExtratoPosicaoPDFUc: require("../../../../domain/usecases/GerarExtratoPosicaoPDF"),
}

async function gerarExtratoPosicaoPdf(parent, args, context, info) {
  const di = { ...dependency, ...args.injection, ...context }
  const { carteiras, dataPosicao } = args

  const ucGerarExtratoPosicaoPDF = di.GerarExtratoPosicaoPDFUc(di)
  const retornarExtratoPosicaoPDF = await ucGerarExtratoPosicaoPDF.run({
    carteiras, 
    dataPosicao,
  })

  if (retornarExtratoPosicaoPDF.isErr) throw new Error(retornarExtratoPosicaoPDF.err)  

  return retornarExtratoPosicaoPDF.ok
}

module.exports = { gerarExtratoPosicaoPdf }
