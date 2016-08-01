$(document).ready(function(){
    $('input.typeahead').typeahead({
        name: 'countries',
        remote: '/searchCountry?key=%QUERY',
        limit: 10
    });
});