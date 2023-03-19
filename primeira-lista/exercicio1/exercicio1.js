function start(){
    let buttonReturnNumber = document.querySelector('#button-return');
    buttonReturnNumber.addEventListener('click', handleButtonClick);
    }

function fromStringToNumber(value) {
    const valueInNumber = Number(value);
}

function handleButtonClick(){
    let inputNumber = document.querySelector('#input-number');
    let numero = String(inputNumber.value);
             
    if (isNaN(numero)){
    return resultado.textContent = 'null';
    }
    if (numero > Number.MAX_SAFE_INTEGER || numero < Number.MIN_SAFE_INTEGER){
    return alert ('erro');
    } else {
    let numeroFix = parseFloat(numero).toFixed(2);
    return resultado.textContent = numeroFix;
}

    
    
}

start();
