const allTransationsBox = document.getElementById('allTransactions');
const inputDisplay = document.getElementById('display');
const pastInputDisplay = inputDisplay.querySelector('span:nth-child(1)');
const presentOperationSymbolDisplay = inputDisplay.querySelector('span:nth-child(2)');
const presentInputDisplay = inputDisplay.querySelector('span:nth-child(3)');

let operation = "";

function addNumChar(digitStr){
    if(pastInputDisplay.innerText === ""){
        if(digitStr === "."){
            if(!presentInputDisplay.innerText.includes(".")){
                presentInputDisplay.innerText += digitStr;
            }
        }
        else{
            presentInputDisplay.innerText += digitStr;
        }
    }
    else{
        if(presentOperationSymbolDisplay.innerText !== ""){
            if(digitStr === "."){
                if(!presentInputDisplay.innerText.includes(".")){
                    presentInputDisplay.innerText += digitStr;
                }
            }
            else{
                presentInputDisplay.innerText += digitStr;
            }
        }
    }
}

function clearDisplayValue(){
    pastInputDisplay.innerText = "";
    presentOperationSymbolDisplay.innerText = "";
    presentInputDisplay.innerText = "";
}

function add(){
    if(presentInputDisplay.innerText !== "" || pastInputDisplay.innerText !== ""){
        let result = "";
        if(pastInputDisplay.innerText !== ""){
            result = +pastInputDisplay.innerText + +presentInputDisplay.innerText;
        }
        else{
            result = presentInputDisplay.innerText;
        }
        shiftTransactionToLeftBox(`${result}`, "+");
        operation = "+";
    }
}

function subtract(){
    if(presentInputDisplay.innerText !== "" || pastInputDisplay.innerText !== ""){
        let result = "";
        if(pastInputDisplay.innerText !== ""){
            result = +pastInputDisplay.innerText - +presentInputDisplay.innerText;
        }
        else{
            result = presentInputDisplay.innerText;
        }
        shiftTransactionToLeftBox(`${result}`, "-");
        operation = "-";
    }
}

function multiply(){
    let result = "";
    if(presentInputDisplay.innerText !== ""){
        if(pastInputDisplay.innerText !== ""){
            result = +pastInputDisplay.innerText * +presentInputDisplay.innerText;
        }
        else{
            result = presentInputDisplay.innerText;
        }
        shiftTransactionToLeftBox(`${result}`, "x");
    }

    if(pastInputDisplay.innerText !== "" && presentInputDisplay.innerText === ""){
        result = pastInputDisplay.innerText;
        shiftTransactionToLeftBox(`${result}`, "x");
    }
    operation = "*";
}

function divide(){
    let result = "";
    if(presentInputDisplay.innerText !== ""){
        if(pastInputDisplay.innerText !== ""){
            result = +pastInputDisplay.innerText / +presentInputDisplay.innerText;
        }
        else{
            result = presentInputDisplay.innerText;
        }
        shiftTransactionToLeftBox(`${result}`, "÷");
    }

    if(pastInputDisplay.innerText !== "" && presentInputDisplay.innerText === ""){
        result = pastInputDisplay.innerText;
        shiftTransactionToLeftBox(`${result}`, "÷");
    }
    operation = "/";
}

function calculate(){
    if(pastInputDisplay.innerText !== "" && presentInputDisplay.innerText !== ""){
        let newNumber = +presentInputDisplay.innerText;
        let oldResult = +pastInputDisplay.innerText;
        let result = "";
        switch(operation){
            case "+":
                result = oldResult + newNumber;
                insertNewTransaction(`${oldResult} + ${newNumber} = ${result}`)
                shiftTransactionToLeftBox(`${result}`, "=");
                break;
            case "-":
                result = oldResult - newNumber;
                insertNewTransaction(`${oldResult} - ${newNumber} = ${result}`)
                shiftTransactionToLeftBox(`${result}`, "=");
            break;
            case "*":
                result = oldResult * newNumber;
                insertNewTransaction(`${oldResult} x ${newNumber} = ${result}`)
                shiftTransactionToLeftBox(`${result}`, "=");
            break;
            case "/":
                result = oldResult / newNumber;
                insertNewTransaction(`${oldResult} ÷ ${newNumber} = ${result}`)
                shiftTransactionToLeftBox(`${result}`, "=");
            break;
        }
        operation = "";
    }

    if(allTransationsBox.innerHTML !== ""){
        allTransationsBox.style.display = "flex";
    }
}

function shiftTransactionToLeftBox(pastValue, newOperation){
    pastInputDisplay.innerText = pastValue;
    if(newOperation === "="){
        presentOperationSymbolDisplay.innerText = "";
    }
    else{
        presentOperationSymbolDisplay.innerText = newOperation;
    }
    presentInputDisplay.innerText = "";
}

function insertNewTransaction(newTransaction){
    const newDiv = document.createElement('div');
    newDiv.innerText = newTransaction;
    allTransationsBox.appendChild(newDiv);
}

function roundToDecimals(num, decimals=2) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}

function resetCalculator(){
    allTransationsBox.innerHTML = "";
    clearDisplayValue();
}