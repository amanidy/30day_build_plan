

const questionsEl = document.querySelector('.questions-container');




const questions = [
  {
    question:"What is your name?",
    answers:['Felix','Don','Mutinda','Kamau']
  },
    {
    question:"How old are you?",
    answers:['8','20','32','25']
  },
    {
    question:"What is your favorite city?",
    answers:['Nyeri','Nairobi','Mombasa','Nakuru']
  }
  
];



questions.forEach((question,index) =>{
  const div = document.createElement('div');
  
  
  const p = document.createElement('p');
  p.classList.add('question');
  p.innerHTML = question.question;
  
  div.appendChild(p);
  
  questionsEl.appendChild(div);
  
  p.addEventListener('click',function(){
  
  console.log('The question was clicked')
  
  const answerEl = document.createElement('div');
answerEl.classList.add('answer');


  
  const randomIndex = Math.floor(Math.random()* questions[index].answers.length)
  
   answerEl.textContent= questions[index].answers[randomIndex];
  
  p.appendChild(answerEl);
  
})

  
})







