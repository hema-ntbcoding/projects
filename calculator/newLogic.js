const totalvalue = document.getElementById('totalvalue')
const numberlist = document.getElementById('numberlist')
const valuebox = document.getElementById('valuebox')

let emptyErrorMessage = "Enter a Valid Number";

// function addNewNumber(){
//     newNumber = verifyInputBoxValue(valuebox.value);
//     emptyInputBox();
//     if(typeof(newNumber) === "number"){
//         let lastResult = +totalvalue.innerText;
//         let finalResult = lastResult + newNumber;
//         updateTotalValue(finalResult);
//         insertNewOperationRow(`${lastResult} + ${newNumber} = ${finalResult}`)
//     }
// }

function addNewNumber(){
    newNumber = verifyInputBoxValue(valuebox.value);
    emptyInputBox();
    if(typeof(newNumber) === "number"){
        let result = calculateValues(newNumber, 'add');
        updateTotalValue(result.finalResult);
        insertNewOperationRow(result.row)
    }
}

function subtractNewNumber(){
    newNumber = verifyInputBoxValue(valuebox.value);
    emptyInputBox();
    if(typeof(newNumber) === "number"){
        let result = calculateValues(newNumber, 'sub');
        updateTotalValue(result.finalResult);
        insertNewOperationRow(result.row)
    }
}

function multiplyNewNumber(){
    newNumber = verifyInputBoxValue(valuebox.value);
    emptyInputBox();
    if(typeof(newNumber) === "number"){
        let result = calculateValues(newNumber, 'mul');
        updateTotalValue(result.finalResult);
        insertNewOperationRow(result.row)
    }
}

function divideNewNumber(){
    newNumber = verifyInputBoxValue(valuebox.value);
    emptyInputBox();
    if(typeof(newNumber) === "number"){
        let result = calculateValues(newNumber, 'div');
        updateTotalValue(result.finalResult);
        insertNewOperationRow(result.row)
    }
}

function calculateValues(newNumber, operation){
    let lastResult = +totalvalue.innerText;
    let finalResult = 0;
    let row = ``;
    switch(operation){
        case 'add':
            finalResult = lastResult + newNumber;
            row = `${lastResult} + ${newNumber} = ${finalResult}`
            break;
        case 'sub':
            finalResult = lastResult - newNumber;
            row = `${lastResult} - ${newNumber} = ${finalResult}`
            break;
        case 'mul':
            finalResult = lastResult * newNumber;
            row = `${lastResult} x ${newNumber} = ${finalResult}`
            break;
        case 'div':
            finalResult = lastResult / newNumber;
            row = `${lastResult} ÷ ${newNumber} = ${finalResult}`
            break;
    }
    return { lastResult, finalResult, row }
}

function updateTotalValue(newValue){
    totalvalue.innerText = newValue;
}

function insertNewOperationRow(value){
    let newdiv = document.createElement('div');
    newdiv.innerText = value;
    numberlist.appendChild(newdiv);
}

function emptyInputBox(){
    valuebox.value = '';
}

function verifyInputBoxValue(value){
    if(value !== ""){
        return +value;
    }
    else{
        alert(emptyErrorMessage)
    }
}