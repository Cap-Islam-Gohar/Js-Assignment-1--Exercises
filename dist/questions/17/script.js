
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

        switch (true) {

            case numbers[0] > numbers[1]:
                res = `Max Number is ${numbers[0]}`;
                break;

            case numbers[0] < numbers[1]:
                res = `Max Number is ${numbers[1]}`;
                break;
        
            default:
                res = `Please Enter Differnet numbers`;
                break;
        }

    }else{
        res = `Please Enter valid numbers`;
    }

    p.innerHTML = res;
});



