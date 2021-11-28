const buttonElement = document.getElementById('button');
const inputElement = document.getElementById('input');

buttonElement.addEventListener('click', () => {
  inputElement.focus();
});
