<template>
    <Header>
        <div class="top_util">
            <ul class="menu_list">
                <li class="login"><a href="login">로그인</a></li>
                <li class="join"><a href="signUp">회원가입</a></li>
                <li class="customer"><a href="#">고객센터</a></li>
            </ul>
        </div>

        <div class="header_inner">
            <h1><a href="/"><img src="../assets/start-c.png"></a></h1>
                
            <ul class="mymenu_area">
                <li class="StartUp"><a href="#">stArt-up</a></li>
                <li class="partner"><a href="member">Partner</a></li>           
                <li class="about"><a href="ProductCreate">About stArt</a></li>
                <li class="product"><a href="#">Product</a></li>   
                <li class="event"><a href="#">Event</a></li>
                
            </ul>
        </div>    
        
    </Header>
</template>

<script>
export default {

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
        border-bottom:1px solid #ddd;  

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

                a:hover{
                    transition: 0.2s ease-in-out all;
                    color: #5363ff;
                }
            }
        }
    }
}





</style>