import { filter_show } from './filter_show.js';
import { render_shows } from './render_shows.js'
import { shows } from './shows.js'


render_shows(shows);

const input = document.querySelector('input');

input.addEventListener('input', () => {
    console.log(input.value);
    render_shows(filter_show(shows, input.value));
});