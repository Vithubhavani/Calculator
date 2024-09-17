const keys=document.querySelectorAll('.key');
const userInput=document.querySelector('.input');

let currentInput="";
let expression="";
let operandClicked=false;

keys.forEach((key)=>{
    key.addEventListener('click',()=>{
        const value=key.value;
        if(value==="C"){
            clearAll();
        }

        else if(value==="DEL"){
            deleteLast();
        }

        else if(value==="="){
            calculate();
        }
       else if(["+","-","*","/"].includes(value)){
        handleOperator(value);
       }

       else{
        appendNumber(value);
       }

        
    })
})

function appendNumber(value){

    if(operandClicked){
        currentInput="";
        operandClicked=false;
    }

    currentInput+=value;
    expression+=value;
    userInput.textContent=expression;
}
function handleOperator(op){
    if(currentInput==="") return 
    if(!operandClicked){
        expression+=op;
        userInput.textContent=expression;
        operandClicked=true;
    }
}

function calculate(){
    try{
        const result=eval(expression);
        userInput.textContent=result;
        currentInput=result.toString();
        expression=currentInput;
    } catch(error){
        userInput.textContent="Error"
    }
}

function deleteLast(){

    if(currentInput){
    currentInput=currentInput.slice(0,-1);
}
    expression=expression.slice(0,-1);
    userInput.textContent=expression||"0";
}

function clearAll(){
    currentInput="";
    expression="";
    userInput.textContent="0";
}