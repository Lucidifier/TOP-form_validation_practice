function validatePassword() {
  console.log('validatePassword');
  let passwordOneValue = '';
  let passwordTwoValue = '';
  const password1 = document.getElementById('password');
  const password1Error = document.querySelector('#password + span.input_error');
  const password2 = document.getElementById('password_confirmation');
  const password2Error = document.querySelector('#password_confirmation + span.input_error');

  function showPasswordOneError() {
    console.log('passwordOneError');
    if(password1.validity.valueMissing) {
      password1Error.textContent = 'Please enter a password';
    } else if(password1.validity.patternMismatch) {
      password1Error.textContent = 'Password must be between 4-8 characters, contain only lowercase letters, and at least one digit';
    }
    password1Error.classList.remove('input_error_hidden');
    password1Error.classList.add('input_error_active');
  }

  password1.addEventListener('input', (event) => {
    password1.classList.add('input_check');
    if(password1.validity.valid) {
      console.log('valid passwordOne');
      password1Error.textContent = '';
      password1Error.classList.remove('input_error_active');
      password1Error.classList.add('input_error_hidden');
    } else {
      showPasswordOneError();
    }
  })

  password1.addEventListener('blur', () => {
    if(password1.validity.valid) {
      passwordOneValue = password1.value;
      console.log(passwordOneValue);
    }
  })

  password2.addEventListener('input', (event) => {
    passwordTwoValue = password2.value;
    if(passwordOneValue != passwordTwoValue) {
      password2.classList.remove('input_check_valid');
      password2.classList.add('input_check_invalid');
      console.log('invalid passwordTwo');
      password2Error.textContent = 'Passwords must match';
      password2Error.classList.remove('input_error_hidden');
      password2Error.classList.add('input_error_active');
    } else {
      console.log('valid passwordTwo');
      password2.classList.remove('input_check_invalid');
      password2.classList.add('input_check_valid');
      password2Error.textContent = '';
      password2Error.classList.remove('input_error_active');
      password2Error.classList.add('input_error_hidden');
    }
  })

  password1.addEventListener('blur', () => {
    if(password2.value != password1.value) {
      console.log('invalid passwordTwo');
      password2Error.textContent = 'Passwords must match';
      password2Error.classList.remove('input_error_hidden');
      password2Error.classList.add('input_error_active');
    }
  })
}

export default validatePassword;
