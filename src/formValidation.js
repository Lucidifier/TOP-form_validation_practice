import validateEmail from "./emailValidation";
import validatePassword from "./passwordValidation";
import validateZipcode from "./zipcodeValidation";
import validateSumbision from "./submitValidation";

function validateForm() {
  console.log('validateForm');
  validateEmail();
  validateZipcode();
  validatePassword();
  validateSumbision();
}

export default validateForm;