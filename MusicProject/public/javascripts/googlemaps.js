var markersData = new Array();
var coordinates = new Object();

function initialize() {
    var centrePoint = {lat: 41.923, lng: 12.513};
    var mapProp = {
        center: new google.maps.LatLng(centrePoint),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    if (markersData.length > 0)
        addMarker(map);
}

function addMarker(map) {
    for (var i = 0; i < markersData.length; i++) {
        var location = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var marker = new google.maps.Marker({
            position: location,
            label: markersData[i].letter,
            map: map
        });
    }
}

function deleteItem(field) {
    for (var i = markersData.length - 1; i >= 0; i--) {
        if (markersData[i].field == field) {
            markersData.splice(i, 1);
            return;
        }
    }
}

function getCoordinates(country, field, letter) {
    deleteItem(field);

    if (country != null) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': country}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                coordinates = {
                    "lat": results[0].geometry.location.lat(),
                    "lng": results[0].geometry.location.lng(),
                    "field": field,
                    "letter": letter
                };
                markersData.push(coordinates);
                initialize();
            }
        });
    }
    else {
        initialize();
    }
}

google.maps.event.addDomListener(window, 'load', initialize);