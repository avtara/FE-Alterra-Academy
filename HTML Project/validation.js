function validateForm(event) {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("integration_city_id").value;
    let message = document.getElementById("message").value;

    event.preventDefault();

    let text;
    let fullNameInvalid = fullname === "";
    let emailInvalid = email === "";
    let phoneInvalid = phone === "";
    let cityInvalid = city === "";
    let messageInvalid = message === "";

    if (emailInvalid) {
        text = "Email address cannot be empty";
    } else if (!validateEmail(email)) {
        text = "Email address not valid";
    } else {
        text = "";
    }
    document.getElementById("validationEmail").innerHTML = text;

    if (phoneInvalid) {
        text = "Phone address cannot be empty";
    } else {
        text = "";
    }
    document.getElementById("validationPhone").innerHTML = text;


    if (fullNameInvalid) {
        text = "Name cannot be empty";
    } else {
        text = "";
    }
    document.getElementById("validationName").innerHTML = text;


    if (messageInvalid) {
        text = "Message cannot be empty";
    } else {
        text = "";
    }
    document.getElementById("validationMessage").innerHTML = text;

    if (cityInvalid) {
        text = "City cannot be empty";
    } else {
        text = "";
    }
    document.getElementById("validationNational").innerHTML = text;


    if (!cityInvalid && !emailInvalid && !phoneInvalid && !messageInvalid && !fullNameInvalid) {
        localStorage.fullname = fullname;
        localStorage.email = email;
        localStorage.phone = phone;
        localStorage.city = city;
        localStorage.message= message;
        window.open("./detail.html");
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
