function validateZipcode() {
  console.log('validateZipcode');
  const zipcode = document.getElementById('zipcode');
  const zipcodeError = document.querySelector('#zipcode + span.input_error');

  function showZipcodeError() {
    console.log('invalid zipcode');
    if(zipcode.validity.valueMissing) {
      zipcodeError.textContent = 'Please enter a zipcode';
    } else if(zipcode.validity.patternMismatch) {
      zipcodeError.textContent = 'Please use only numbers';
    }
    zipcodeError.classList.remove('input_error_hidden');
    zipcodeError.classList.add('input_error_active');
  }

  zipcode.addEventListener('input', (event) => {
    if(zipcode.validity.valid) {
      console.log('valid zipcode');
      zipcodeError.textContent = '';
      zipcodeError.classList.remove('input_error_active');
      zipcodeError.classList.add('input_error_hidden');
    } else {
      showZipcodeError();
    }
  })
}

export default validateZipcode;