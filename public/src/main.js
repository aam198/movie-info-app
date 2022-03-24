
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.getElementById('main')
const search = document.getElementById('search');
const form = document.getElementById('form');

// Used https://www.themoviedb.org/documentation/api/discover to find endpoint for What are the most popular movies

// Get initial movies
getMovies()


async function getMovies() {
  const url ='/movies'
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}


const searchMovie = async (searchTerm) => {
  const url =`/search?${searchTerm}`

  const res = await fetch(url)
  const data = await res.json()

  console.log(data)
  console.log(data.results)
  showMovies(data.results)
}



function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie

      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')

      movieEl.innerHTML = `
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `
      main.appendChild(movieEl)
  })
}

// utility function to change span color based on vote_average rating
function getClassByRate(vote){

  if(vote >= 8) {
    return 'green'
  }
  else if (vote >= 5){
    return 'yellow'
  }
  else {
    return 'red'
  }

}


// Add event listener to form

form.addEventListener('submit', (e) => {
  // since it's a submit we need to add preventDefault
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm && searchTerm !== '') {
    // Send searchTerm variable to searchMovie function
    searchMovie(searchTerm)
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