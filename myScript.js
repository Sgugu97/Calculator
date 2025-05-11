//calculator functioning
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

let operatore;
let numFirst;
let numSecond;

function operate(operatore, numFirst, numSecond){
    if(operator === `+`){
        return add(numFirst, numSecond);
    }else if (operatore=== `-`){
        return subtract(numFirst, numSecond);
    }else if (operatore === `*`){
        return multiply(numFirst, numSecond);
    }else if (operatore === `/`){
        return divide(numFirst, numSecond);
    }
}





//to show the result
const monitor = document.createElement("div");
monitor.setAttribute("class", "monitor");
document.body.appendChild(monitor);
monitor.textContent = '';


const keyBoard = document.createElement("div");
keyBoard.setAttribute("class", "keyBoard");
document.body.appendChild(keyBoard);


//to make operators (left side)
const operators = document.createElement("div");
operators.setAttribute("class", "operators");
keyBoard.appendChild(operators);

const simbols =["/","*","-","+","="];
for (let i=0; i<simbols.length; i++){
    const operator =document.createElement("button");
    operator.setAttribute("class", "operator");
    operator.textContent = simbols[i];
    operators.appendChild(operator);
    operator.addEventListener("click", ()=> numFirst = monitor.textContent);

}


//to make the other operators(top right)
const varies = document.createElement("div");
varies.setAttribute("class", "varies");
keyBoard.appendChild(varies);

const variables = ["AC", "+/-", "%"];
for (let i=0; i<variables.length; i++){
    const variable =document.createElement("button");
    variable.setAttribute("class", "variable");
    variable.textContent = variables[i];
    varies.appendChild(variable);
    variable.addEventListener("click", ()=> console.log(variables[i]));
}


//to make numbers and the dot
const digits = document.createElement("div");
digits.setAttribute("class", "digits");
varies.appendChild(digits);

const nums = document.createElement("div");
nums.setAttribute("class", "nums");
digits.appendChild(nums);

for(let i=1; i<=9; i++){
    const num = document.createElement("button");
    num.setAttribute("class", `num`);
    num.textContent = `${i}`;
    nums.appendChild(num);
    num.addEventListener("click", ()=> monitor.textContent=monitor.textContent + `${i}`);
}

const zero = document.createElement("button");
zero.setAttribute("class", `num zero`);
zero.textContent = `0`;
digits.appendChild(zero);


const point = document.createElement("button");
point.setAttribute("class", `num point`);
point.textContent = `.`;
digits.appendChild(point);


