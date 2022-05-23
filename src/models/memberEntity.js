export default class MemberEntity{
    constructor(name,identity,password,checkPassword,phone,birth,gender){
        this.name=name;
        this.identity=identity;
        this.password=password;
        this.checkPassword=checkPassword;
        this.phone=phone;
        this.birth=birth;
        this.gender=gender;
    }
}