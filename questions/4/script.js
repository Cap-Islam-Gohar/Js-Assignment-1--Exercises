
const button = document.querySelector("button");
const input = document.querySelector("input[name='number']");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number)){

        switch (number) {
            case number > 0:
                res = `${number} is positive number`;
                break;
        
            case number < 0:
                res = `${number} is negative number`;
                break;
        
            default:
                res = `please inter number other than 'zero' `;
                break;
        }    
        
    }else{
        res = `Please Inter valid numbers`;
    }

    p.innerHTML = res;
});



