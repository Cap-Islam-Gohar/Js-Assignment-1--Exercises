
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

let res = "";
let vowel = ["a", "e", "i", "o", "u"];

button.addEventListener("click", () => {

    let character = input.value;

    if(character.length === 1 && character.match(/[a-z]/i)){

        if(vowel.indexOf(character.toLowerCase()) !== -1){

            res = `character "${character}" is Vowel`;
    
        }else{
            res = `character "${character}" is Consonant`;
        }   

    }else{
        res = `Please Enter valid character`;
    }

    p.innerHTML = res;
});



