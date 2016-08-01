jQuery(document).ready(function () {
    setRandomArtist();

    jQuery('#bestArtist').blur(function () {
        var thisArtist = jQuery(this).val();
        var thisDOM = jQuery(this);
        getArtist(thisArtist, thisDOM);
    });

    jQuery('#artist2').blur(function () {
        var thisArtist = jQuery(this).val();
        var thisDOM = jQuery(this);
        getArtist(thisArtist, thisDOM);
    });

    jQuery('#artist3').blur(function () {
        var thisArtist = jQuery(this).val();
        var thisDOM = jQuery(this);
        getArtist(thisArtist, thisDOM);
    });

    jQuery('#artist4').blur(function () {
        var thisArtist = jQuery(this).val();
        var thisDOM = jQuery(this);
        getArtist(thisArtist, thisDOM);
    });

    jQuery('#artist5').blur(function () {
        var thisArtist = jQuery(this).val();
        var thisDOM = jQuery(this);
        getArtist(thisArtist, thisDOM);
    });
});

function getArtist(artistName, DOM) {
    var name;
    var desc;
    var imgUrl;
    jQuery.ajax({
        type: 'GET',
        url: '/getArtist?artist=' + artistName,
        success: function (result) {
            if (result.message != null) {
                DOM.attr("style", "background-color: #F2DEDE");
                DOM.val("");
                DOM.attr("placeholder", "Sorry, we can't find the artist.");
            } else {
                DOM.attr("style", "background-color: #FFFFFF");
                name = result.artist.name;
                desc = result.artist.bio.content;
                imgUrl = result.artist.image[4]["#text"];
                populateInfo(name, linefeed(desc), imgUrl);
            }
        },
        error: function (result) {
            console.log(result);
        }
    });
}

function populateInfo(name, desc, imgUrl) {
    jQuery("#artNameArtist").text(name);
    jQuery("#artNameModal").text(name);
    jQuery("#artDescModal").html(desc);
    jQuery("#artPic").attr("src", imgUrl);
}

function linefeed(desc) {
    return desc.replace(/\n/g, "<br />");
}

function setRandomArtist() {
    var randomArtist;
    var bestDOM = jQuery("#bestArtist");
    jQuery.ajax({
        type: 'GET',
        url: '/getRandom',
        success: function (result) {
            randomArtist = result.topartists.artist[0].name;
            getArtist(randomArtist, bestDOM);
        },
        error: function (result) {
            console.log(result);
        }
    });
}