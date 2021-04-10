var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.bgCyan("What is your name? "));
console.log(chalk.bgCyan("Welcome "+ userName + " to DO YOU KNOW KARTHIK? "));
console.log("--------------");

var levelOne = [
  {
    question: chalk.bgGrey("Which month was I born in? "),
    answer: "September"
  },
  {
    question: chalk.bgGrey("Do I know to drive a car? "),
    answer: "yes"
  },
  {
    question: chalk.bgGrey("Do I like sweets? "),
    answer: "no"
  }
]

var levelTwo = [

  {
    question: chalk.bgGrey("Which band do I like? "),
    answer: "imagine dragons"
  },
  {
    question:chalk.bgGrey("Which Crishtopher Nolan movie do I love? "),
    answer: "interstellar"
  },
  {
    question:chalk.bgGrey("Which sport do I love to play? "),
    answer: "cricket"
  },
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
  console.log("--------------");
}


for(i = 0; i<levelOne.length; i++)
{
  play(levelOne[i].question, levelOne[i].answer);
}

console.log(chalk.bold("Yay!, you scored: ", score));

if(score==3){
  console.log("Wow, you know me well!");
  console.log(chalk.yellow("Here is another level for you!"));
  console.log("--------------");

  for(i = 0; i<levelTwo.length; i++){
    play(levelTwo[i].question, levelTwo[i].answer);
  }
  console.log("Your final score is: ", score);
  console.log(chalk.yellow("Answers are: "));
  for(i=0; i<levelOne.length; i++){
    console.log(levelOne[i].answer.toUpperCase());
  }   
  for(i=0; i<levelTwo.length; i++){
    console.log(levelTwo[i].answer.toUpperCase());
  }
  console.log(chalk.bgCyan("I guess you know me a little better now!"));
}
else{
  console.log(chalk.yellow("Not bad!"));
  console.log(chalk.yellow("Answers are: "));
  for(i=0; i<levelOne.length; i++){
    console.log(levelOne[i].answer.toUpperCase());
  }
}


