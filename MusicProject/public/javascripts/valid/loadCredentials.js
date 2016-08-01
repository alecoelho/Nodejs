function loadForm() {
    var username = document.getElementById('username');
    var value = getCookie('username').replace(/%20/g, " ");

    if(value == "j%3Anull")
        value = "(not defined)";

    username.innerHTML = value;

    var homeCountry = document.getElementById('homeCountry');
    value = "(not defined)";
    homeCountry.innerHTML = value;

    value = getCookie('homeCountry').replace(/%20/g, " ");
    homeCountry.innerHTML = value;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
