document.addEventListener('DOMContentLoaded', () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const favoritesList = document.getElementById('favorites-list');

  favorites.forEach(programaSelecionado => {
    const titulo = programa?.show?.name || '';
    const imagem = programa?.show?.image?.medium || '';  
    // Criar o elemento da imagem
    const imgElement = document.createElement('img');
    imgElement.classList.add('poster');
    imgElement.src = imagem;
    const listItem = document.createElement('li');
    const spanElement = document.createElement('span');
    spanElement.classList.add('show-name');
    spanElement.textContent = titulo;  
    // Criar o elemento da lista de programas
    const liElement = document.createElement('li');
    liElement.appendChild(imgElement);
    liElement.appendChild(spanElement);
    favoritesList.appendChild(listItem);
  });
});