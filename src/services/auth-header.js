export default function authHeader() {
    let memberEntity = JSON.parse(localStorage.getItem('memberEntity'));
    if (memberEntity && memberEntity.accessToken) {
      return { Authorization: 'Bearer ' + memberEntity.accessToken };
    } else {
      return {};
    }
  }
