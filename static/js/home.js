function sendEmailOK() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "20eea2d28171a3",
        Password: "2c7d7d0171b54e",
        Port: "465",
        To: 'tozi@gmail.com',
        From: "tozi@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked OK",
    }).then(function (message) {
        location.href = "popUp8.html"
    });
}

function sendEmailMoreOK() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "20eea2d28171a3",
        Password: "2c7d7d0171b54e",
        Port: "465",
        To: 'tozi@gmail.com',
        From: "tozi@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked more OK",
    }).then(function (message) {
        location.href = "popUp8.html"
    });
}

function sendEmailYes() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "20eea2d28171a3",
        Password: "2c7d7d0171b54e",
        Port: "465",
        To: 'tozi@gmail.com',
        From: "tozi@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked yessss",
    }).then(function (message) {
        location.href = "popUp8.html"
    });
}

function sendEmailProbably() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "20eea2d28171a3",
        Password: "2c7d7d0171b54e",
        Port: "465",
        To: 'tozi@gmail.com',
        From: "tozi@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked probably",
    }).then(function (message) {
        location.href = "popUp8.html"
    });
}