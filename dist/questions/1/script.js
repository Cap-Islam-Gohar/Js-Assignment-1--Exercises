
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value

    if(!isNaN(number)){
        res = `Your number is ${number}`;
    }else{
        res = `Please Inter valid number`;
    }

    p.innerHTML = res;
});


