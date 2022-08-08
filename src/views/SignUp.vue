<template>
    <div class="register_wrap">
        <div class="register_container">
            <div class="register_contents">
                <div class="register_banner">
                    <h1><a href="/"><img src="../assets/start-g.png"></a></h1>                    
                </div>                
                <h4>stArt에 오신것을 환영합니다<br>계정 정보를 입력해주세요</h4>                
                <form class="register_form" @submit.prevent="handleSignUp">
                    <ul>
                        <li>
                            <input type="text" class="register_id" v-model="memberEntity.name" placeholder="이름 입력" width="100" v-validate="'required'" name="name">
                            <div class="register_role">
                                <select v-model="memberEntity.memberRole">  
                                    <option value="" disabled>권한 설정</option>                                  
                                    <option value="ROLE_MEMBER" >일반 유저</option>
                                    <option value="ROLE_MANAGER">매니저</option>
                                    <option value="ROLE_ADMIN">관리자</option>                                    
                                </select>                                
                            </div>
                        </li>
                        <h6 v-if="errors.has('name')">이름을 입력해주세요</h6>      
                                       
                        <li>
                            <input type="text" class="register_identity" ref="identity" v-model="memberEntity.identity" placeholder="아이디 입력" width="100" v-validate="'required|min:3|max:20'" name="identity">
                            <div class="register_test"><button @click="identityCheck">중복 확인</button></div>
                        </li>  
                        <h6 v-if="errors.has('identity')">아이디는 3글자 이상 입력해주세요</h6>                      
                        <li>
                            <input type="password" class="register_password" v-model="memberEntity.password" placeholder="비밀번호 (8-12자 영문자+숫자+특수문자)" width="100" v-validate="{ required: true, min: 8, max:12, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/ }" name="password" ref="password">
                        </li>
                        <h6 v-if="errors.has('password')">8-12자 영문자+숫자+특수문자 조합으로 입력해주세요</h6>      
                        <li>
                            <input type="password" class="register_checkPassword" v-model="memberEntity.checkPassword" placeholder="비밀번호 확인" width="100" v-validate="'required|confirmed:password'" name="checkPassword" data-vv-as="password">
                        </li>
                        <h6 v-if="errors.has('checkPassword')">비밀번호가 다릅니다</h6>      
                        <li>
                            <input type="text" class="register_number" v-model="memberEntity.phone" placeholder="전화번호 입력" width="100" v-validate="{ required: true, regex:/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/ }" name="phone">
                        </li>
                        <h6 v-if="errors.has('phone')">전화번호를 입력해주세요</h6> 
                        <li>
                            <input type="text" class="register_birth" v-model="memberEntity.birth" placeholder="YYYYMMDD" width="100" v-validate="{required: true,date_format:'yyyyMMdd'}" name="birth">
                            <div class="register_gender">
                                <input type="radio" id="male" v-model="memberEntity.gender" autocomplete="off" value="MALE" checked>                                   
                                <label for="male">남자</label> 
                                 
                                <input type="radio" id="female" v-model="memberEntity.gender" value="FEMALE">                                    
                                <label for="female">여자</label>    
                                
                            </div>
                        </li>
                        <h6 v-if="errors.has('birth')">생년월일을 입력해주세요</h6> 
                    </ul>
                   
                    <div class="button_wrap">
                        <button type="submit">Sign Up</button>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import MemberEntity from '../models/memberEntity';
import api from '../services/api';
export default {
    name:"Register",
    data(){
       return{
            memberEntity: new MemberEntity('','','','','','','',''),
            submitted: false,
            successful: false,
            message: '',           
       };
    },
    computed: {
        loggedIn() {
            return this.$store.state.member.status.loggedIn;
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/profile').catch(err => { return err });
        }
    },
    methods: {
        identityCheck(){
            api.post("/member/identity/check?identity="+this.memberEntity.identity).then(function(response){
                if(response.data.data==false){
                    alert("사용 가능한 아이디 입니다")
                }
                else if(response.data.data==true){
                    alert("사용 불가능한 아이디 입니다")
                }
            
            })
            .catch(function(error){
            console.log(response);
            });
        },

        handleSignUp() {
            this.message = '';
            this.submitted = true;
           
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('member/signUp', this.memberEntity).then(
                        data => {
                            this.message = data.message;
                            this.successful = true;
                            this.$router.push('/signupcheck');
                        },
                        error => {
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();

                            this.successful = false;
                            
                        }
                    );
                   
                }
            });
        },

    }
};
</script>

<style lang="scss" scoped>
.register_wrap {
    .register_container{
        width:1020px;
        height: 100%;
        margin: 0 auto;

        .register_contents{
            padding: 92px 0 145px 0;

            .register_banner{
                margin: 11px auto 0;
                text-align: center;
                height: 40px;
                width: 120px;
                h1{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            
            h4{
                color:#444; 
                text-align: center;
                font-weight:400;
            }

            .register_form{
                width: 510px;
                margin: 0 auto;

                ul{
                    margin-top: 18px;
                    padding:0 20px;

                    h6{
                        color:red;
                        margin:5px 0 0 15px;
                    }
                    
                    li{
                        margin-top: 10px;
                        list-style-type:none;
                        border:none;
                        border-bottom: 1px solid #dddddd;                            
                        outline: none;

                        input{
                            font-size:13px; 
                            padding: 0 20px;
                            width: 430px;
                            height: 60px;
                            line-height: 60px;
                            vertical-align: middle;   
                            border:none;                         
                            outline: none;                            
                            
                        }

                        input[type="password"] {
                            font: small-caption;
                        }

                        .register_role{
                            float:right;
                            position: relative;
                            float:right;
                            top:10px;
                            margin:0 auto;                            
                              
                            select{
                                border-radius:5px; 
                                border: 1px solid #ddd;
                                padding: 10px 20px;
                                color: #444;
                                font-size:14px;                                

                                &:hover,&:focus{
                                    outline:none;        
                                    border: 1px solid #5a73f1;
                                    background-origin: border-box;   
                                    display:inline-block;     
                                }
                                
                            }

                        }

                        .register_test{
                            float:right;
                            position: relative;
                            float:right;                                                          
                            top:10px;
                            //border-radius:12px;       
                            margin:0 auto; 

                            button{
                                border-radius:12px;    
                                border:1px #ddd solid;
                                padding:8px 10px;
                                width:90px;
                                line-height: 1.5;
                                margin-right: 4px;
                                border-radius:4px;
                                cursor: pointer;
                                background:white;
                                font-size:14px;

                            &:hover,&.active{
                                transition: 0.3s ease-in-out all;
                                background: #5a73f1;  
                                border:1px #5a73f1 solid;                                   
                                color: #fff;                                
                            }}
                            
                        }

                        .register_gender{
                            float:right;
                            position: relative;
                            float:right;                                                          
                            top:20px;
                            border-radius:12px;       
                            margin:0 auto;                             

                            input{                                    
                                box-sizing: border-box;
                                padding: 0;
                                display: none;                           
                            }

                            input[type="radio"]:checked+label{
                                background: #5a73f1;                                        
                                color: #fff;
                                border-color: #5a73f1;
                            }                                

                            label{    
                                                         
                                font-weight:500;                     
                                background: #fff;
                                border: 1px solid #ddd;
                                padding: 10px 20px;
                                border-radius: 5px;
                                cursor: pointer;
                                color: #444;
                                transition: box-shadow 400ms ease;

                                &:hover, &:focus, &.active{
                                    transition: 0.3s ease-in-out all;
                                    background: #5a73f1;                                        
                                    color: #fff;
                                    border-color: #5a73f1;
                                }
                            }

                        }

                        &:hover{   
                            border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                            background-origin: border-box;   
                        }
                        
                    }

                    &:first-child,&:last-child{
                        input{
                            width:280px;
                        }
                    } 
                    
                   
                }

                .button_wrap{
                    
                    margin-top:32px;
                    display: flex;
                    overflow: hidden;
                    padding:0 20px;

                    button{        
                        cursor:pointer;  
                        width:100%;   
                        border:0;           
                        border-radius: 30px;
                        font-size: 20px;
                        line-height: 60px;
                        height: 60px;
                        background: linear-gradient(90deg, #5363ff, #8eeb97);
                        color: #ffffff;
                        display: inline-block;
                        flex: 1;
                        font-weight: bold;
                        text-align: center;
                    }
                }

            }
        }
    }
}


</style>
