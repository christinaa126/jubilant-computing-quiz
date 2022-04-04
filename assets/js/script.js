var timeEl = document.querySelector(".timer")
const quizQuestions = [
    {
    question: "How do you create a timer?",
    answers: {
        a: "setTimer",
        b: "setTimeout",
        c: "setInterval",
        d: "setIntervalTime"
    },
    correctAnswer: "c"

},
{
    question: "Where do you correctly insert your Javascript in the HTML document?",
    answers: {
        a: "header section",
        b: "body section",
        c: "main section",
        d: "under css link"
    },
    correctAnswer: "b"
},
{
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
        a: "alert('Hello World');",
        b: "msgBox('Hello World');",
        c: "msg('Hello World');",
        d: "alertBox('Hello World');",
    },
    correctAnswer: "a"
    
}
];
console.log(quizQuestions);


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