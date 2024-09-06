import validateEmail from "./emailValidation";
import validatePassword from "./passwordValidation";
import validateZipcode from "./zipcodeValidation";

function validateSumbision() {
  const submitButton = document.getElementById('submit_form');
  const email = document.getElementById('email');
  const zipcode = document.getElementById('zipcode');
  const password1 = document.getElementById('password');
  const password2 = document.getElementById('password_confirmation');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
  })

  submitButton.addEventListener('click', () => {
    if(email.validity.valid && zipcode.validity.valid && password1.validity.valid && (password1.value == password2.value)) {
      alert('FORM  SUBMITTED SUCCESSFULY');
    } else {
      alert('FORM DID NOT SUBMIT. MAKE SURE YOU HAVE CORRECTLY FILLED IN ALL THE FIELDS');
    }
  })
}

export default validateSumbision;