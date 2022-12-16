const input = document.querySelector('.login-input'); 
const input2 = document.querySelector('.login-input2');
const button = document.querySelector('.login-button'); 
const form = document.querySelector('.login-form'); 

function validationInput (event) {
    if(event.target.value.length >= 3){
        button.removeAttribute('disabled'); 
        return; 
    } 
    button.setAttribute('disabled', ''); 
}

const submitForm = (event) => {
    event.preventDefault();
  
    localStorage.setItem('player1', input.value);
    localStorage.setItem('player2', input2.value);
    window.location = './battlePage.html';
  }
  
  input.addEventListener('input', validationInput); 
  input2.addEventListener('input', validationInput);
  form.addEventListener('submit', submitForm); 

