let result = document.querySelector('input[type="text"]');
let buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;
    switch(value) {
      case '=':
        try {
          result.value = eval(result.value);
        } catch (e) {
          result.value = 'Error';
        }
        break;
      case 'C':
        result.value = '';
        break;
      case 'X':
        result.value += '*';
        break;
      case '/':
        result.value += '/';
        break;
      default:
        result.value += value;
    }
  });
});
