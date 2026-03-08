

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



questions.forEach(question =>{
  const div = document.createElement('div');
  div.classList.add('question');
  
  const p = document.createElement('p');
  p.innerHTML = question.question;
  
  div.appendChild(p);
  
  questionsEl.appendChild(div);
  
})

const questionEl = document.querySelector('.question');

console.log(questionEl)





questionEl.addEventListener('click',function(){
  
  console.log('The question was clicked')
})
