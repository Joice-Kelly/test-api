const handleSearch = async (event) => {
  event.preventDefault();

  // Exibindo mensagem de carregamento
  const message = document.querySelector('#message');
  message.innerHTML = 'buscando...';

  // Limpando lista de programas
  const listaDeProgramas = document.querySelector('#shows');
  listaDeProgramas.innerHTML = '';

  // Texto digitado pelo usuário
  const caixaDeBusca = document.querySelector('#query');
  const textoASerBuscado = caixaDeBusca.value;

  // Formando a URL da consulta
  const url = `https://api.tvmaze.com/search/shows?q=${textoASerBuscado}`;

  // Fazendo a pesquisa na API 
  const resposta = await fetch(url);
  const programas = await resposta.json();

  // Caso não haja nenhum resultado
  if (programas.length === 0) {
    // Mensagem de não encontrado
    message.innerHTML = 'nenhum resultado encontrado.';
    return;
  }

  // Limpar a mensagem
  message.innerHTML = '';

  // Iterar pelos programas
programas.forEach((programa) => {
  // Obter os dados do programa
  const titulo = programa?.show?.name || '';
  const imagem = programa?.show?.image?.medium || '';

  // Criar o elemento da imagem
  const imgElement = document.createElement('img');
  imgElement.classList.add('poster');
  imgElement.src = imagem;

  // Criar o elemento da legenda
  const spanElement = document.createElement('span');
  spanElement.classList.add('show-name');
  spanElement.textContent = titulo;

  // Criar o elemento da lista de programas
  const liElement = document.createElement('li');
  liElement.appendChild(imgElement);
  liElement.appendChild(spanElement);

  // Adicionar o evento de clique imagem
  imgElement.addEventListener('click', () => {
    // Redirecionar para a página com informações do programa
    window.location.href = 'details.html'; 

    // Usando localStorage 
    localStorage.setItem('programaSelecionado', JSON.stringify(programa));
  });

  // Inserir o elemento na lista de resultados
  listaDeProgramas.appendChild(liElement);
})
}
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
})
