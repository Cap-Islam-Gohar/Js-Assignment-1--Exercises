
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = [];

button.addEventListener("click", () => {

    let number = +input.value;

    if(!isNaN(number) && number){

        for (let index = 1; index <= number; index++) {
            res[index -1] = index;
        }

        res = res.join(", ");

    }else{
        res = `Please Inter valid number`;
    }

    p.innerHTML = res;
});



