const input = document.getElementById('cal');
const buttons = document.querySelectorAll('.content');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    const currentInput = input.value;

    if (buttonText === 'AC') {
      input.value = '';
    } else if (buttonText === '=') {
      try {
        const result = eval(currentInput);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
    } else if (buttonText === '+') {
      input.value = currentInput + '+';
    } else if (buttonText === '-') {
      input.value = currentInput + '-';
    } else if (buttonText === 'X') {
      input.value = currentInput + '*';
    } else if (buttonText === '÷') {
      input.value = currentInput + '/';
    } else {
      input.value = currentInput + buttonText;
    }
  });
});





















// const input = document.getElementById('cal');
// const buttons = document.querySelectorAll('.content');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const buttonText = button.textContent;
//     const currentInput = input.value;

//     if (buttonText === 'AC') {
//       input.value = '';
//     } else if (buttonText === '=') {
//       try {
//         const result = eval(currentInput);
//         input.value = result;
//       } catch (error) {
//         input.value = 'Error';
//       }
//     } else {
//       input.value = currentInput + buttonText;
//     }
//   });
// });
