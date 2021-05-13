const { expect } = require("chai")
const RetornarResumoInvestidor = require("./RetornarResumoInvestidor")

describe("Test: Obter resumo investidor - Caso de uso", () => {
  const injection = {
    tokenRecebido: {
      token: "123abc",
    },
    usuario: {
      cpf: '123123123'
    },
    MsCotistaClient: class {
      async obterResumoInvestidor() {
        return {
          totalLiquido: 123.123,
          totalBruto: 312.312,
        }
      }
    },
  }

  it("Sucesso: deve retornar resumo do investidor", async () => {
    const ucResumoInvestidor = RetornarResumoInvestidor(injection)
    const resumoInvestidorResultado = await ucResumoInvestidor.run()

    expect(resumoInvestidorResultado.isOk).to.be.true
    expect(resumoInvestidorResultado.ok).to.have.members
    expect(resumoInvestidorResultado.ok.totalLiquido).to.equal(123.123)
    expect(resumoInvestidorResultado.ok.totalBruto).to.equal(312.312)
  })
})
