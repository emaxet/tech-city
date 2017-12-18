import axios from 'axios';

export function userRegistration(payload) {
  return dispatch => {
    return axios.post("http://localhost:3000/session/register", payload)
  }
}

export function doesValueExists(identifier) {
  return dispatch => {
    return axios.get(`http://localhost:3000/session/register`)
  }
}
