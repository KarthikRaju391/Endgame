var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.bgBlue("What is your name? "));
console.log(chalk.bgBlue("Welcome "+ userName + " to DO YOU KNOW KARTHIK? "));

var levelOne = [
  {
    question: "Which band do I like? ",
    answer: "imagine dragons"
  },
  {
    question: "What sport do I like? ",
    answer: "cricket"
  },
  {
    question: "Which Crishtopher Nolan movie do I love? ",
    answer: "interstellar"
  }
]

var levelTwo = [
  {
    question: "Which month was I born in? ",
    answer: "September"
  },
  {
    question: "Do I like sweets? ",
    answer: "no"
  },
  {
    question: "Do I know to drive a car? ",
    answer: "yes"
  }
]

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("You are right!"));
    score++;
  }
  else
  {
    console.log(chalk.red("You are wrong!"));
  }
  console.log("Your score is: ", score);
  console.log("---------------");
}


for(i = 0; i<levelOne.length; i++)
{
  play(levelOne[i].question, levelOne[i].answer);
}

console.log("Yay!, you scored: ", score);

if(score==3){
  console.log("Wow, you know me well!");
  console.log("Here is another level for you!");
  for(i = 0; i<levelTwo.length; i++){
    play(levelTwo[i].question, levelTwo[i].answer);
  }
  console.log("Your final score is: ", score);
  console.log("Thank you for playing this game!");
}
else{
  console.log(chalk.yellow("Not bad!"));
}





