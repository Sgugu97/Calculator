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
    if(b!==0){
        return a / b;
    }else{
        return "lol"
    }
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
let switchForMonitor=true;
var operand=[];
var ope;
var tot=[];

const point=document.querySelector(".point");
const monitor = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const equal= document.querySelector(".equal");
const varies=document.querySelectorAll(".varie")

point.addEventListener("click",()=>{
    monitor.textContent= `${monitor.textContent}` + ".";
    console.log("operand " + " [" + operand + "]");
    console.log("tot " +  " [" + tot + "]");
    console.log("ope " +  " [" + ope + "]");
    console.log(switchForMonitor)
})

nums.forEach(num => {
    num.addEventListener("click", () => {
        if(switchForMonitor===true){
            monitor.textContent = parseFloat(monitor.textContent + `${num.textContent}`);
        }else if(switchForMonitor===false){
            monitor.textContent=`${num.textContent}`;
            switchForMonitor=true;
        }
        monitor.innerHTML=monitor.innerHTML.substring(0,8);
    });
});

const simbols = document.querySelectorAll(".operator");


simbols.forEach(simbol => {
    simbol.addEventListener("click", ()=>{
        operand.push(parseFloat(monitor.textContent));
        if(operand.length>1){
            if(tot.length>=1){
                tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]))
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
        console.log(switchForMonitor);
        monitor.innerHTML=monitor.innerHTML.toString().substring(0,8);
    })
});



equal.addEventListener("click",()=>{
    operand.push(parseFloat(monitor.textContent));
    if(operand.length>1){
        if(tot.length>=1){
            tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
            tot=[tot.slice(-1)[0]];
            ope="";
            operand=[];
            monitor.textContent=tot.slice(-1)[0];
            tot=[];
        }else{
            tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
            tot=[tot.slice(-1)[0]];
            ope="";
            operand=[];
            monitor.textContent=tot.slice(-1)[0];
            tot=[];
        }
    }else{
        monitor.textContent=operand;
        operand=[];
    }
    switchForMonitor=false;
    console.log("operand " + " [" + operand + "]");
    console.log("tot " +  " [" + tot + "]");
    console.log("ope " +  " [" + ope + "]");
    console.log(switchForMonitor)
    monitor.innerHTML=monitor.innerHTML.toString().substring(0,8);
});



varies.forEach(varie =>{
    varie.addEventListener("click",()=>{
        operand.push(parseFloat(monitor.textContent));
        ope=varie.textContent;
        if (ope==="AC"){
            switchForMonitor=false;
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
                }else{
                    tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
  
                }
                tot=[tot.slice(-1)[0]];
                monitor.textContent=tot.slice(-1)[0]/100;
            }else{
                tot.push(monitor.textContent);
                monitor.textContent=monitor.textContent/100;
                tot=[]
            }
            operand=[];
            ope="";
            monitor.innerHTML=monitor.innerHTML.toString().substring(0,8);
        }else if(ope === "+/-"){
            if(operand.length > 1){
                if(tot.length>=1){
                    tot.push(operate(ope,tot.slice(-1)[0],operand.slice(-1)[0]));
                    switchForMonitor=false;
                    monitor.textContent=tot.slice(-1)[0];
                    tot=[tot.slice(-1)[0]];
                    operand=[];
                    ope="";
                    monitor.textContent=tot.slice(-1)[0]*-1;
                }else{
                    tot.push(operate(ope,operand.slice(-2)[0],operand.slice(-1)[0]));
                    tot=[tot.slice(-1)[0]];
                    ope="";
                    operand=[];
                    monitor.textContent=tot.slice(-1)[0]*-1;
                }
            }else{
                tot.push(monitor.textContent);
                monitor.textContent=monitor.textContent*-1;
                operand=[];
                ope="";
                tot=[]
            }
        }
                console.log("operand " + " [" + operand + "]");
        console.log("tot " +  " [" + tot + "]");
        console.log("ope " +  " [" + ope + "]");
        console.log(switchForMonitor);
        monitor.innerHTML=monitor.innerHTML.toString().substring(0,8);
    })
})