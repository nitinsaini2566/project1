function toggleSidebar() {
    document.querySelector('#hidebar').classList.toggle('active');
}

function submitForm(event) {
    event.preventDefault(); 

    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstname == "Nitin" && lastname == "Saini" && email == "nitinsaini2566@gmail.com" && password == "nitin123") {
        alert("Login Successful");
        window.location.assign("home.html");
    } else {
        alert("Wrong Details");
    }
}
