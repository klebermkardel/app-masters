// Função assíncrona para buscar os jogos
export const fetchGames = async () => {
  // Realiza uma requisição para a API de jogos
  const response = await fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
    headers: {
      'dev-email-address': 'teste@teste.com', // Define o cabeçalho com o endereço de e-mail do desenvolvedor
    },
  });

  // Verifica se a resposta da requisição foi bem-sucedida
  if (!response.ok) {
    if (response.status >= 500 && response.status <= 509) {
      // Se o status estiver entre 500 e 509, lança um erro indicando falha no servidor
      throw new Error('O servidor falhou em responder, tente recarregar a página');
    } else {
      // Caso contrário, lança um erro indicando que o servidor não pôde responder no momento
      throw new Error('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
    }
  }

  // Converte os dados da resposta em formato JSON
  const data = await response.json();
  return data; // Retorna os dados obtidos
};
