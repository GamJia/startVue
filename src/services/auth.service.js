import api from "./api";
import TokenService from "./token.service";

class AuthService {   
    async login({identity,password}){
      const response = await api.post("/member/login", {
        identity,
        password
      });
      if (response) {
        TokenService.setMemberEntity(response.data.data);        
      }
      
      return response.data;
    }
    logout() {
      TokenService.removeMemberEntity();
    }
    signUp({identity,password,checkPassword,name,phone,birth,gender,memberRole}) {
      return api.post("/member/signUp", {
        identity, 
        password,  
        checkPassword,
        name,      
        phone,
        birth,
        gender,
        memberRole,            
      });
    }
  }
  export default new AuthService();
