const displayInp = document.querySelector('#display')
const sevenBtn = document.querySelector('#seven')
const eightBtn = document.querySelector('#eight')
const nineBtn = document.querySelector('#nine')
const timesBtn = document.querySelector('#times')
const fourBtn = document.querySelector('#four')
const fiveBtn = document.querySelector('#five')
const sixBtn = document.querySelector('#six')
const minusBtn = document.querySelector('#minus')
const oneBtn = document.querySelector('#one')
const twoBtn = document.querySelector('#two')
const threeBtn = document.querySelector('#three')
const plusBtn = document.querySelector('#plus')
const clearBtn = document.querySelector('#clear')
const zeroBtn = document.querySelector('#zero')
const doitBtn = document.querySelector('#doit')
const divBtn = document.querySelector('#div')


sevenBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '7';
});

eightBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '8';
});

nineBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '9';
});

timesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '*';
});

fourBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '4';
});

fiveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '5';
});

sixBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '6';
});

minusBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '-';
});

oneBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '1';
});

twoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '2';
});

threeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '3';
});

plusBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '+';
});

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value = '';
});

zeroBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value += '0';
});

doitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayInp.value = eval(calculator.display.value);
});

  
