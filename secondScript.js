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

let operator;
let numFirst;
let numSecond;

function operate(operator, numFirst, numSecond){
    if(operator === `+`){
        return add(numFirst, numSecond);
    }else if (operator === `-`){
        return subtract(numFirst, numSecond);
    }else if (operator === `*`){
        return multiply(numFirst, numSecond);
    }else if (operator === `/`){
        return divide(numFirst, numSecond);
    }
}

const monitor = document.querySelector(".display");

let first;
let second; 
let ope;
const nums = document.querySelectorAll(".num");
nums.forEach(num => {
    num.addEventListener("click", () => monitor.textContent = monitor.textContent + `${num.textContent}`);
});

const simbols = document.querySelectorAll(".operator");
simbols.forEach(simbol => {
    simbol.addEventListener("click", ()=> first = parseInt(`${monitor.textContent}`));
    simbol.addEventListener("click", ()=> ope = `${simbol.textContent}`);    
    simbol.addEventListener("click", ()=> monitor.textContent= "");
});

const equal= document.querySelector(".equal");
equal.addEventListener("click",()=>second = parseInt(`${monitor.textContent}`));
equal.addEventListener("click",()=>console.log(ope));
equal.addEventListener("click",()=>console.log(first));
equal.addEventListener("click",()=>console.log(second));
equal.addEventListener("click",()=>monitor.textContent= operate(ope,first,second));





