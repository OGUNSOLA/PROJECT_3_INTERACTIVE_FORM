const nameField = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const color = document.getElementById('color');
const design = document.getElementById('design');
const shirtColors = color.children;
const activity =  document.getElementById('activities');
const activityCost = document.getElementById('activities-cost');
let costDisplayed = document.getElementById('activities-cost').textContent;
let totalCost =0;


// variables for dispolaying or hiding payment method 
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');

const paymentMethod = document.getElementsByClassName('payment-method-box')[0];
const payment = document.getElementById('payment');
const creditCArd = paymentMethod[1];
const payPal = paymentMethod[2];
const bitcoin = paymentMethod[3];

// variables for form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.getElementsByTagName('form');





// focuses on the name field on windows load
window.addEventListener('load', ()=>{
    nameField.focus();
    otherJobRole.style.visibility='hidden';
    paypalDiv.style.display= 'none';
    bitcoinDiv.style.display= 'none';
    color.disabled = true;
});

jobRole.addEventListener('change', (e)=>{
    const job = e.target.value;
    if(job === 'other'){
        otherJobRole.style.visibility='inherit';
    }
    else{
        otherJobRole.style.visibility='hidden';
    }
});

design.addEventListener('change', (e)=>{
    color.disabled = false;
    for(let i=0; i< shirtColors.length;i++){
        shirtColors[i].disabled = true;
    }

    if(e.target.value === 'js puns'){

        for(let i=0; i< shirtColors.length;i++){
            shirtColors[i].selected = false;
        }

        for(let i=1; i<=3;i++){
            shirtColors[i].disabled = false;
        }
       
    }

    if(e.target.value === 'heart js'){

        for(let i=0; i< shirtColors.length;i++){
            shirtColors[i].selected = false;
        }
        for(let i=4; i<=6;i++){
            shirtColors[i].disabled = false;
        }
       
    }
});



activity.addEventListener('change', (e)=>{
    if(e.target.type === 'checkbox'){
        if(e.target.checked){
            totalCost += parseInt(e.target.getAttribute('data-cost'));
        }
        else{
            totalCost -= parseInt(e.target.getAttribute('data-cost'));
        }
        
    }

    activityCost.innerHTML = `Total: $${totalCost}`
    
});


// when creedit card is selected, display credit card info and hide other payment methods 

payment.addEventListener('change', (e)=>{
    if(e.target.value === 'credit-card')
    {
        paypalDiv.style.display ='none';
        bitcoinDiv.style.display ='none';
        creditCardDiv.style.display ="block";
    }

    if(e.target.value === 'paypal')
    {
        bitcoinDiv.style.display ='none';
        creditCardDiv.style.display ="none";
        paypalDiv.style.display ='block';
        
    }

    if(e.target.value === 'bitcoin')
    {
        creditCardDiv.style.display ="none";
        paypalDiv.style.display ='none';
        bitcoinDiv.style.display ='block';
        
    }

});
form.addEventListener('submit', (e)=>{
    console.log('aha');
});


