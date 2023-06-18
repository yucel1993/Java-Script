const input = document.getElementById('cal');
const buttons =document.querySelectorAll(".content")    

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const currentInput = input.value;
    if(buttonText === "AC"){
        input.value = "";
    }else if(buttonText === "="){
        try{
            const result = eval(currentInput);
            input.value = result;

        }catch(error){
            input.value = error;
        }
    }else if(buttonText === "+"){
        input.value = currentInput + "+";
    }else if(buttonText === "-"){
        input.value = currentInput + "-";
    }else if(buttonText === "*"){
        input.value = currentInput + "*";
    }else if(buttonText === "/"){
        input.value = currentInput + "/";
    }else{
        input.value = currentInput + buttonText;
    }



    });	

})