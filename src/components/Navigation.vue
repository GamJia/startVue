<template>
     <Header>
        <div class="top_util">
            <ul class="menu_list">
                <li class="login" v-if="!loggedIn"><router-link to="/login">로그인</router-link></li>
                <li class="logout" v-if="loggedIn" ><a href="#" @click.prevent="logOut">로그아웃</a></li>
                <li class="join" v-if="!loggedIn"><router-link to="/signUp">회원가입</router-link></li>
                <li class="join" v-if="loggedIn"><router-link to="/profile">마이페이지</router-link></li>
                <li class="customer"><router-link to="#">고객센터</router-link></li>
            </ul>
        </div>

        <div class="header_inner">
            <h1><router-link to="/"><img src="../assets/start-c.png"></router-link></h1>
                
            <ul class="mymenu_area">
                <li class="StartUp"><router-link to="#">stArt-up</router-link></li>
                <li class="partner"><router-link to="#">Partner</router-link></li>           
                <li class="about"><router-link to="#">About stArt</router-link></li>
                <li class="product"><router-link to="/product" >Product</router-link></li>   
                <li class="event"><router-link to="#">Event</router-link></li>
                
            </ul>
        </div>    
        
    </Header>
</template>

<script>
export default {
    name:'Navigation',
    computed: {
        loggedIn() {
            return this.$store.state.member.status.loggedIn;
        }
    },
    methods: {
    logOut() {
      this.$store.dispatch('member/logout');
      this.$router.push('/login').catch(err => { return err });
    }
  },

}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color:black;
}

Header{
    width:1020px;
    margin:0 auto;

    .top_util{
        position: relative;
        width: 100%;
        height: 30px;
        letter-spacing: -.005em;

        .menu_list{
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;

            li{
                float: left;
                padding: 0 9px 0 10px;
                line-height: 30px;
                white-space: nowrap;
                list-style-type : none; 
                
                *{
                    font-size: 12px;
                    color: #333;
                    white-space: nowrap;
                }
            }
        }
    }

    .header_inner{
        width:100%;  
        height: 70px;  

        h1{
            img{
                float:left;
                display: block;
                width: 150px;
                height: 50px;
            }
        }

        .mymenu_area{
            float: right;
            margin-top: 20px;

            li{
                float:right;
                display: block;
                color: #333333;
                padding: 0 13px;
                font-size: 20px;
                font-weight:bold;

                a{
                    color:#333333;
                }

                a:hover{
                    transition: 0.2s ease-in-out all;
                    color: #5a73f1;
                }
            }
        }
    }
}




</style>
