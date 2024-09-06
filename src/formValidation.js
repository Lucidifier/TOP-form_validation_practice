import validateEmail from "./emailValidation";
import validateZipcode from "./zipcodeValidation";

function validateForm() {
  console.log('validateForm');
  validateEmail();
  validateZipcode();
}

export default validateForm;