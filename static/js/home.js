function sendEmailOK() {
    Email.send({
        SecureToken: "25a7ebfb-7a4f-48d0-879c-05ad60b9cca9",
        To: 'st8tinchev@gmail.com',
        From: "st2tinchev@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked OK",
    }).then(function (message) {
        alert(message)
        location.href = "popUp8.html"
    });
}

function sendEmailMoreOK() {
    Email.send({
        SecureToken: "25a7ebfb-7a4f-48d0-879c-05ad60b9cca9",
        To: 'st8tinchev@gmail.com',
        From: "st2tinchev@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked more OK",
    }).then(function (message) {
        alert(message)
        location.href = "popUp8.html"
    });
}

function sendEmailYes() {
    Email.send({
        SecureToken: "25a7ebfb-7a4f-48d0-879c-05ad60b9cca9",
        To: 'st8tinchev@gmail.com',
        From: "st2tinchev@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked yessss",
    }).then(function (message) {
        alert(message)
        location.href = "popUp8.html"
    });
}

function sendEmailProbably() {
    Email.send({
        SecureToken: "25a7ebfb-7a4f-48d0-879c-05ad60b9cca9",
        To: 'st8tinchev@gmail.com',
        From: "st2tinchev@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Clicked probably",
    }).then(function (message) {
        alert(message)
        location.href = "popUp8.html"
    });
}