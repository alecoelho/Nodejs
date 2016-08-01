function saveFavourites() {
    var mostFavourite = jQuery("#bestArtist").val();
    var favoDOM = jQuery("#bestArtist");

    if (mostFavourite == "") {
        favoDOM.attr("style", "background-color: #F2DEDE");
        favoDOM.val("");
        favoDOM.val("placeholder", "Please let us know at least one favourite artist.");

        return;
    }

    var favo2 = jQuery("#artist2").val();
    var favo3 = jQuery("#artist3").val();
    var favo4 = jQuery("#artist4").val();
    var favo5 = jQuery("#artist5").val();

    window.location = "/Recommend";
}