jQuery(document).ready(function () {

    $('#homeCountry').bind('typeahead:selected', function(obj, datum, name) {  
        var country = datum.value;
        getCoordinates(country, "homeCountry", "H");
    });
    $("#homeCountry").blur(function() {
        if($("#homeCountry").val().trim() == '')
            getCoordinates(null, "homeCountry", null);
    });

    $('#country2').bind('typeahead:selected', function(obj, datum, name) {  
        var country = datum.value;
        getCoordinates(country, "country2", "2");
    });
    $("#country2").blur(function() {
        if($("#country2").val().trim() == '')
            getCoordinates(null, "country2", null);
    });

    $('#country3').bind('typeahead:selected', function(obj, datum, name) {  
        var country = datum.value;
        getCoordinates(country, "country3", "3");
    });
    $("#country3").blur(function() {
        if($("#country3").val().trim() == '')
            getCoordinates(null, "country3", null);
    });

    $('#country4').bind('typeahead:selected', function(obj, datum, name) {  
        var country = datum.value;
        getCoordinates(country, "country4", "4");
    });
    $("#country4").blur(function() {
        if($("#country4").val().trim() == '')
            getCoordinates(null, "country4", null);
    });

    $('#country5').bind('typeahead:selected', function(obj, datum, name) {  
        var country = datum.value;
        getCoordinates(country, "country5", "5");
    });
    $("#country5").blur(function() {
        if($("#country5").val().trim() == '')
            getCoordinates(null, "country5", null);
    });

});

