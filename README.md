# PriceTracker
Preço do Ativo - Consulta e Variação

## Descrição
Este projeto consiste em uma aplicação Angular que consulta o preço do ativo na API do Yahoo Finance e exibe o valor do ativo nos últimos 30 pregões, juntamente com a variação do preço no período. Além disso, é apresentado um gráfico visualizando a variação do preço ao longo do tempo.

A consulta do preço do ativo é realizada através da API do Yahoo Finance, utilizando a URL específica para o ativo desejado. Por exemplo, o ativo PETR4 pode ser consultado através da URL: https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA.

A página desenvolvida em Angular apresenta o valor de abertura do ativo nos últimos 30 pregões e calcula a variação percentual do preço em relação ao dia anterior. Os dados são exibidos em uma tabela e também são representados graficamente em um gráfico de linha.

## Tecnologias Utilizadas
- Angular
- TypeScript
- HTML
- SCSS

## Funcionalidades
1. Consulta o preço do ativo na API do Yahoo Finance
2. Exibe o valor do ativo nos últimos 30 pregões
3. Calcula a variação percentual do preço em relação ao dia anterior
4. Apresenta os dados em uma tabela e em um gráfico de linha

## Instalação

1. Certifique-se de ter o Node.js instalado: [https://nodejs.org](https://nodejs.org)
2. Clone o repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
3. Acesse o diretório do projeto: `cd seu-projeto`
4. Instale as dependências: `npm install`

## Executando o Projeto

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

``
npm start
``

Acesse o projeto no navegador através da URL: `http://localhost:4200`

## Executando Testes

Execute o seguinte comando para executar os testes:

``
npm test
``

## Contribuição

1. Faça o fork do projeto
2. Crie uma nova branch: `git checkout -b minha-branch`
3. Faça as alterações desejadas e faça commit: `git commit -m 'Adicionar nova funcionalidade'`
4. Faça o push para o repositório remoto: `git push origin minha-branch`
5. Envie um pull request para revisão

## Autor
- Lucas de Melo Lima - https://github.com/lcsmelo-0
- Linkedin - https://www.linkedin.com/in/lucasmelo18/