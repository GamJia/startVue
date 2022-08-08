class TokenService {
  getMemberRefreshToken() {
    const memberEntity = JSON.parse(localStorage.getItem("memberEntity"));
    return memberEntity?.refreshToken;
  }
  getMemberAccessToken() {
    const memberEntity = JSON.parse(localStorage.getItem("memberEntity"));
    return memberEntity?.accessToken;
  }
  updateMemberAccessToken(token) {
    let memberEntity = JSON.parse(localStorage.getItem("memberEntity"));
    memberEntity.accessToken = token;
    localStorage.setItem("memberEntity", JSON.stringify(memberEntity));
  }
  getMemberEntity() {
    return JSON.parse(localStorage.getItem("memberEntity"));
  }
  setMemberEntity(memberEntity) { 
    //console.log(JSON.stringify(memberEntity));
    localStorage.setItem("memberEntity", JSON.stringify(memberEntity));
  }
  removeMemberEntity() {
    localStorage.removeItem("memberEntity");
  }
}
export default new TokenService();
