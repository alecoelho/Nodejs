function saveCountries() {
    var homeCountry = document.getElementById("homeCountry").value;

    if (homeCountry == "") {
        alert("Home country is required")
        return;
    }

    var country2 = document.getElementById("country2").value;
    var country3 = document.getElementById("country3").value;
    var country4 = document.getElementById("country4").value;
    var country5 = document.getElementById("country5").value;

    window.location = "/SetPreference?homeCountry=" + homeCountry + "&country2=" + country2 + "&country3=" + country3 + "&country4=" + country4 + "&country5=" + country5;
}