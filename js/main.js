import { filter_show } from './filter_show.js';
import { render_shows } from './render_shows.js'
import { shows } from './shows.js'

const input = document.querySelector('#search-input');

// search in list shows
render_shows(shows);
input.addEventListener('input', () => {
    console.log(input.value);
    render_shows(filter_show(shows, input.value));
});

function search(text) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
        .then(response => response.json())
}

// search('b')
//     .then(shows => render_shows(shows));


// document.querySelector('#search').addEventListener('submit', (event) => {
//     event.preventDefault();
//     search(input.value)
//     .then(shows => render_shows(shows));
// })



// fetch('http://api.tvmaze.com/search/shows?q=Big ben')
//     .then(response => response.json())
//     .then(data => render_shows(data));