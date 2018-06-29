$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyC8QDi1kwLlQ9a1F5c5M7iMlSF8Sbpu-FQ",
        authDomain: "quiz-generator-4536b.firebaseapp.com",
        databaseURL: "https://quiz-generator-4536b.firebaseio.com",
        projectId: "quiz-generator-4536b",
        storageBucket: "quiz-generator-4536b.appspot.com",
        messagingSenderId: "557598213958"
      };
      firebase.initializeApp(config);

    const database = firebase.database();

    $('#submit').on('click', function (e) {
        e.preventDefault();

        let quest = $('#input-question').val().trim();
        let ans1 = $('#answer-1').val().trim();
        let ans2 = $('#answer-2').val().trim();
        let ans3 = $('#answer-3').val().trim();
        let ans4 = $('#answer-4').val().trim();

        console.log(quest, ans1, ans2, ans3, ans4);
        let fullQuestion = {
            question: quest,
            option1: ans1,
            option2: ans2,
            option3: ans3,
            option4: ans4
        }
        database.ref().push(fullQuestion);
    })

    database.ref().on('child_added', function (snapshot) {
        let q = snapshot.val().question;
        let a1 = snapshot.val().option1;
        let a2 = snapshot.val().option2;
        let a3 = snapshot.val().option3;
        let a4 = snapshot.val().option4;

        console.log(snapshot.val().option4);
        $("#question-table > thead").append(`<tr><td> ${q} </td></tr>`);
        $("#question-table > thead").append(`<tr><td><input type='radio' name = 'a1' />${a1} </td></tr>`);
        $("#question-table > thead").append(`<tr><td><input type='radio' name = 'a1' />${a2} </td></tr>`);
        $("#question-table > thead").append(`<tr><td><input type='radio' name = 'a1' />${a3} </td></tr>`);
        $("#question-table > thead").append(`<tr><td><input type='radio' name = 'a1' />${a4} </td></tr>`);
    })
})
