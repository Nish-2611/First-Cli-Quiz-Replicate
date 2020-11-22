var readlinesync=require("readline-sync");
var chalk=require("chalk");
var score=0;
//Intro
var username=readlinesync.question("Welcome Wizard may i know your name?:");
console.log("Welcome "+ chalk.magentaBright.bold(username)+ " to the quiz about Tanay Pratap");
console.log("");
//array of question
var questions=[{
  question:"Where do Tanay live?:",
  answer:"Bangalore"
  },{
  question:"What is Tanay's favorite Superhero?:",
  answer:"Dhruv"
  },
  {
  question:"Where do Tanay work?:",
  answer:"Microsoft"
  },
  ];

  //play function
    
    function play(question,answer)
    {
      var userans=readlinesync.question(question);

      if(userans.uppercase==answer.uppercase)
      {
        console.log(chalk.greenBright("Yay! You are Right"));
        score=score+1;
      }
     else
     {
       console.log(chalk.redBright("Ahh! You are Wrong"));
       score=score-1;
     }
     console.log("Current Score:"+score);
     console.log(chalk.yellowBright("----------------------"));
    }

    //loop
    for(var i=0;i<questions.length;i++)
    {
      var currentquestion=questions[i];
      play(currentquestion.question,currentquestion.answer);
    }
    