
const button = document.querySelector("button");
const input = document.querySelector("input[name='number']");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number)){

        if(number == 0){
            res = `please Enter number other than 'zero' `;
        }else if(number < 0){
            res = `${number} is negative number`;
        }else if(number > 0){
            res = `${number} is positive number`;
        }        
        
    }else{
        res = `Please Enter valid numbers`;
    }

    p.innerHTML = res;
});



