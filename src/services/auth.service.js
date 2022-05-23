import axios from 'axios';
const API_URL = 'http://localhost:3306/pos/member/';

class AuthService {
    login(memberEntity) {
      return axios
        .post(API_URL + 'login', {
          identity: memberEntity.identity,
          password: memberEntity.identity
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem('memberEntity', JSON.stringify(response.data));
          }
          return response.data;
        });
    }
    logout() {
      localStorage.removeItem('memberEntity');
    }
    signUp(memberEntity) {
      return axios.post(API_URL + 'signUp', {
        identity: memberEntity.identity,       
        password:memberEntity.password,
        checkPassword:memberEntity.checkPassword,
        phone:memberEntity.phone,
        birth:memberEntity.birth,
        gender:memberEntity.gender,       
      });
    }
  }
  export default new AuthService();