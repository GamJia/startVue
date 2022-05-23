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
                            <input type="text" class="register_id" v-model="memberEntity.name" placeholder="이름 입력" width="100">
                        </li>
                        <li>
                            <input type="text" class="register_id" v-model="memberEntity.identity" placeholder="아이디 입력" width="100">
                        </li>                        
                        <li>
                            <input type="password" class="register_password" v-model="memberEntity.password" placeholder="비밀번호 (8-12자 영문자+숫자+특수문자)" width="100" >
                        </li>
                        <li>
                            <input type="password" class="register_password_check" v-model="memberEntity.checkPassword" placeholder="비밀번호 확인" width="100" >
                        </li>
                        <li>
                            <input type="text" class="register_number" v-model="memberEntity.phone" placeholder="전화번호 입력" width="100" >
                        </li>
                        <li>
                            <input type="생년월일" class="register_password" v-model="memberEntity.birth" placeholder="YYYYMMDD" width="100" >
                            <div class="register_gender">
                                <input type="radio" id="male" v-model="memberEntity.gender" autocomplete="off" value="남자" checked>                                   
                                <label for="male">남자</label> 
                                 
                                <input type="radio" id="female" v-model="memberEntity.gender" value="여자">                                    
                                <label for="female">여자</label>    
                                
                            </div>
                        </li>

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
export default {
    name:"Register",
    data(){
       return{
            memberEntity: new MemberEntity('','','','','','',''),
            submitted: false,
            successful: false,
            message: ''
       };
    },
    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
    },
    mounted() {
        if (this.loggedIn) {
        this.$router.push('/home');
        }
    },
    methods: {
        handleSignUp() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                this.$store.dispatch('auth/signUp', this.memberEntity).then(
                    data => {
                    this.message = data.message;
                    this.successful = true;
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
        }
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
                    
                    li{
                        margin-top: 18px;
                        list-style-type:none;
                        border:none;
                        border-bottom: 1px solid #dddddd;                            
                        outline: none;

                        input{
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

                        .register_gender{
                            float:right;
                            position: relative;
                            float:right;                                                          
                            top:15px;
                            border-radius:12px;                                

                            input{                                    
                                box-sizing: border-box;
                                padding: 0;
                                display: none;                           
                            }

                            input[type="radio"]:checked+label{
                                background: #5363ff;                                        
                                color: #fff;
                                border-color: #5363ff;
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
                                    transition: 0.5s ease-in-out all;
                                    background: #5363ff;                                        
                                    color: #fff;
                                    border-color: #5363ff;
                                }
                            }

                        }

                        &:hover{   
                            border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                            background-origin: border-box;   
                        }
                        
                    }

                    li:last-child{
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