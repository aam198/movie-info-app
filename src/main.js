
const search = document.getElementById('search');
const form = document.getElementById('form');




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