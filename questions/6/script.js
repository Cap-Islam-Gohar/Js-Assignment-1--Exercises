
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number) && number){

        if(number%2  === 0){
            res = `${number} is even`;
        }else{
            res = `${number} is odd`;
        }

    }else{
        res = `Please Enter valid numbers`;
    }   

    p.innerHTML = res;
});


