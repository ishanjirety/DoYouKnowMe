const readLineSync= require('readline-sync');
const username = readLineSync.question("Hi May I know Your Name?  ");

var score=0;
console.log("Welcome "+username+" To Do You Know Ishan?");

function play(question,answer){
  var useranswer = readLineSync.question(question+"\n");

  if(useranswer.toUpperCase() === answer.toUpperCase()){
    console.log("> You Are Right :)\n");
    score ++;
    console.log("> Current Score : \n"+ score);
  }
  else{
    console.log("> Wrong Answer :(\n");
     console.log("> Current Score : "+ score);
  }
}
que=[
  {
    question:"Where Does Ishan Live?",
    answer:"Indore"
  },
  {
    question:"Which Certification He Recently Completed",
    answer:"Certified Ethical Hacker"
  },
  {
    question:"Whats His Favourite Food?",
    answer:"Pav Bhaji"
  },
  {
    question:"What He likes to do in free time except Coding",
    answer:"Play Guitar"
  },
  {
    question:"What He is Fond of?",
    answer:"New Tech"
  }
]


for(var i=0;i<que.length;i++){
  play(que[i].question,que[i].answer)
}
if (score >=3){
  console.log("\n WOW! How do you know him so well!\n");
}
else{
  console.log("\n NAh! You dont know him much\n");
}