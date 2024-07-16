# Project Title
.
[Live Demo](https://cap-islam-gohar.github.io/Js-Assignment-1--Exercises/)


# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

# Installation
1. Clone the repository:
```bash
 git clone https://github.com/Cap-Islam-Gohar/Js-Assignment-1--Exercises.git
```

# Install dependencies:
```bash
 npm install
 ```

## Usage
run the project, use the following command:
```bash
npm run dev
```
1.To make new Question open **/index.html** and add in **main section** :
``` html
  <!-- question number 1 -->
  <div x-question>
      //you question one description as html code goes here 
  </div>

  <!-- question number 2 -->
  <div x-question>
      //you question two description as html code goes here 
  </div>
  ```

Example

> /index.html

``` html
<main>

  <!-- question number 1 -->
  <div x-question>
    <h2 class="md:font-bold">
      Write a program that allow to user enter number then print it:
    </h2>
    <div class="text-xs md:text-sm mt-2">
      <h3 class="text-red-400">Example :</h3>
      <div class="px-4">
        <p>Input : 5</p>
        <p class="text-green-400">Output : 5</p>
      </div>
    </div>
  </div>
  <!-- end question number 1 -->

  <!-- question number 2 -->
  <div x-question>
    <h2 class="md:font-bold">
      Write a program to create Simple Calculator.
    </h2>
  </div>

</main>
```
2. make new folder for each question:

> public/questions/1
> public/questions/2

 becuase every question must have folder with its number in **public/questions**
3. every question folder must have two files **index.html** and **script.js** like **/public/questions/1/index.html** and **/public/questions/1/script.js**
4. write only the code you want to show in index.html and script.js 

```html
// public/questions/1/index.html

<div class="grid grid-flow-row gap-4">
  <!--form -->
  <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
    <div>
      <label for="number" class="block text-sm font-medium leading-6 text-yellow-200">Enter a Number</label>
      <input type="text" name="number" id="number" placeholder="Number" class="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-800 sm:text-sm sm:leading-6" />
    </div>
    <div class="flex justify-start items-end px-1">
      <button type="submit" class="rounded-md w-full bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Submit</button>
	  </div>
  </div>
	<!-- form output-->
	<div>
    <span class="font-semibold text-green-300">Output :</span>
    <p class="text-gray-100"></p> 
	</div> 
</div>
```

```javascript
// public/questions/1/script.js

const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");
let res = "";

button.addEventListener("click", () => {

    let number = +input.value

    if(!isNaN(number)){
        res = `Your number is ${number}`;
    }else{
        res = `Please Enter valid number`;
    }

    p.innerHTML = res;
});
```


## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
