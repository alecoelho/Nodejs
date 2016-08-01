function signIn() {

    var email = document.getElementById("email").value;
    if (email === "") {
        alert("E-mail is required");
        return;
    }

    var password = document.getElementById("pwd").value;
    if (password === "") {
        alert("Password is required");
        return;
    }

    var form = document.getElementById("signIn");
    form.submit();
}

function signUp() {

    var email = document.getElementById("email1").value;
    if (email === "") {
        alert("E-mail is required");
        return;
    }

    var emailAgain = document.getElementById("email2").value;

    if (emailAgain != email) {
        alert("E-mails do not match");
        return;
    }

    var password = document.getElementById("pwd1").value;
    if (password === "") {
        alert("Password is required");
        return;
    }

    var passwordAgain = document.getElementById("pwd2").value;

    if (passwordAgain != password) {
        alert("Passwords do not match");
        return;
    }

    var screenName = document.getElementById("nickName").value;
    if (screenName === "") {
        alert("Screen name is required")
    }

    var form = document.getElementById("signUp");
    form.submit();
}
