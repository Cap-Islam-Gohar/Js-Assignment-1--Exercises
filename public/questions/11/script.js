
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
        res = `${numbers[0]}^${numbers[1]} = ${Math.pow(...numbers)}`;
    }else{
        res = `Please Inter valid numbers`;
    }

    p.innerHTML = res;
});



