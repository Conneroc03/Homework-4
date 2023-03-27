var timerElement = document.querySelector('.timerCount');
var timer;
var timerCount = 60

var startQuiz

const questions = [
    {
        question: "What is Ironmans real name?",
        optionA: "Tony Stark",
        optionB: "Peter Parker",
        optionC: "Bruce Wayne",
        optionD: "Clark Kent",
        correctOption: "A"
    },

    {
        question: "What is the name of the city where the Avengers live?",
        optionA: "Houston",
        optionB: "Los Angeles",
        optionC: "HonoLulu",
        optionD: "New York",
        correctOption: "D"
    },

    {
        question: "What is the name of the villain who wants to destroy the world?",
        optionA: "Loki",
        optionB: "Thanos",
        optionC: "Ultron",
        optionD: "lex Luthor",
        correctOption: "B",
    },

    {
        question: "What color is the Hulk?",
        optionA: "grey",
        optionB: "yellow",
        optionC: "green",
        optionD: "blue",
        correctOption: "C",
    },

    {
        question: "Whos nickname is Murder Bot",
        optionA: "Ironman",
        optionB: "Black Panther",
        optionC: "Ultron",
        optionD: "Rocket Racoon",
        correctOption: "C",

    },

    {
        question: "Nick Fury wears an eye patch over which eye",
        optionA: "Left",
        optionB: "Right",
        optionC: "He doesnt wear an eyepatch",
        optionD: "He wears one on both eyes",
        correctOption: "A",

    },

    {       
        question: "How many Infinity Stones are there",
        optionA: "8",
        optionB: "6",
        optionC: "10",
        optionD: "5",
        correctOption: "B",


    },

    {
        question: "Who is the firstborn child of Oden",
        optionA: "Hela",
        optionB: "Thor",
        OptionC: "Loki",
        OptionD: "Balder",
        correctOption: "A",

    },

    {
        question: "What was Scott Lang's Job before he became Ant Man",
        optionA: "Chef",
        optionB: "Superhero",
        optionC: "Criminal",
        optionD: "Famous Rapper",
        correctOption: "C",

    },

    { 
        question: "Nick Fury's middle name is what",
        optionA: "Samuel",
        optionB: "Adam",
        optionC: "James",
        optionD: "Joseph",
        correctOption: "D"

    }

]

let shuffledQuestions = []

function handleQuestions() {
    while (shuffledQuestions.length > 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

        options.forEach((option) => {
            if (option.checked === true && option.value === currentQuestionAnswer) {
                document.getElementById(correctOption).style.backgroundColor = "green"
                playerScore++ 
                indexNumber++ 
                setTimeout(() => {
                    questionNumber++
                }, 1000)
            }

        }, 1000)

    }



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    // Calculate score, remarks and grade
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //Display score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}






    function startTimer() {

        timer = setInterval(function () {
            timerCount--;
            timerElement.textContent = timerCount;
        }, 1000)
        console.log(timer)
    }

startTimer()

