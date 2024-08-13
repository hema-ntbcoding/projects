const totalvalue = document.getElementById('totalvalue')
const valuebox = document.getElementById('valuebox')
const addbutton = document.getElementById('addbutton')
const subtraction = document.getElementById('subtraction')
const multiply = document.getElementById('multiply')
const division = document.getElementById('division')
const numberlist = document.getElementById('numberlist')

totalvalue.innerText = 0;

addbutton.addEventListener('click', (e) => {
    let newNumber = +valuebox.value;
    if(valuebox.value !== "" && newNumber >= 0){
        valuebox.value = "";

        let lastResult = +totalvalue.innerText;
        let finalResult = lastResult + newNumber;

        totalvalue.innerText = finalResult;

        let newdiv = document.createElement('div');
        newdiv.innerText = `${lastResult} + ${newNumber} = ${finalResult}`;
        numberlist.appendChild(newdiv);
    }
    else{
        alert('enter a valid number')
    }
})

subtraction.addEventListener('click', (e) => {
    e.preventDefault();
    let number = +valuebox.value
    if(valuebox.value !== "" && number >= 0){
        let totalNumber = +totalvalue.innerText;
        let updatedTotalNumber = totalNumber - number;
        
        valuebox.value = "";
        totalvalue.innerText = updatedTotalNumber;

        let newdiv = document.createElement('div');
        newdiv.innerText = `${totalNumber} - ${number} = ${updatedTotalNumber}`;
        numberlist.appendChild(newdiv);
    }
    else{
        alert('enter a valid number')
    }
})


multiply.addEventListener('click', (e) => {
    e.preventDefault();
    let number = +valuebox.value
    if(valuebox.value !== "" && number >= 0){
        let totalNumber = +totalvalue.innerText;
        let updatedTotalNumber = totalNumber * number;
        
        valuebox.value = "";
        totalvalue.innerText = updatedTotalNumber;

        let newdiv = document.createElement('div');
        newdiv.innerText = `${totalNumber} x ${number} = ${updatedTotalNumber}`;
        numberlist.appendChild(newdiv);
    }
    else{
        alert('enter a valid number')
    }
})


division.addEventListener('click', (e) => {
    e.preventDefault();
    let number = +valuebox.value
    if(valuebox.value !== "" && number >= 0){
        let totalNumber = +totalvalue.innerText;
        let updatedTotalNumber = totalNumber / number;
        
        valuebox.value = "";
        totalvalue.innerText = updatedTotalNumber;

        let newdiv = document.createElement('div');
        newdiv.innerText = `${totalNumber} ÷ ${number} = ${updatedTotalNumber}`;
        numberlist.appendChild(newdiv);
    }
    else{
        alert('enter a valid number')
    }
})