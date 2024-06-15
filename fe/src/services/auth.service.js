import axios from 'axios';
import authHeader from "./auth-header";

// const API_URL = 'http://172.31.227.149:3001/';
const API_URL = import.meta.env.VITE_API_URL;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth/signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.result.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.result));
        }

        return response.data.result;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/signup', {
      name: user.name,
      username: user.username,
      password: user.password
    }).then(response => {
      if (response.data.result.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data.result));
      }

      return response.data.result;
    });
  }

  me() {
    return axios.get(API_URL + 'auth/me', { headers: authHeader() });
  }
}

export default new AuthService();