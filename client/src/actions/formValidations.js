import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function registerValidation(data) {
  return dispatch => {
    let errors = {};

    if(Validator.isEmpty(data.username)) {
      errors.username = 'Username is required';
    }

    if(!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
      errors.email = 'Email is required';
    }

    if(Validator.isEmpty(data.password)) {
      errors.password = 'Password is required';
    }

    if(!Validator.equals(data.password, data.confirmPassword)) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if(Validator.isEmpty(data.confirmPassword)) {
      errors.confirmPassword = 'Comfirm password';
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
}