# Desafio 1

Construir uma aplicação na linguagem que preferir e achar mais prático. Neste desafio não
é preciso desenvolver um layout robusto, pode ser algo simples. A aplicação deverá ter um input de
texto e um botão busca que ao ser clicado realizará uma busca de produto através do consumo da
mesma api usada pelo autocomplete do site https://store.omelete.com.br . Você deverá analisar a
resposta da API e construir uma view com a lista dos produtos retornados.


## Scripts disponiveis

Na pasta do projeto, você poderá rodar os seguintes scripts:

### `npm start`

Iniciará o Node JS da aplicação em ambiente de testes, com o endereço http://localhost:3001. Ao acessa-lo no navegador, receberá de retorno a pagina publica gerada no build para utilização do consumo da API.

### `npm run dev`

Iniciará a aplicação em React JS no endereço http://localhost:3000, juntamente da aplicação em Node Js no endereço http://localhost:3001. Este é o ambiente para desenvolvimento.


## Observação

Para poder iniciar a aplicação com os scripts critados acima, é necessário primeiro que, na pasta ./desafio-1, execute o comando `npm install` para instalar todas as dependencias do Node Js, assim como também executar o mesmo comando na pasta ./desafio-1/client para instalar todas as dependencias do React Js.
