<template>
    <div class="member_wrap">
        <div class="member_container">
            <div class="member_contents" >
                <div class="member_tab">
                    <div class="profile_banner">
                        <div class="profile_image">
                            <img src="../assets/member.png">
                        </div>
                        <h4 >{{list.name}}님</h4>
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
                            <div class="nav_item" @click="setActive('tab-4')" :class="{'active':isActive('tab-4')}">
                                회원 조회 및 권한 변경
                            </div>
                            <div class="nav_item" @click="setActive('tab-5')" :class="{'active':isActive('tab-5')}">
                                내 구매 목록
                            </div>
                            <div class="nav_item" @click="setActive('tab-6')" :class="{'active':isActive('tab-6')}">
                                모든 구매 목록
                            </div>
                        </div>                        
                    </div>            
                </div>
                <div class="member_profile">
                    <div class="tab_content" v-show="isActive('tab-1')">
                        <h2>회원 정보</h2>
                        <form class="login_form" @submit.prevent="handleInformation">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>이름</label>
                                        <input type="text" v-model="name" refs="name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>전화번호</label>
                                        <input type="text" v-model="phone" refs="phone">
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>아이디</label>
                                        <div class="information">{{list.identity}}</div>
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>생년월일</label>
                                        <div class="information">{{list.birth}}</div>
                                    </div>
                                </div>                                                           
                            </div>
                            <div class="update_button">
                                <button>회원탈퇴</button>
                                <button type="reset">취소</button>
                                <button type="submit" class="update" @click="handleInformation">업데이트</button>      
                            </div>
                        </form>
                    </div>
                    <div class="tab_content" v-show="isActive('tab-2')">
                        <h2>비밀번호 변경</h2>
                        <form class="login_form" @submit.prevent="handlePassword">
                            <div class="row">
                                <div class="col-md-6">
                                    
                                    <div class="member_info" >
                                        <label>현재 비밀번호</label>
                                        <input type="password" v-model="password">
                                    </div>
                                </div>                                                                           
                            </div>
                            <div class="row">                            
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>변경할 비밀번호</label>
                                        <input type="password" v-model="newPassword">
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="member_info">
                                        <label>비밀번호 확인</label>
                                        <input type="password" v-model="reNewPassword">
                                    </div>
                                </div>                                                    
                            </div>
                            <div class="update_button">
                                <button @click="handlePassword">업데이트</button>
                                <button type="reset">취소</button>
                            </div>
                        </form>
                        
                    </div>
                    <div class="tab_content" v-show="isActive('tab-3')">
                        <h2>주문 내역</h2>
                    </div>
                    <div class="tab_content" v-show="isActive('tab-4')">
                        <h2>회원 조회 및 권한 변경</h2>
                        <div class="product_table">                     
                                <table>
                                    <thead>
                                        <tr>
                                            <th>이름</th>
                                            <th>아이디</th>
                                            <th>전화번호</th>
                                            <th>생년월일</th>
                                            <th>권한변경</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="list in member" v-bind:key="list.name" value="member">
                                            <td>{{list.name}}</td>
                                            <td>{{list.identity}}</td>
                                            <td>{{list.phone}}</td>
                                            <td>{{list.birth}}</td>
                                            <td>
                                                <select v-model="list.memberRole">  
                                                    <option value="" disabled>권한 설정</option>                                  
                                                    <option value="ROLE_MEMBER" >일반 유저</option>
                                                    <option value="ROLE_MANAGER">매니저</option>
                                                    <option value="ROLE_ADMIN">관리자</option>                                    
                                                </select>  
                                                <button @click="changeRole">변경</button>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>

                    <div class="tab_content" v-show="isActive('tab-5')">
                        <h2>구매 목록</h2>
                        <div class="product_table">                     
                                <table>
                                    <thead>
                                        <tr>
                                            <th>구매량</th>
                                            <th>구매 제품명</th>
                                            <th>결제 방법</th>
                                            <th>총 가격</th>                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="list in product" v-bind:key="list.name" value="product">
                                            <td>{{list.buyAmount}}</td>
                                            <td>{{list.buyProductName}}</td>
                                            <td>{{list.salePayment}}</td>
                                            <td>{{list.totalPrice}}</td>                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>

                     <div class="tab_content" v-show="isActive('tab-6')">
                        <h2>모든 구매 목록</h2>
                        <div class="product_table">                     
                                <table>
                                    <thead>
                                        <tr>
                                            <th>구매량</th>
                                            <th>구매자</th>
                                            <th>구매 제품명</th>
                                            <th>결제 방법</th>
                                            <th>총 가격</th>                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="list in products" v-bind:key="list.name" value="products">
                                            <td>{{list.buyAmount}}</td>
                                            <td>{{list.buyIdentity}}</td>
                                            <td>{{list.buyProductName}}</td>
                                            <td>{{list.salePayment}}</td>
                                            <td>{{list.totalPrice}}</td>                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/api';
export default {
    name:"Member",
    data :()=>({
        activeTab:'tab-1', 
        list:[], 
        product:[],
        products:[],
        name:'',
        phone:'',
        password:'',
        newPassword:'',
        reNewPassword:'',
        member:[],
        memberRole:'',
        buyAmount:'',
        buyIdentity:'',
        buyProductName:'',
        salePayment:'',
        totalPrice:'',
    }),
   
    methods:{
        setActive(tab){
            this.activeTab=tab;
        },
        isActive(tab){
            return this.activeTab===tab;
        },

        load(){
            
            api.get('/member').then(res=>{
                //console.log(res)
                this.list=res.data.data;
            }).catch(err=>{
                console.log(err)
            })
        },

        loadAll(){
            api.get('/member/readAll').then((result)=>{
                this.member=result.data.data;
            }).catch(err=>{
                console.log(err)
            })
        },

        handleInformation(){
            
            api.put('/member',{name: this.name,phone:this.phone}).then(res=>{
                alert("회원정보가 변경되었습니다");
                console.log(res);

            }).catch(err=>{
                console.log(err)
            })
        },

        handlePassword(){
            api.put('/member/password',{password: this.password,newPassword:this.newPassword,reNewPassword:this.reNewPassword}).then(res=>{
                alert("비밀번호가 변경되었습니다");
                console.log(res);

            }).catch(err=>{
                console.log(err)
            })
        },

        changeRole(){
            api.put('/member/role',{memberRole:this.memberRole}).then(res=>{
                alert("권한이 변경되었습니다");
                console.log(res);

                }).catch(err=>{
                    console.log(err)
            })
        },

        loadProduct(){
            api.get('/sale/buy/mySelf').then(result=>{
                //console.log(res)
                this.product=result.data.data;
            }).catch(err=>{
                console.log(err)
            })
        },

        loadAllProduct(){
            api.get('/sale/buy/all').then(result=>{
                //console.log(res)
                this.products=result.data.data;
            }).catch(err=>{
                console.log(err)
            })
        },

        
    },   

  
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');      
            
            this.load ();
            this.loadAll();
            this.loadProduct();
            this.loadAllProduct();
            
        }
    }
    
  
};
</script>


<style lang="scss" scoped>
.member_wrap {    
    
    .member_container{
        width:920px;        
        margin: 100px auto; 
        display:flex;
        justify-content: center; 
        border: 1px solid #ddd;              
        
        .member_contents{                  
            display:flex;
            flex-direction: row;
            height:500px;

            .member_tab{   
                padding:35px 0 50px 0;                     
                width:220px;
                background:linear-gradient(#6282E6, #80cbaf);     
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
                        color:white;
                    }
                    
                    .nav_tabs{
                        display:flex;
                        flex-direction: column;
                        
                        .nav_item{
                            padding: 15px 20px;
                            
                            color:white;
                            cursor: pointer;

                            &:hover, &:focus, &.active{
                                transition: 0.3s ease-in-out all;
                                border-left:4px white solid;                                
                                background:rgba(255, 255, 255, 0.2);                              
                                color: #fff;

                            }
                        }
                        
                    }
                }

            }

            .member_profile{                 
                border-left: 1px solid #ddd;
                width:700px;
                   
                
                .tab_content{                    
                    padding:50px;

                    h2{
                        color:#666;
                        margin:0 0 30px 0;
                    }

                    form{
                        
                        .row{
                            display: flex;
                            -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        margin:0 auto;

                            .col-md-6{
                                flex: 0 0 50%;
                                max-width: 50%;
                                position: relative;
                                width: 100%;
                                padding-right: 15px;
                                padding-left: 15px;
                                box-sizing: border-box;

                                .member_info{
                                    margin-bottom: 30px;

                                    label{
                                        display: inline-block;
                                        margin-bottom: 0.5rem;                                    
                                    }

                                    input[type="password"] {
                                        font: small-caption;
                                    }
                                    
                                    input{
                                        display: block;                                    
                                        width: 85%;
                                        height:20px;
                                        padding: 5px 15px;
                                        font-size: 16px;
                                        font-weight: 400;
                                        line-height: 1.5;
                                        color: #495057;
                                        background-color: #fff;
                                        background-clip: padding-box;
                                        border: 1px solid #ced4da;
                                        border-radius: 0.25rem;
                                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

                                        &:focus{
                                            outline:none;        
                                            border: 1px solid #5a73f1;
                                            background-origin: border-box;  
                                            
                                        }
                                    }

                                    .information{
                                        border-bottom: 1px solid #dddddd;
                                        line-height:2; 

                                        &:hover{   
                                            border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                                            background-origin: border-box;   
                                        }
                                    }
                                }
                            }
                        }

                        .update_button{
                            margin: 15px;                            

                            button{
                                border:1px #ddd solid;
                                padding:8px 10px;
                                width:90px;
                                line-height: 1.5;
                                margin-right: 4px;
                                border-radius:4px;
                                cursor: pointer;

                                &:hover,&.active{
                                    transition: 0.3s ease-in-out all;
                                    background: #5a73f1;  
                                    border:1px #5a73f1 solid;                                   
                                    color: #fff;                                
                                }
                            }

                            .update{
                                float:right;
                            }
                        }

                    }
                    
                } 
                
            }
        }
    }
}



</style>