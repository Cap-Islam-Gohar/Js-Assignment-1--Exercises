
const button = document.querySelector("button");
const select = document.querySelector("select");
const p = document.querySelector("p");

let res = [];
let days = 0;

button.addEventListener("click", () => {

    let month = select.value;

    switch (month) {
        case "January": days = 31; break;
        case "February": days = 28; break;
        case "March": days = 31; break;
        case "April": days = 30; break;
        case "May": days = 31; break;
        case "June": days = 30; break;
        case "July": days = 31; break;
        case "August": days = 31; break;
        case "September": days = 30; break;
        case "October": days = 31; break;
        case "November": days = 30; break;
        case "December": days = 31; break;
        default: days = 0; break;
    }

    if(days !== 0){
        res = `${month} has ${days} days`;
    }else{
        res = `please select a month`;
    }
    
    p.innerHTML = res;
});



