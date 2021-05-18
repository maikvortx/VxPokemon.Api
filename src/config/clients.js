require("dotenv/config")

module.exports = {
  systemId: process.env.SYSTEM_ID,
  sinqiaClient: {
    baseURL: process.env.SINQIA_URL,
    appToken: process.env.SINQIA_TOKEN,
    cnpjVortx: '22.610.500/0001-88',
    totaisInvestidor: '/totaisInvestidor',
    movimentacaoInvestidor: '/movimentacaoinvestidor',
    rendimentosCarteira: '/rendimentosCarteira',
    posicoesInvestidor: '/posicoesInvestidor',
    fundoClasse: '/fundoClasse',
  },
  awsClient: {
    accessKeyId: process.env.API_ONE_INVESTIDOR_KEY_ID,
    secretAccessKey: process.env.API_ONE_INVESTIDOR_ACCESS_KEY,
  },
  s3Config: {
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    expires: Number(process.env.S3_EXPIRES),
  },
  userConfiguration: {
    
  },
  msCotista: {
    baseURL: process.env.MS_COTISTA_URL,
    appToken: process.env.MS_COTISTA_TOKEN
  },
  health: {
    usuario: {
      login: process.env.HEALTH_USUARIO_LOGIN,
      token: process.env.HEALTH_USUARIO_TOKEN,
    }
  },
  lambdaPdfRender: {
    baseURL: process.env.LAMBDA_PDF_RENDER_URL
  },
  vxPermissionamento: {
    baseURL: process.env.VX_PERMISSIONAMENTO_URL
  },
}
