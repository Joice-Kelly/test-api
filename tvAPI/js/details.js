document.addEventListener('DOMContentLoaded', () => {
  // Recuperar o programa selecionado do localStorage
  const programaSelecionado = JSON.parse(localStorage.getItem('programaSelecionado'));

  // Verificar se há um programa selecionado
  if (programaSelecionado) {
    // Exibir as informações do programa
    const imageUrl = programaSelecionado?.show?.image?.medium || '/img/noimage.png';
    const posterElement = document.querySelector('#poster');
    posterElement.src = imageUrl;
    const nameElement = document.querySelector('#name');
    nameElement.textContent = programaSelecionado?.show?.name || '';
    const typeElement = document.querySelector('#type');
    typeElement.textContent = programaSelecionado?.show?.type || '';
    const languageElement = document.querySelector('#language');
    languageElement.textContent = programaSelecionado?.show?.language || '';
    const genresElement = document.querySelector('#genres');
    genresElement.textContent = programaSelecionado?.show?.genres || '';
    const runningElement = document.querySelector('#running');
    runningElement.textContent = running ? 'Sim' : 'Não';
    const networkElement = document.querySelector('#network');
    networkElement.textContent = programaSelecionado?.show?.network?.name || 'N/A';
    const webChannelElement = document.querySelector('#web-channel');
    webChannelElement.textContent = programaSelecionado?.show?.webChannel || 'N/A';

    // Limpar o programa selecionado do localStorage
    localStorage.removeItem('programaSelecionado');
    }

    // Adicionar evento de clique ao botão de adicionar aos favoritos
    addFavorite.addEventListener('click', () => {
      addFavorite(programaSelecionado);
    });
    // Função para adicionar um programa aos favoritos
  function addFavorite(programaSelecionado) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(program);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Programa adicionado aos favoritos!');
  }
});

