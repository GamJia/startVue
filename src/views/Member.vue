<template>
    <div class="member_wrap">
        <div class="member_container">
            <div class="member_contents">
                <div class="member_tab">
                    <div class="profile_banner">
                        <div class="profile_image">
                            <img src="../assets/member.png">
                        </div>

                        <h4>Profile Sample</h4>

                        <div class="nav_tabs">
                            <div class="nav_item" @click="setActive('tab-1')" :class="{'active':isActive('tab-1')}">
                                회원 정보
                            </div>
                            <div class="nav_item" @click="setActive('tab-2')" :class="{'active':isActive('tab-2')}">
                                비밀번호 변경
                            </div>
                            <div class="nav_item" @click="setActive('tab-3')" :class="{'active':isActive('tab-3')}">
                                주문 내역
                            </div>
                        </div>
                    </div>            
                </div>
                <div class="member_profile">
                    <div class="tab_content" v-show="isActive('tab-1')">
                        <h2>회원 정보</h2>
                        <div class="member_info">
                            <div class="info_item">
                                <table>
                                    <tr>
                                        <td>
                                            이름
                                        </td>
                                        <td class="content">
                                            sample
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            사용자 아이디
                                        </td>
                                        <td class="content">
                                            sample
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            전화번호
                                        </td>
                                        <td class="content">
                                            sample
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            생년월일
                                        </td>
                                        <td class="content">
                                            sample
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            성별
                                        </td>
                                        <td class="content">
                                            sample
                                        </td>
                                    </tr>
                                </table>                               
                            </div>
                            <div class="update_button">
                                <button type="submit">업데이트</button>
                                <button type="reset">취소</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab_content" v-show="isActive('tab-2')">
                        <h2>비밀번호 변경</h2>
                        <div class="member_info">
                            <div class="inifo_item">
                                <table>
                                      <tr>
                                        <td>
                                            비밀번호
                                        </td>
                                        <td class="content2">
                                            <input type="text" width="100">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            새 비밀번호
                                        </td>
                                        <td class="content2">
                                            <input type="text" width="100">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            비밀번호 확인
                                        </td>
                                        <td class="content2">
                                            <input type="text" width="100">
                                        </td>
                                    </tr>                                   
                                </table>
                            </div>
                            <div class="update_button">
                                <button type="submit">업데이트</button>
                                <button type="reset">취소</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab_content" v-show="isActive('tab-3')">
                        <h2>주문 내역</h2>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"Member",
    data :()=>({
        activeTab:'tab-1'
    }),
    methods:{
        setActive(tab){
            this.activeTab=tab;
        },
        isActive(tab){
            return this.activeTab===tab;
        }
    }
};
</script>


<style lang="scss" scoped>
.member_wrap {    
    
    .member_container{
        width:1020px;        
        margin: 100px auto; 
        display:flex;
        justify-content: center; 
        border: 1px solid #ddd;              
        
        .member_contents{                  
            display:flex;
            flex-direction: row;
            height:435px;

            .member_tab{   
                padding:35px 0 50px 0;                     
                width:220px;

                .profile_banner{                    
                    .profile_image{
                        display:flex;
                        justify-content: center;
                        img{
                            height: 100px;
                            width: 100px;
                        }                        
                    }

                    h4{
                        text-align: center;
                    }
                    
                    .nav_tabs{
                        display:flex;
                        flex-direction: column;

                        .nav_item{
                            padding: 15px 20px;
                            border-bottom: 1px solid #ddd;
                            color:#666;
                            cursor: pointer;

                            &:hover, &:focus, &.active{
                                background: #5363ff;                                        
                                color: #fff;
                                border-color: #5363ff;
                            }
                        }
                        
                    }
                }

            }

            .member_profile{                 
                border-left: 1px solid #ddd;
                width:800px;
                   
                .tab_content{                    
                    padding:50px;

                    h2{
                        color:#666;
                        margin:0;
                    }

                    .member_info{
                        padding:20px;

                        table{
                            border: 1px solid #ddd;
                            border-collapse: collapse; 
                            margin:0 auto;

                            td{
                                border: 1px solid #ddd;
                                background:#f2f2f2;
                                text-align:center;
                                padding:10px;
                                width:100px;                               
                            }

                            .content{
                                background:white;
                                width:500px;
                                color:#666;
                                font-weight:400;
                            }

                            .content2{
                                background:white;
                                width:500px;
                                padding:0 10px;
                                color:#996;
                                font-weight:400;
                                
                                input{
                                    height:30px;
                                    border:none;
                                    float:left;
                                    line-height: 10px;
                                    vertical-align: middle; 
                                    
                                    &:focus{
                                        outline:none;
                                    }
                                }
                            }
                        }

                        .update_button{
                            margin: 20px 12px;                            

                            button{
                                padding:8px;
                                width:80px;
                                margin-right: 4px;
                                border:none;
                                border-radius:4px;
                                cursor: pointer;

                                &:hover{
                                    background: #5363ff;                                        
                                    color: #fff;                                
                                }
                            }
                        }
                    }
                } 
            }
        }
    }
}



</style>