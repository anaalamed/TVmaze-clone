function render_show(show = {}) {
    return `<div class='element'>
    <h4>${show.name}</h4>
    <img src=${show.link_image}>
    <span class='icon-heart'></span>
    <span class='icon-star-full'>${show.star}</span>
</div>`;
}

export function render_shows( shows = []) {
    document.querySelector('.shows').innerHTML = shows.map(render_show).join("") 
}