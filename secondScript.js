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

const operand=[];
let ope;
const tot=[];

function myFunction(){
    if(a.lenght<2){
        a.push(parseInt(monitor.textContent));
    }else{
        b.push(parseInt(monitor.textContent));
    }
}

const monitor = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const equal= document.querySelector(".equal");


nums.forEach(num => {
    num.addEventListener("click", () => monitor.textContent = parseInt(monitor.textContent + `${num.textContent}`));
});

const simbols = document.querySelectorAll(".operator");


simbols.forEach(simbol => {
    simbol.addEventListener("click", ()=>{
        operand.push(parseInt(monitor.textContent));
        if(operand.length>1){
            if(tot.length>=1){
                tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]))
            }else{
                tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
            }
        }
        monitor.textContent=0;
        ope=simbol.textContent;
        console.log(operand);
        console.log(tot);
        console.log(ope);
    })
});



equal.addEventListener("click",()=>{
    operand.push(parseInt(monitor.textContent));
    if(operand.length>1){
        if(tot.length>=1){
            tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]))
        }else{
            tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
        }
    }
    monitor.textContent=tot.slice(-1)[0];
    console.log(operand);
    console.log(tot);
    console.log(ope);
});





