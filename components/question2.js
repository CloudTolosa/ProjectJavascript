function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "<a href='../../index.html'><button id='btn0' style='display: block;margin-left: auto;margin-right: auto;'>Home</button></a>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Who travels into space?", ["Fireman", "Teacher","Painter", "Astronaut"], "Astronaut"),
    new Question("Who makes bread, cakes, pies, cookies?", ["Doctor", "Baker", "Teacher", "Nurse"], "Baker"),
    new Question("Who helps other people get well when they are sick?", ["Doctor", "Baker", "Teacher", "Painter"], "Doctor"),
    new Question("Who puts out fires and rescues people?", ["Fireman", "Teacher","Painter", "Astronaut"], "Fireman"),
    new Question("Who helps other people learn things?", ["Doctor", "Baker", "Teacher", "Painter"], "Teacher")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
