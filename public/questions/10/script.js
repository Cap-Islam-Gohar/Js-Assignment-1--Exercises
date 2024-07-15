
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = [];

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number) && number){

        for (let index = 0; index <= number; index++) {
            if(index%2 === 0){
                res.push(index);
            }
        }

        res = res.join(", ");

    }else{
        res = `Please Enter valid number`;
    }

    p.innerHTML = res;
});



