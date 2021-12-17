
const search = document.getElementById('search');
const form = document.getElementById('form');

// Used https://www.themoviedb.org/documentation/api/discover to find endpoint for What are the most popular movies?
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1'





// Search bar keyboard shortcut
window.addEventListener('keydown', (e) =>{

console.log(e.key);
  if(e.key === 'ß' ){
    e.preventDefault();
    activateSearch();
  }
  if(e.key === 'Escape'){
    e.preventDefault();
    search.blur();
  }
});

function activateSearch() {
  console.log(123);
  search.focus();

}