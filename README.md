# Nome do Projeto

## Descrição

Este projeto é um aplicativo de lista de jogos, desenvolvido em React. Ele permite aos usuários visualizar uma lista de jogos, filtrar por gênero e realizar pesquisas por título.

## Funcionalidades

- Exibir lista de jogos
- Filtrar jogos por gênero
- Realizar pesquisas por título
- Exibir informações detalhadas de cada jogo

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Acesse o diretório do projeto via terminal.
4. Execute o comando `npm install` para instalar as dependências.
5. Após a conclusão da instalação, execute o comando `npm start` para iniciar o aplicativo.
6. O aplicativo estará disponível no navegador através do endereço `http://localhost:3000`.

## Dependências

- React
- React Icons
- React Spring

## Estrutura de Arquivos Principais

```
src
├── components
│   ├── layout
│   │   ├── Loader.js
│   │   ├── Loader.css
│   │   ├── SearchBar.js
│   │   └── GenreSelect.js
│   ├── project
│   │   ├── GameCard.js
│   │   └── GameCard.css
│   ├── pages
│   │   ├── GameList.js
│   │   └── GameList.css
│   ├── services
│   │   └── api.js
├── App.css
├── App.js
├── index.js
```

- A pasta `components` contém os componentes reutilizáveis utilizados no projeto.
- A pasta `pages` contém as páginas do aplicativo.
- A pasta `services` contém os arquivos relacionados a serviços e integrações externas.
- O arquivo `App.js` é o ponto de entrada do aplicativo.

## Prints de Tela

Aqui estão alguns prints do projeto:

![Print 1](caminho/para/print1.png)


![Print 2](caminho/para/print2.png)



## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema no projeto ou tiver alguma melhoria a ser sugerida, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).