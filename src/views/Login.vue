<template>
    <div class="login_wrap">
        <div class="login_container">
            <div class="login_contents">
                <div class="login_banner">
                    <h1><a href="/"><img src="../assets/start-c.png"></a></h1>                    
                </div>                
                <h4>회원 서비스 이용을 위해 로그인 해주세요</h4>
                <form class="login_form" @submit.prevent="handleLogin">
                    <ul>
                        <li>
                            <input type="text" class="login_id" v-model="memberEntity.identity" placeholder="아이디 입력" width="100">
                        </li>
                        <li>
                            <input type="password" class="login_password" v-model="memberEntity.password" placeholder="비밀번호 입력" width="100" />
                        </li>
                    </ul>

                    <div class="login_footer">
                        <a href="#" class="login_search">아이디 찾기 / 비밀번호 재설정</a>
                        <a href="signup" class="register">회원가입</a>
                    </div>

                    <div class="button_wrap">
                        <button type="submit">Login</button>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import MemberEntity from '../models/memberEntity';

export default {
    name:"Login",
    methods:{

    },
    data(){
        return{
            memberEntity: new MemberEntity(this.identity, this.password),
            loading: false,
            message: ''
        }
    },

    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
    },
    created() {
        if (this.loggedIn) {
        this.$router.push('/');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                this.loading = false;
                return;
                }
                if (this.memberEntity.identity && this.memberEntity.password) {
                this.$store.dispatch('auth/login', this.memberEntity).then(
                    () => {
                        //this.$router.push('/login');
                    },
                    error => {
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    }
                );
            }
        });
        }
    }
  
};
</script>


<style lang="scss" scoped>
.login_wrap {
    .login_container{
        width:1020px;
        height: 100%;
        margin: 0 auto;

        .login_contents{
            padding: 92px 0 145px 0;

            .login_banner{
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
                color:#666666; 
                text-align: center;
                font-weight:400;
            }

            .login_form{
                width: 510px;
                margin: 0 auto;

                ul{
                    margin-top: 18px;
                    padding:0 20px;
                    
                    li{
                        margin-top: 18px;
                        list-style-type:none;
                        
                        input[type="password"] {
                            font: small-caption;
                        }

                        input{
                            padding: 0 20px;
                            width: 430px;
                            height: 60px;
                            line-height: 60px;
                            vertical-align: middle;
                            border-radius: 0 0 5px 5px;
                            border: 1px solid #dddddd; 
                            transition: 0.5s ease-in-out all;

                                                       

                            &:focus{                
                                outline:none;        
                                border: 1px solid transparent;
                                background-origin: border-box;   
                                display:inline-block;     
                                background: linear-gradient(#fff 0 0) padding-box,linear-gradient(to bottom,#5363ff, #8eeb97)border-box;
                            }
                        }
                        
                    }

                    li:first-child input{
                        border-bottom: 0;
                        border-radius: 5px 5px 0 0;
                    }

                    li:last-child {
                        margin-top: 0;

                    }
                    
                }

                .login_footer{
                    margin-top:27px;  
                    font-size:13px;
                    padding:0 20px;                    
                    
                    a{
                        color:#666666; 
                    }                             
                    
                    .register{
                        float:right;
                    }
                }

                .button_wrap{
                    
                    margin-top:32px;
                    display: flex;
                    overflow: hidden;
                    padding:0 20px;

                    button{     
                        cursor: pointer;     
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