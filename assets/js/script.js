var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");



var quizQuestions = [
    {
    "question": "How do you create a timer?",
        "a": "setTimer",
        "b": "setTimeout",
        "c": "setInterval",
        "d": "setIntervalTime",
    "correctAnswer": "c"

},
{
    "question": "Where do you correctly insert your Javascript in the HTML document?",
        "a": "header section",
        "b": "body section",
        "c": "main section",
        "d": "under css link",
    "correctAnswer": "b"
},
{
    "question": "How do you write 'Hello World' in an alert box?",
        "a": "alert('Hello World');",
        "b": "msgBox('Hello World');",
        "c": "msg('Hello World');",
        "d": "alertBox('Hello World');",
    "correctAnswer": "a"
    
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
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        //displayWord();
      }
  
    }, 1000);
  }

//setTime();


  
startButton.addEventListener("click", function(event) {
   // document.querySelector("#start-button").addEventListener("click", function() {
    document.getElementById("introPage").hidden = true;
    document.getElementById("question").hidden = false;
    setTime();

}, false);

var lastQuestionIndex = quizQuestions.length - 1;
var questionIndex = 0;

function displayQuestions() {
    var questions = quizQuestions[questionIndex];
    question.innerHTML = "<p>" + questions.quizQuestions; + "</p>";
    a.innerHTML = questions.a;
    b.innerHTML = questions.b;
    c.innerHTML = questions.c;
    d.innerHTML = questions.d;
}
displayQuestions();