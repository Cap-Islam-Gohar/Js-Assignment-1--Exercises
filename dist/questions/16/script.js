
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = "";
let vowels = ["a", "e", "i", "o", "u"];
let type = "";

button.addEventListener("click", () => {

    let character = input.value;

    if(character.length === 1 && character.match(/[a-zA-Z]/i)){

        let smallChart = character.toLowerCase();

        switch (vowels.indexOf(smallChart)) {
            case -1:
                type = "Consonant";
                break;        
            default:
                type = "Vowel";
                break;
        }

        res = `character "${character}" is ${type}`;

    }else{
        res = `Please Enter valid character`;
    }

    p.innerHTML = res;
});



