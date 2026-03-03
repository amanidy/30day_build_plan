let total = 0

const formEl = document.getElementById('form');
const buttonEl = document.getElementById('calculate-btn');


     
     buttonEl.addEventListener('click',(e)=>{
       e.preventDefault();
          
          const amountEl = document.getElementById('amount');
          const tipEl = document.getElementById('tip-amount');
          const peopleEl = document.getElementById('people')
          
          const amountValue = Number(amountEl.value.trim());
          const tipValue = Number(tipEl.value.trim());
          const peopleValue = Number(peopleEl.value.trim());
          
          let total = 0;
          let tip = (tipValue/100)*amountValue
          
          
         total = tip + amountValue
          console.log(total)
          
          const amountPerPerson = total/peopleValue
          
          
          const tipDetails = document.querySelector('.tip-details');
          
          tipDetails.textContent =
          tip.toFixed(2);
          
          
          const totalAmount = document.querySelector('.amount-details');
          
          totalAmount.textContent=total.toFixed(2);
          
          const personDetails = document.querySelector('.amount-per-person');
          
          personDetails.textContent= amountPerPerson;
          
          amountEl.value = "";
          tipEl.value = "";
          peopleEl.value="";
     })
     
     const resetBtnEl = document.getElementById('reset-btn');
     
     resetBtnEl.addEventListener('click',()=>{
       location.reload();
       
     })
     
     
     

