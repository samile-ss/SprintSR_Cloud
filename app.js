// Faz uma requisição para o arquivo data.json
fetch('./data.json')
    //qnd a resposta chegar, converte o conteúdo para JSON
  .then(res => res.json())
    //Receber os dado
  .then(musicas => {

    //Obtém o elemento HTML com id="lista"
    const lista = document.getElementById('lista');

    // Percorre cada música do array
    musicas.forEach(musica => {

     // Cria uma nova div para representar o card da música
      const card = document.createElement('a');
     // Define a classe CSS do card 
      card.className = 'card';

      card.href = musica.link;
      card.target = '_blank';

      //Insere conteúdo do HTML no card  
      card.innerHTML = `
        <h2>${musica.titulo}</h2>
        <p>${musica.artista} — ${musica.ano}</p>
      `;

     // Adiciona o card dentro do elemento "lista"
      lista.appendChild(card);
    });
  })

   // Captura qualquer erro ocorrido durante a requisição ou processamento
  .catch(err => {

  // Mensagem de erro
    document.getElementById('lista').textContent = 'Erro ao carregar os dados.';

   //Mostra o erro 
    console.error(err);
  });