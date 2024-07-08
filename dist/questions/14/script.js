
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("p");

let res = "";
let totalMarks = 500;
let subjectFilnalMark = 100;
let grad = "";

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
    
        let percentage = (total / totalMarks) * 100 ;

        if(percentage >= 90){
            grad = "A";
        }else if(percentage >= 80){
            grad = "B";
        }else if(percentage >= 70){
            grad = "C";
        }else if(percentage >= 60){
            grad = "D";
        }else if(percentage >= 50){
            grad = "E";
        }else{
            grad = "F";
        }

        res = `Percentage =${percentage}%, Grad "${grad}"`;

    }else{
        res = `Please Inter valid numbers , Or Valid Mark less than or equal 100`;
    }

    p.innerHTML = res;
});
