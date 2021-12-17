const apiKey = config.API_KEY;
// Used https://www.themoviedb.org/documentation/api/discover to find endpoint for What are the most popular movies?
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey +'&page=1';

// to get img poster path
const IMG_PATH = 'https://image.tmdb.org/t/p/w1200'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey +'&query="';

const search = document.getElementById('search');
const form = document.getElementById('form');

// Get initial movies

getMovies(API_URL)

async function getMovies (url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

//Add event listener to form

form.addEventListener('submit', (e) => {
  // since it's a submit we need to add preventDefault
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm && searchTerm !== '') {
    //Concatenates the search term to the SEARCH_API 
    getMovies(SEARCH_API + searchTerm)
    // Clears out search field
    search.value = '';
  }
  else {
    // Reloads the page
    window.location.reload();
  }
})


// Search bar keyboard shortcut
window.addEventListener('keydown', (e) => {

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