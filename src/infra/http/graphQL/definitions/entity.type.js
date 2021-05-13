const { entity2type } = require("herbs2gql")

const ResumoInvestidor = require("../../../../domain/entities/ResumoInvestidor")
const FundoInvestidor = require("../../../../domain/entities/FundoInvestidor")
const InformeRendimentos = require("../../../../domain/entities/InformeRendimentos")
const MovimentacaoInvestidor = require("../../../../domain/entities/MovimentacaoInvestidor")
const HistoricoMovimentacaoInvestidor = require("../../../../domain/entities/HistoricoMovimentacaoInvestidor")
const PosicaoAnalitica = require("../../../../domain/entities/PosicaoAnalitica")
const RendimentosCarteira = require("../../../../domain/entities/RendimentosCarteira")
const HistoricoMovimentacoesPdf = require("../../../../domain/entities/HistoricoMovimentacoesPDF")
const ExtratoPosicaoPDF = require("../../../../domain/entities/ExtratoPosicaoPDF")
const PosicaoXLSX = require("../../../../domain/entities/PosicaoXLSX")
const HistoricoMovimentacaoXLSX = require("../../../../domain/entities/HistoricoMovimentacaoXLSX")


module.exports = `  
${entity2type(ResumoInvestidor)}
${entity2type(FundoInvestidor.fundoInvestidor)}
${entity2type(InformeRendimentos)}
${entity2type(MovimentacaoInvestidor)}
${entity2type(HistoricoMovimentacaoInvestidor)}
${entity2type(PosicaoAnalitica)}
${entity2type(RendimentosCarteira)}
${entity2type(HistoricoMovimentacoesPdf)}
${entity2type(ExtratoPosicaoPDF)}
${entity2type(PosicaoXLSX)}
${entity2type(HistoricoMovimentacaoXLSX)}
`