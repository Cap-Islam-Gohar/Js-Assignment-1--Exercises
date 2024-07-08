
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number) && number){

        switch (number%2  === 0) {
            case true:
                res = `${number} is even`;
                break;
        
            default:
                res = `${number} is odd`;
                break;
        }

    }else{
        res = `Please Inter valid numbers`;
    } 

    p.innerHTML = res;
});


