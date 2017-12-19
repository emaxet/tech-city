import axios from 'axios';

export function login(payload) {
  return dispatch => {
    return axios.post('/session/login', payload).then(res => {
      console.log(res);
    });
  }
}