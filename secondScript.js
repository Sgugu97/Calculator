let switchForMonitor=true;
var operand=[];
let ope;
let sim;
var tot=[];

const monitor = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const equal= document.querySelector(".equal");
const simbols = document.querySelectorAll(".operator");
const varies = document.querySelectorAll(".varie");
const point=document.querySelector(".point");

function add(a,b){
    return a + b;
};
function subtract(a,b){
    return a - b;
};
function multiply(a,b){
    return a * b;
};
function divide(a,b){
    return a / b;
};


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



nums.forEach(num => {
    num.addEventListener("click", () => {
        if(switchForMonitor===true){
            monitor.textContent = parseInt(monitor.textContent + `${num.textContent}`);
        }else if(switchForMonitor===false){
            monitor.textContent=`${num.textContent}`;
            switchForMonitor=true;
        }
    });
});


simbols.forEach(simbol => {
    simbol.addEventListener("click", ()=>{
        operand.push(parseInt(monitor.textContent));
        if(operand.length>1){
            if(tot.length>=1){
                tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
                switchForMonitor=false;
                monitor.textContent=tot.slice(-1)[0];
            }else{
                tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
                switchForMonitor=false;
                monitor.textContent=tot.slice(-1)[0];
            }
        }else{
            switchForMonitor=false;
            monitor.textContent=0;
        }
        ope=simbol.textContent;
        console.log("operand " + " [" + operand + "]");
        console.log("tot " +  " [" + tot + "]");
        console.log("ope " +  " [" + ope + "]");
        console.log(switchForMonitor)
    })
});



equal.addEventListener("click",()=>{
    operand.push(parseInt(monitor.textContent));
    if(operand.length > 1){
        if(tot.length>=1){
            tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
            switchForMonitor=false;
            monitor.textContent=tot.slice(-1)[0];
            tot=[tot.slice(-1)[0]];
            operand=[];
            ope="";
            monitor.textContent=tot.slice(-1)[0];
        }else{
            tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
            tot=[tot.slice(-1)[0]];
            ope="";
            operand=[];
            monitor.textContent=tot.slice(-1)[0];
        }
    }else{
        operand=[];
        ope="";
        tot=[]
    }
    console.log("operand " + " [" + operand + "]");
    console.log("tot " +  " [" + tot + "]");
    console.log("ope " +  " [" + ope + "]");
    console.log(switchForMonitor)
});



varies.forEach(varie =>{
    varie.addEventListener("click",()=>{
        operand.push(parseInt(monitor.textContent));
        ope=varie.textContent;
        if (ope==="AC"){
            switchForMonitor=true;
            operand=[];
            ope= "";
            sim = "";
            tot=[];
            monitor.textContent=0;
        }else if (ope === "%"){
            if(operand.length > 1){
                if(tot.length>=1){
                    tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
                    switchForMonitor=false;
                    monitor.textContent=tot.slice(-1)[0];
                    tot=[tot.slice(-1)[0]];
                    operand=[];
                    ope="";
                    monitor.textContent=parseInt(tot.slice(-1)[0])/100;
                }else{
                    tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
                    tot=[tot.slice(-1)[0]];
                    ope="";
                    operand=[];
                    monitor.textContent=parseInt(tot.slice(-1)[0])/100;
                }
            }else{
                tot.push(monitor.textContent);
                monitor.textContent=parseInt(monitor.textContent)/100;
                operand=[];
                ope="";
                tot=[]
            }
            console.log("operand " + " [" + operand + "]");
            console.log("tot " +  " [" + tot + "]");
            console.log("ope " +  " [" + ope + "]");
            console.log(switchForMonitor)
        }else if(ope === "+/-"){
            if(operand.length > 1){
                if(tot.length>=1){
                    tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
                    switchForMonitor=false;
                    monitor.textContent=tot.slice(-1)[0];
                    tot=[tot.slice(-1)[0]];
                    operand=[];
                    ope="";
                    monitor.textContent=parseInt(tot.slice(-1)[0])*-1;
                }else{
                    tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
                    tot=[tot.slice(-1)[0]];
                    ope="";
                    operand=[];
                    monitor.textContent=parseInt(tot.slice(-1)[0])*-1;
                }
            }else{
                tot.push(monitor.textContent);
                monitor.textContent=parseInt(monitor.textContent)*-1;
                operand=[];
                ope="";
                tot=[]
            }
            console.log("operand " + " [" + operand + "]");
            console.log("tot " +  " [" + tot + "]");
            console.log("ope " +  " [" + ope + "]");
            console.log(switchForMonitor)
        }
    })
})
monitor.textContent.length=9;