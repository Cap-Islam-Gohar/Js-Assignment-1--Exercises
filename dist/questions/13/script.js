
const button = document.querySelector("button");
const select = document.querySelector("select");
const p = document.querySelector("p");

let res = [];
let months = {January: 31, February:28, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};

button.addEventListener("click", () => {

    let month = select.value;

    if(month){
        if(months.hasOwnProperty(month)){
            res = `${month} has ${months[month]} days`;
        }else{
            res = `please select a month`;
        }
    }
    
    p.innerHTML = res;
});



