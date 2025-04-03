// Buena suerte!
//add eventlistener al radio button to change value 0, 1, 2

const theme = document.querySelector('.input');

function changeTheme(e) {
    if (e.target.value === '0') { document.getElementById("theme1").href= "css/styles.css" ;
    console.log('Test 0') }
if (e.target.value === '1') { document.getElementById("theme1").href= "css/theme1.css" ;
    console.log('Test 1') }
    if (e.target.value === '2') { document.getElementById("theme1").href= "css/theme2.css" ;
        console.log('Test 2') }
       
}
theme.addEventListener('click', changeTheme);

const currentOperand= document.querySelector('.current-operand');
const calcBtn= document.querySelector('.grid-container');


calcBtn.addEventListener('click', addCharacters);

function addCharacters (e) {
const num =  e.currentTarget.dataset.num;
const operator = e.currentTarget.dataset.operator;
const del = e.currentTarget.dataset.delete;
const reset = e.currentTarget.dataset.reset;
const output = e.currentTarget.dataset.output;

}