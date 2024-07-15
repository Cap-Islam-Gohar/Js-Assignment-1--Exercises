
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("p");

let res = "";

button.addEventListener("click", () => {

    let numbers = Array.from(inputs).map(input => {
        return +input.value;
    }).filter(number => {
        if(!isNaN(number) && number){
            return number;
        } 
    });

    if(numbers.length === inputs.length){
        res = `min Number is ${Math.min(...numbers)} and max Number is ${Math.max(...numbers)}`;
    }else{
        res = `Please Enter valid numbers`;
    }

    p.innerHTML = res;
});



