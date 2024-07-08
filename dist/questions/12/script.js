
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("p");

let res = "";
let totalMarks = 500;
let subjectFilnalMark = 100;

button.addEventListener("click", () => {

    let numbers = Array.from(inputs).map(input => {
        return +input.value;
    }).filter(number => {
        if(!isNaN(number) && number && number <= subjectFilnalMark){
            return number;
        } 
    });

    if(numbers.length === inputs.length){

        let total = numbers.reduce((sum, num) => {
            return sum + num;
        });
    
        let average = Math.round(total / numbers.length);
    
        let percentage = (total / totalMarks) * 100 ;

        res = `Total marks = ${total}, Average Marks =${average}, Percentage =${percentage}%`;

    }else{
        res = `Please Inter valid numbers , Or Valid Mark less than or equal 100`;
    }

    p.innerHTML = res;
});
