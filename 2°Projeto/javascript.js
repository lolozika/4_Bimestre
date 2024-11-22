// Função para filtrar livros conforme a pesquisa
function searchBooks(event = null) {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    // Executa a busca somente se for clicado ou Enter for pressionado
    if (event === null || event.key === 'Enter' || event.type === 'click') {
      cards.forEach((card) => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }
  
// Função para habilitar scroll no carrossel
const carousel = document.getElementById('carousel');

carousel.addEventListener('wheel', (event) => {
  event.preventDefault();

  // Calcula a direção do scroll
  if (event.deltaY > 0) {
    carousel.scrollLeft += 100; // Scroll para a direita
  } else {
    carousel.scrollLeft -= 100; // Scroll para a esquerda
  }
});

