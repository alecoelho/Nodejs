$(document).ready(function(){
    $('input.typeahead').typeahead({
        name: 'artists',
        remote: '/searchArtist?key=%QUERY',
        limit: 10
    });
});