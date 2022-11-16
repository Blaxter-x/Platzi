const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculate1');
const input2 = document.querySelector('#calculate2');
const btn = document.querySelector('#btnCalculate');
const pResult = document.querySelector('#result');

console.log(form);
form.addEventListener('submit', addInputValues);

function addInputValues(event) { 
    console.log({event});
    event.preventDefault();
    const addInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "The result is: " + addInputs;
}


