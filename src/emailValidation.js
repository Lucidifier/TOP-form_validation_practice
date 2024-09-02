function validateEmail() {
  console.log('validateEmail');
  const email = document.getElementById('email');
  const emailError = document.querySelector('#email + span.input_error');

  function showEmailError() {
    console.log('invalid');
    if(email.validity.valueMissing) {
      emailError.textContent = 'Please enter an email';
    } else if(email.validity.typeMismatch) {
      emailError.textContent = 'Please enter a valid email';
    }
    emailError.classList.remove('input_error_hidden');
    emailError.classList.add('input_error_active');
  }

  email.addEventListener('input', (event) => {
    if(email.validity.valid) {
      console.log('valid');
      emailError.textContent = '';
      emailError.classList.remove('input_error_active');
      emailError.classList.add('input_error_hidden');
    } else {
      showEmailError();
    }
  })
}

export default validateEmail;