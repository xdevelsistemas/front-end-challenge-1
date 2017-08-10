# Desafio Front-end - Angular 2/4

O objetivo deste desafio é avaliarmos seu domínio seu domínio em front-end com o framework angular, ou seja, seu estilo, boas práticas, organização e documentação.

## Regras

1. Todo seu código deverá ser disponibilizado em um repositório que seja fork deste e apresentado como um pull-request para a branch de avaliação.
2. Desenvolver utilizando Angular na versão 2.x ou 4.x com TypeScript na versão 2.x e Bootstrap na versão 3 ou 4.
3. O tslint e tsconfig deverão estar compatível com o disponibilizado neste repositório: [TSLint](tslint.json), [TSConfig](tsconfig.json).
4. Layout responsivo, não importa se vai utilizar template gratuito ou criar do zero.
5. Padrão de comentário: JSDoc.
6. Padrão de commit: Commitizen.
7. Bônus: Cobertura de teste mínima de 60% com karma e jasmine. (Opcional)

## O desafio

Que tal dar uma de metereologista? A tarefa é criar uma ferramenta simples, que consuma a API do Yahoo de previsão do tempo (https://developer.yahoo.com/weather). O layout fica a critério o que conta são as funcionalidades.

Funcionalidades:

- Página inicial: Apenas com uma barra de pesquisa para digitar o nome da cidade e um local para aparecer as *informações de previsão do tempo quando pesquisado.
- "Capitais": Página com todas as capitais do Brasil contendo informações de temperatura máxima e mínima.
- Barra de navegação para alternar entre a página inicial e a página de capitais.

*Informações de temperatura (máxima e mínima), vento e humidade atual. Sinta-se livre para utilizar quaisquer informações a mais que a API te proporcionar.

# Dicas

*Recomendamos o uso do Yarn e Angular CLI.*

### Iniciando projeto com Angular CLI:

- `npm i -g @angular/cli` ou `yarn global add @angular/cli`
- `ng new <appName> --routing --style=scss --prefix=<appPrefix> -v`
  - <appName>: Nome da aplicação.
  - <appProfix>: Prefixo adotado nos selectors.
- `cd <appName> && npm start` ou `cd <appName> && yarn start`
- Acesse sua aplicação no endereço http://localhost:4200

### Iniciando projeto com Angular Seed

- `git clone https://github.com/angular/angular2-seed.git`
- `cd angular2-seed && npm install` ou `cd angular2-seed && yarn`
- `npm start` ou `yarn start`
- Acesse sua aplicação em http://localhost:3000

### Standard

`npm install tslint-config-standard --save-dev` ou `yarn add tslint-config-standard --dev`


## Referências

- [NodeJS](https://nodejs.org)
- [Angular 4](https://angular.io)
- [Angular CLI](https://cli.angular.io)
- [TypeScript](https://www.typescriptlang.org)
- [JSDoc](http://usejsdoc.org)
- [Commitizen](http://commitizen.github.io/cz-cli)
- [Yarn](https://yarnpkg.com)
