export function filter_show(shows, word = '') {
    const lower_word = word.toLowerCase();
    return shows.filter(function ( {show} ) {
        return (show.name && show.name.toLowerCase().includes(lower_word));
    })
}