var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var choiceA =document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');


var quizQuestions = [
    {
    question: "How do you create a timer?",
    a: "A. setTimer",
    b: "B. setTimeout",
    c: "C. setInterval",
    d: "D. setIntervalTime",
    correctAnswer: "C"

},
{
    question: "Where do you correctly insert your Javascript in the HTML document?",
    a: "A. header section",
    b: "B. body section",
    c: "C. main section",
    d: "D. under css link",
    correctAnswer: "B"
},
{
    question: "How do you write 'Hello World' in an alert box?",
    a: "A. alert('Hello World');",
    b: "B. msgBox('Hello World');",
    c: "C. msg('Hello World');",
    d: "D. alertBox('Hello World');",
    correctAnswer: "A"
    
}
];

var question1 = JSON.stringify(question);
console.log(question1);

var secondsLeft = 75;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = " Time left :" + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

//setTime();


  
startButton.addEventListener("click", function() {
   // document.querySelector("#start-button").addEventListener("click", function() {
    document.getElementById("introPage").hidden = true;
    document.getElementById("questionContainer").hidden = false;
    setTime();

}, false);



function displayQuestions() {
   // var questions = quizQuestions[questionIndex];
    document.getElementById("question").innerHTML = "<p>" + quizQuestions[0].question; + "</p>";
    choiceA.innerHTML =  "<p>" + quizQuestions[0].a; + "</p>";
    choiceB.innerHTML =  "<p>" + quizQuestions[0].b; + "</p>";
    choiceC.innerHTML =  "<p>" + quizQuestions[0].c; + "</p>";
    choiceD.innerHTML =  "<p>" + quizQuestions[0].d; + "</p>";

}
displayQuestions();

if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
  
    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
  