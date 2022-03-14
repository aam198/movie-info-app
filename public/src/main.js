
// Used https://www.themoviedb.org/documentation/api/discover to find endpoint for What are the most popular movies

// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const fetchMovies = async() => 
  await (await fetch('http://localhost:9000/.netlify/functions/getmovies')).json();
  // http://localhost:9000/getmovies for testing
  // /.netlify/functions/getmovies

  fetchMovies().then(data => {
  // console.log(data.results)


    // const search = document.getElementById('search');
    // const form = document.getElementById('form');
    const main = document.getElementById('main');

    data.results.forEach((movie) => {
      console.log(movie)
      // main.innerHTML = ''; 
      //Destructing to pull out data from movie object into individual variables
     const { title, overview, poster_path, vote_average  } = movie; 
    
      // to get img poster path
     const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

     // Constructing divs with real data 
    
    //  const li = document.createElement('li');
     const movieEl = document.createElement('div');
     movieEl.classList.add('movie');
  
     movieEl.innerHTML += `
     <img src="${IMG_PATH + poster_path}" alt="movie theater">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>`
      // Writing to DOM
        // li.appendChild(movieEl)
        main.appendChild(movieEl);
    });

  async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

     console.log(data.res)
  // sending the array to showMovies
    // showMovies(data.results)
    }
  })

// function showMovies(movies){
//   // To make sure main page is cleared before search results show 
//   main.innerHTML = ''; 

//   movies.forEach((movie)=> {
//     //Destructing to pull out data from movie object into individual variables
//    const { title, overview, poster_path, vote_average  } = movie; 

//    // Constructing divs with real data 
//    const movieEl = document.createElement('div');
//    movieEl.classList.add('movie');

//    movieEl.innerHTML = `
//    <img src="${IMG_PATH + poster_path}" alt="movie theater">
//       <div class="movie-info">
//         <h3>${title}</h3>
//         <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//       </div>
//       <div class="overview">
//         <h3>Overview</h3>
//         <p>${overview}</p>
//       </div>`
//     // Writing to DOM
//       main.appendChild(movieEl);
//   });
// }

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


//Add event listener to form

// form.addEventListener('submit', (e) => {
//   // since it's a submit we need to add preventDefault
//   e.preventDefault();

//   const searchTerm = search.value;

//   if(searchTerm && searchTerm !== '') {
//     //Concatenates the search term to the SEARCH_API 
//     getMovies(SEARCH_API + searchTerm)
//     // Clears out search field
//     search.value = '';
//   }
//   else {
//     // Reloads the page
//     window.location.reload();
//   }
// })


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

// function activateSearch() {
//   console.log(123);
//   search.focus();

// }