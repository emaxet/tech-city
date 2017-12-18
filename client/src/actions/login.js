import axios from 'axios';

export function login(payload) {
  return dispatch => {
    return axios.post('http://localhost:3000/session/login', payload).then(res => {
      console.log(res);
    });
  }
}