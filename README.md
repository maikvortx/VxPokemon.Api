## VxPokemon 🚀

<div>Este é um projeto POC para utilização do VxPermissionamento no back-end da aplicação. O sistema compreende várias opções como listagem e exibição de opções como edição e remoção..</div>

</div>

## Features

<dl>
  <dt>GraphQL</dt>
  <dd>Crie novas queries ou mutations facilmente utilizando o herbs2gql</dd>

  <dt>Repository</dt>
  <dd>Inclua facilmente novos repositórios na sua aplicação utilizando o herbs2knex</dd>

  <dt>Authentication</dt>
  <dd>Pronto para integração com o VxLogin suportanto métodos de autenticações como `Bearer` e `Json Web Token`</dd>

  <dt>REST</dt>
  <dd>Middleware http para fáceis customizações no seu código</dd>

  <dt>Kinesis Log Stream</dt>
  <dd>Tenha controle da aplicação utilizando o Kinesis Firehouse como repositório de log da aplicação</dd>
</dl>

## Quick start

1.  Tenha certeza que você possui o Node.js v8.15.1+ e npm v5+ instalado em seu computador.
2.  Clone este repositório `git clone --depth=1 https://github.com/vortx-dtvm/vxapi-boilerplate.git <NOME_PROJETO>`
3.  Depois, acesse o seu app: `cd <NOME_PROJETO>`.<br />
4.  Execute `npm run setup` para instalar todas as dependências e limpar o repositório do git<br />
    _Neste ponto você pode executar `npm start` para ver sua aplicação executando `http://localhost:3000`._
5.  Execute `npm run clean` para excluir os arquivos de exemplo da aplicação.

E voilà, tudo pronto! 🌪

## Commands

- `dev`: executa a aplicação `localhost:3000`
- `build`: cria uma nova versão do build
- `start`: inicia novo servidor com o build de produção
- `lint`: executa linter em todos os arquivos
- `test`: executa o suite de testes com o jest
- `test:watch`: executa o suite de testes com o jest no modo `wath`


## Documentation

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html): Um brve resumo dos conceitos de Clean Architecture
