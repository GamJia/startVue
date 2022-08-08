<template>
    <Footer>
        <div class="footer_wrap">
            <div class="footer_contents">
                <div class="footer_menu">
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">stArt 멤버십 회원약관</a></li>
                        <li><a href="#">이메일무단수집거부</a></li>
                        <li><a href="#">오시는길</a></li>
                        <li><a href="#">정도경영/파트너사 목소리</a></li>
                        <li><a href="#">개발자에게 말한다</a></li>
                    </ul>
                </div>

                <div class="footer_txt">
                    <p>주소 : 서울특별시 성북구 서경로 124 (정릉동 16-1) | stArt 팀 | 대표전화 : 02-940-7114 | 대표팩스 : 02-919-0345</p>
                    <p>Copyright 2022 stArt. Co. Ltd., ALL Right Reserved.</p>
                </div>
            </div>
                <div class="footer_banner">
                    <h1><a href="/"><img src="../assets/start-g.png"></a></h1>
                </div>

        </div>

        
    </Footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul, ol, li {
    list-style: none;
    padding:0;
}

Footer{
    width: 100%;
    height:200px;
    border-top: 1px solid #e8e8e8;
    background-color: #f2f2f2;

    .footer_wrap{
        width: 960px;
        margin: 0 auto;
        margin-top: 40px;
        position: relative;
        
        .footer_contents{
            left:0;
            float: left;
            width: 790px;
            padding-bottom: 80px;

            .footer_menu{
                width: 800px;
                margin-bottom: 35px;
                *margin-bottom: 20px;
                
                ul{
                    padding:0;
                    li{
                    float: left;
                    font-size: 11px;
                    color: #666;
                    letter-spacing: -0.2px;
                    padding:0 8px 0 0;

                    a{
                        display: block;
                        font-size: 13px;
                        color: #666;
                        font-weight:bold;
                    }
                }
                }
            }
            .footer_txt{
                font-size: 11px;
                color: #666;
                line-height: 20px;    
            }
        }
        .footer_banner{
            position: absolute;
            right: 0;
            top: 10px;
            h1{
                img{
                    width: 120px;
                    height: 40px;
                }
            }
        }
    }
}


</style>