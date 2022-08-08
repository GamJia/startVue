<template>
    <div class="login_wrap">        
        <div class="login_container">
            <div class="login_contents">
                <div class="login_banner">
                    <h1><a href="/"><img src="../assets/check.png"></a></h1>                    
                </div>                
                <div class="login_description">
                    <h2>stArt 회원가입이 완료 되었습니다</h2>
                    <h4>로그인 후 다양한 서비스를 이용해보세요</h4>
                </div>
                <div class="login_button">
                    <router-link to="/login" tag="button">로그인 화면으로</router-link>
                </div>              
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods:{

    },
 
};
</script>


<style lang="scss" scoped>
.login_wrap {
    .login_container{
        width:1020px;
        height: 100%;
        margin: 0 auto;

        .login_contents{
            padding: 52px 0 145px 0;

            .login_banner{
                margin: 11px auto 0;
                text-align: center;
                height: 100px;
                width: 180px;
                h1{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

            }
            
            .login_description{
                padding-top:70px;
                color:#666666; 
                text-align: center;

                h2{
                    margin-bottom:9px;
                }
                h4{
                    margin-top:0;
                    font-weight:400;
                }
            }

            .login_button{
                display: flex;
                justify-content: center;
                padding-top:30px;
                button{
                    border:1px #ddd solid;
                    padding:8px 14px;
                    line-height: 1.5;
                    margin-right: 4px;
                    //border:none;
                    border-radius:4px;
                    cursor: pointer;

                    &:hover,&.active{
                        transition: 0.3s ease-in-out all;
                        background: #5a73f1; 
                        border:1px #5a73f1 solid;                                       
                        color: #fff;                                                       
                    }
                }
            }
         
        }
    }
}



</style>