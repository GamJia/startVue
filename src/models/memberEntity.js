export default class MemberEntity{
    constructor(identity,password,checkPassword,name,phone,birth,gender,memberRole){
        this.identity=identity;
        this.password=password;
        this.checkPassword=checkPassword;
        this.name=name;
        this.phone=phone;       
        this.birth=birth;
        this.gender=gender;
        this.memberRole=memberRole;
    }
}
