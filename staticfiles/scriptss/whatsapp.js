function sendToWhatsapp() {
    let number = "+2330504116594";

    let name = document.getElementById('name1a').value;
    let email = document.getElementById('email1a').value;
    let region = document.getElementById('select1a').value;
    let message = document.getElementById('message1a').value;

    let url = "https://wa.me/" + number + "?text="
        + "Name: " + name + "%0a"
        + "Email: " + email + "%0a"
        + "Region: " + region + "%0a"
        + "Message: " + message;

    window.open(url, '_blank').focus();
}