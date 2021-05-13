const { getHealth } = require('./health.resolvers')
const { retornarResumoInvestidor } = require("./resumoInvestidor.resolvers")
const { retornarFundosInvestidor } = require("./fundosInvestidor.resolvers")
const { buscarInformeRendimentos } = require("./buscarInformeRendimentos.resolvers")
const { retornarMovimentacaoInvestidor } = require("./retornarMovimentacaoInvestidor.resolvers")
const { retornarPosicaoAnalitica } = require("./retornarPosicaoAnalitica.resolver")
const { buscarRendimentoCarteiras } = require("./buscarRendimentoCarteiras.resolvers")
const { gerarHistoricoMovimentacoesPdf } = require("./gerarHistoricoMovimentacoes.resolvers")
const { gerarExtratoPosicaoPdf } = require("./gerarExtratoPosicao.resolvers")
const { gerarPosicoesXlsx } = require("./gerarPosicoesXLSX.resolvers")
const { gerarHistoricoMovimentacoesXlsx } = require("./gerarHistoricoMovimentacoesXLSX.resolvers")

module.exports = {
  Query: {
    getHealth,
    retornarResumoInvestidor,
    retornarFundosInvestidor,
    buscarInformeRendimentos,
    retornarMovimentacaoInvestidor,
    retornarPosicaoAnalitica,
    buscarRendimentoCarteiras,
    gerarHistoricoMovimentacoesPdf,
    gerarExtratoPosicaoPdf,
    gerarPosicoesXlsx,
    gerarHistoricoMovimentacoesXlsx
  }
}
