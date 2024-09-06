import validateEmail from "./emailValidation";
import validatePassword from "./passwordValidation";
import validateZipcode from "./zipcodeValidation";

function validateForm() {
  console.log('validateForm');
  validateEmail();
  validateZipcode();
  validatePassword();
}

export default validateForm;