import { filter_show } from './filter_show.js';
import { render_shows } from './render_shows.js';


 async function fetch_shows () {
    try {
        const response = await fetch("https://api.tvmaze.com/shows");
        // const response = await fetch("https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US");
        return await response.json();
      } catch (error) {
        console.log("error.message");
      }
}

var shows;
const getShows = async () => {
    shows = await fetch_shows();
    const showsRating = shows.filter(show => show.rating.average >8);
    render_shows(showsRating.slice(0, 25));
}
getShows();



const input = document.querySelector('#search-input');
// render_shows(shows);


// ----------------------- search in list shows --------------------------------
input.addEventListener('input', () => {
    console.log(input.value);
    render_shows(filter_show(shows, input.value));
});

// ----------------------- search in API --------------------------------------- 
// function search(text) {
//     return fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
//         .then(response => response.json())
// }


// document.querySelector('#search').addEventListener('submit', (event) => {
//     event.preventDefault();
//     search(input.value)
//     .then(shows => render_shows(shows));
// })

