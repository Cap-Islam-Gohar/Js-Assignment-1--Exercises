
const calculator = {
    expressions: [],
    result: 0,
    history: [],
    run(){

        const buttons = document.querySelectorAll("button");
        const displayEl = document.getElementById("display");
        this.display(displayEl);

        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                switch (e.target.innerText) {
                    case "=":
                        this.calculate();                        
                        break;
                    case "C":
                        this.clear();
                        break;
                    case "CE":
                        this.clearAll();
                        break;
                    case ">":
                        this.undo();
                        break;
                    default:
                        this.add(e.target.innerText);
                        break;
                }
                this.display(displayEl);
            });
        });
    },
    display(el){
        display.innerHTML = `${this.history?.slice(0, -1).join("<br>")} 
            <hr><br> ${this.expressions.join(" ")}
            <br><b>${this.result}</b>`;
    },
    add (value)  {

        if(this.result > 0){
            if(this.isOperator(value)){
                let result = this.result;
                this.clear();
                this.expressions[0] = result.toString();
            }else{
                this.clear();
            }
        }

        if(this.empty){
            if(!this.isOperator(value)){
                this.expressions.push(value);
            }
        }else{

            if(this.isOperator(this.lastExpression) && this.isOperator(value)){
                this.lastExpression = value;
            }else if (!this.isOperator(this.lastExpression) && !this.isOperator(value)) {
                this.lastExpression+= value;
            }else{
                this.expressions.push(value);
            }            
        }
    },
    calculate () {
        if(!this.isOperator(this.lastExpression) && this.expressions.length > 1){
            this.result = eval(this.expressions.join(" "));
            this.history.push(`${this.expressions.join(" ")} = ${this.result}`)
        }
    },
    clear () {
        this.expressions = [];
        this.result = 0;
    },
    clearAll () {
        this.clear();
        this.history = [];
    },
    undo () {
        this.lastExpression = this.lastExpression?.slice(0, -1);
        if(this.lastExpression?.length === 0){
            this.expressions?.splice(-1);
        }
    },
    isOperator (value) {
        return ["+", "-", "*", "/", "%"].indexOf(value) !== -1;
    },
    get empty () {
        return this.expressions.length === 0;
    },
    get lastExpression () {
        return this.expressions[this.expressions.length-1];
    },
    set lastExpression (value) {
        this.expressions[this.expressions.length-1] = value; 
    }
}

calculator.run();
