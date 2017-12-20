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

    if(!Validator.isLength(data.password, {min:6, max: undefined})) {
      errors.password = 'Password must be at least 6 characters';
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

export function loginValidation(data) {
  return dispatch => {
    let errors = {};

    if(!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
      errors.email = 'Email is required';
    }

    if(Validator.isEmpty(data.password)) {
      errors.password = 'Password is required';
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
}