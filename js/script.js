const form = document.getElementsByTagName('form');
const nameField = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const color = document.getElementById('color');
const design = document.getElementById('design');
const shirtColors = color.children;

console.log(shirtColors);

// focuses on the name field on windows load
window.addEventListener('load', ()=>{
    nameField.focus();
    otherJobRole.style.visibility='hidden';
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


