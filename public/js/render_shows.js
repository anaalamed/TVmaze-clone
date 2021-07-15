function render_show(show = {}) {
    return `<div class='element'>
    <h4>${show.show.name}</h4>
    <img src=${show.show.image?.medium || 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'}>
    <span class='icon-heart'></span>
    <span class='icon-star-full'>${show.show.rating.average}</span>
</div>`;
}

export function render_shows( shows = []) {
    document.querySelector('.shows').innerHTML = shows.map(render_show).join("") 
}