
const button = document.querySelector("button");
const input = document.querySelector("input[name='number']");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let number = +input.value

    if(!isNaN(number)){
        
        if( number %3 === 0 && number %4 === 0 ){
            res = `Yes, ${number} can divide by 3 And 4`;
        } else {
            res = `No, ${number} cant divide by 3 And 4`;
        }
        
    }else{
        res = `Please Enter valid number`;
    }

    p.innerHTML = res;
});



