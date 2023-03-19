var timerElement = document.querySelector('.timerCount');
var timer;
var timerCount =60

var startQuiz


var questions = [
    {
    title: "question",
    choices: [answer choice 1, answer choice 2],
    answer: "answer"
    },
    ]



function startTimer() {

    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
} , 1000) 
console.log(timer)
}

startTimer()

