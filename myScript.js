const keyBoard = document.createElement("div");
keyBoard.setAttribute("class", "keyBoard");
document.body.appendChild(keyBoard);


for(let i=1; i<=9; i++){
    const num = document.createElement("button");
    num.setAttribute("class", `num`);
    num.textContent = `${i}`;
    keyBoard.appendChild(num);
    num.addEventListener("click", ()=> console.log(`${i}`));
}


const zero = document.createElement("button");
zero.setAttribute("class", `num zero`);
zero.textContent = `0`;
keyBoard.appendChild(zero);
zero.addEventListener("click", ()=> console.log(`0`));


const point = document.createElement("button");
point.setAttribute("class", `num point`);
point.textContent = `.`;
keyBoard.appendChild(point);
point.addEventListener("click", ()=> console.log(`.`));



