var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.clear();
console.log("--------------");
console.log("--------------");
console.log("This quiz has two levels, to get to the second level, you must answer atleast two questions correctly in the first level.");
console.log("--------------");
console.log("Beware of spelling mistakes!");
console.log("--------------");
var userName = readlineSync.question(chalk.bgCyan("What is your name? "));

console.log("--------------");
console.log(chalk.bgCyan("Welcome "+ userName + " to DO YOU KNOW KARTHIK? "));
console.log("--------------");

var levelOne = [
  {
    question: chalk.bgGrey("Which month was I born in? "),
    answer: "September"
  },
  {
    question: chalk.bgGrey("Do I know to drive a car? "),
    answer: "Yes"
  },
  {
    question: chalk.bgGrey("Do I like sweets? "),
    answer: "No"
  }
]

var levelTwo = [

  {
    question: chalk.bgGrey("Which band do I like? "),
    answer: "Imagine Dragons"
  },
  {
    question:chalk.bgGrey("Which Crishtopher Nolan movie do I love? "),
    answer: "Interstellar"
  },
  {
    question:chalk.bgGrey("Which sport do I love to play? "),
    answer: "Cricket"
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
    wrong();
  }
  console.log("Your score is: ", score);
  console.log("--------------");
}


for(i = 0; i<levelOne.length; i++)
{
  play(levelOne[i].question, levelOne[i].answer);
}

console.log(chalk.bold("Yay!, you scored: ", score));

if(score>=2){
  console.log("You know me well!");
  console.log(chalk.yellow("Here is another level for you!"));
  console.log("--------------");

  for(var j = 0; j<levelTwo.length; j++){
    play(levelTwo[j].question, levelTwo[j].answer);
  }
  console.log("Your final score is: ", score);
  console.log("--------------");
  console.log(chalk.bgCyan("I guess you know me a little better now, thank you for playing!"));
}
else{
  console.log(chalk.yellow("Not bad!"));
}

function wrong(){
            while(levelOne[i]){
      if(i===0){
        console.log(chalk.green("The correct answer is " + levelOne[i].answer));
        break;
      }
      else if(i===1){
        console.log(chalk.green("The correct answer is " + levelOne[i].answer));
        break;
      }
      else{
        console.log(chalk.green("The correct answer is " + levelOne[i].answer));
        break;
      }
    }
    while(levelTwo[j]){
      if(j===0){
        console.log(chalk.green("The correct answer is " + levelTwo[j].answer));
      break;
      }
      else if(j===1){
        console.log(chalk.green("The correct answer is " + levelTwo[j].answer));
      break;
      }
      else{
        console.log(chalk.green("The correct answer is " + levelTwo[j].answer));
      break;
      }
    }
}