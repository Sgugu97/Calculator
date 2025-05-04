

const keyBoard = document.createElement("div");
keyBoard.setAttribute("class", "keyBoard");
document.body.appendChild(keyBoard);

for(let i=1; i<10; i++){
    const nums = document.createElement("button");
    nums.setAttribute("class", `num ${i}`);
    nums.textContent = `${i}`;
    keyBoard.appendChild(nums);
}