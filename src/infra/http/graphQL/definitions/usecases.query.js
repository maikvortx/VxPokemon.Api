const { usecase2query } = require("herbs2gql")

const RetornarResumoInvestidor = require("../../../../domain/usecases/RetornarResumoInvestidor")
const RetornarFundosInvestidor = require("../../../../domain/usecases/RetornarFundosInvestidor")
const BuscarInformeRendimentos = require("../../../../domain/usecases/BuscarInformeRendimentos")
const RetornarMovimentacaoInvestidor = require("../../../../domain/usecases/RetornarMovimentacaoInvestidor")
const RetornarposicaoAnalitica = require("../../../../domain/usecases/RetornarPosicaoAnalitica")
const BuscarRendimentoCarteiras = require("../../../../domain/usecases/Fundos/BuscarRendimentoCarteiras")
const GerarHistoricoMovimentacoesPDF = require("../../../../domain/usecases/GerarHistoricoMovimentacoesPDF")
const GerarExtratoPosicaoPDF = require("../../../../domain/usecases/GerarExtratoPosicaoPDF")
const GerarPosicoesXLSX = require("../../../../domain/usecases/GerarPosicoesXLSX")
const GerarHistoricoMovimentacoesXLSX = require("../../../../domain/usecases/GerarHistoricoMovimentacoesXLSX")

module.exports = `
  ${usecase2query(RetornarResumoInvestidor())[0]}
  ${usecase2query(RetornarFundosInvestidor())[0]}
  ${usecase2query(BuscarInformeRendimentos())[0]}
  ${usecase2query(RetornarMovimentacaoInvestidor())[0]}
  ${usecase2query(RetornarposicaoAnalitica())[0]}
  ${usecase2query(BuscarRendimentoCarteiras())[0]}
  ${usecase2query(GerarHistoricoMovimentacoesPDF())[0]}
  ${usecase2query(GerarExtratoPosicaoPDF())[0]}
  ${usecase2query(GerarPosicoesXLSX())[0]}
  ${usecase2query(GerarHistoricoMovimentacoesXLSX())[0]}
`
