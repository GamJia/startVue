<template>
    <div class="product_wrap">
        <div class="product_container">
            <div class="product_contents">
                <div class="product_search">
                    <h1>stArt의 다양한 상품들을 확인해보세요</h1>
                    <div class="search_wrap">
                        <font-awesome-icon class="icon" icon="magnifying-glass" @click="searchProduct"/> 
                        <input type="text" placeholder="상품 검색" v-model="name">
                    </div>

                    <div class="tab_container">
                        <div class="nav_tabs">
                            <div class="nav_item" @click="setActive('tab-1')" :class="{'active':isActive('tab-1')}">
                                상품 목록
                            </div>
                            <div class="nav_item" @click="setActive('tab-2')" :class="{'active':isActive('tab-2')}">
                                상품 삭제
                            </div>
                            <div class="nav_item" @click="setActive('tab-3')" :class="{'active':isActive('tab-3')}">
                                상품 추가
                            </div>
                            <div class="nav_item" @click="setActive('tab-4')" :class="{'active':isActive('tab-4')}">
                                상품 수정
                            </div>

                            <div class="nav_item" @click="setActive('tab-5')" :class="{'active':isActive('tab-5')}">
                                상품 구매
                            </div>
                        </div>

                        <div class="tab_content" v-show="isActive('tab-1')">
                            <div class="product_table">                     
                                <table>
                                    <thead>
                                        <tr>
                                            <th>상품 이름</th>
                                            <th>상품 수량</th>
                                            <th>상품 가격</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="list in productEntity" v-bind:key="list.name" :value="productEntity">
                                            <td>{{list.name}}</td>
                                            <td>{{list.amount}}개</td>
                                            <td>{{list.price}}원</td>                                            

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="tab_content" v-show="isActive('tab-2')">
                            <div class="product_delete">
                                <input type="text" v-model="productEntity.name" placeholder="삭제할 상품 이름 입력">
                                <button  @click="deleteProduct">삭제하기</button>
                            </div>
                        </div>

                        <div class="tab_content" v-show="isActive('tab-3')">
                            <div class="product_insert">
                                <form @submit.prevent="insertProduct,duplicateCheck">
                                    <input type="text" v-model="name" placeholder="상품 이름 입력">
                                    <input type="text" v-model="amount" placeholder="상품 수량 입력">
                                    <input type="text" v-model="price" placeholder="상품 가격 입력">
                                    <button @click="duplicateCheck">중복 확인하기</button>
                                    <button @click="insertProduct" >추가하기</button>
                                </form>                                
                            </div>
                        </div>

                        <div class="tab_content" v-show="isActive('tab-4')">
                            <div class="product_insert">
                                <form @submit.prevent="changeProduct">
                                    <input type="text" v-model="name" placeholder="상품 이름 입력">
                                    <input type="text" v-model="newAmount" placeholder="상품 수량 입력">
                                    <input type="text" v-model="newPrice" placeholder="상품 가격 입력">                                    
                                    <button @click="changeProduct" >상품 수정하기</button>
                                </form>                                
                            </div>
                        </div>

                        <div class="tab_content" v-show="isActive('tab-5')">
                            <div class="product_insert">
                                <form @submit.prevent="buyProduct">
                                    <input type="text" v-model="buyProductName" placeholder="구매할 상품 이름 입력">
                                    <input type="text" v-model="buyAmount" placeholder="구매할 수량 입력">
                                    <select v-model="salePayment">  
                                        <option value="" disabled>결제 방법</option>                                             
                                        <option value="CARD">카드</option>
                                        <option value="CASH">현금</option>                                    
                                    </select>                                     
                                    <button @click="buyProduct" >상품 구매하기</button>
                                </form>                                
                            </div>
                        </div>
                    </div>
                    
                   
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/api'
import ProductEntity from '../models/productEntity'
export default {
    name:"Product",
    data() {
        return{
            list:undefined,   
            productEntity: new ProductEntity('','',''),  
            name:'', 
            activeTab:'tab-1',  
            amount:'',
            price:'', 
            newAmount:'',
            newPrice:'',
            buyProductName:'',
            buyAmount:'',
           
        }
    },
    mounted () {
        api.get('/product/productAll').then((res)=>{
            this.productEntity=res.data.data;
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        deleteProduct(){
            api.delete('/product/delete?name='+this.productEntity.name).then((res)=>{
                alert("상품이 삭제되었습니다");
            }).catch(err=>{
                console.log(err)
            })
        
        },

        searchProduct(){
            api.get('/product/read?name='+this.name).then((res)=>{
                if(res.data.check==true){
                    alert(res.data.data.name+"은(는) "+res.data.data.price+"원이고 "+res.data.data.amount+"개 남았습니다");
                }
                else if(res.data.check==false){
                    alert("해당 상품은 존재하지 않습니다");
                }
                
            }).catch(err=>{
                console.log(err)
            })
        },

        duplicateCheck(){
            api.post('/product/name/check?name='+this.name).then((res)=>{
                if(res.data.data==false){
                    alert("등록 가능한 상품입니다")
                }
                else if(res.data.data==true){
                    alert("중복된 상품이 있습니다")
                }
            }).catch(err=>{
                console.log(err)
            })
        },

        insertProduct(){
            api.post('/product/newInsert/',{amount:this.amount,name:this.name,price:this.price}).then((res)=>{
                alert("상품이 추가되었습니다");
            }).catch(err=>{
                console.log(err)
            })
        },

        changeProduct(){           
            api.put('/product',{name:this.name,newAmount:this.newAmount,newPrice:this.newPrice}).then(res=>{
                if(res.data.check==true){
                    alert("상품정보가 변경되었습니다");
                }

                else if(res.data.check==false){
                    alert("존재하지 않는 상품입니다")
                }               
                
            }).catch(err=>{
                console.log(err)
            })
        },

        buyProduct(){
            api.post('/sale/buy',{buyAmount:this.buyAmount,buyProductName:this.buyProductName,salePayment:this.salePayment}).then(res=>{
                if(res.data.check==true){
                    alert(res.data.data);
                }

                else if(res.data.check==false){
                    alert("존재하지 않는 상품입니다")
                }               
                
            }).catch(err=>{
                console.log(err)
            })
        },


         setActive(tab){
                this.activeTab=tab;
            },
        isActive(tab){
                return this.activeTab===tab;
            },   
    }
  
    
};
</script>

<style lang="scss" scoped>
.product_wrap{
    overflow: hidden; 
    width:1280px;
    display: flex;
    justify-content: center;
    margin:0 auto;

    .product_container{
        width: 1280px;
        height: 100%;
        overflow: hidden;      

        .product_contents{

            .product_search{
                padding:122px 0 76px 0;
                background:linear-gradient(120deg, #6282E6, #80cbaf);
                display:flex;
                justify-content: center;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: center;

                h1{
                    color:white;
                    font-weight:300;
                }
                
                .search_wrap{
                    background:rgba(255, 255, 255, 0.2);
                    border-radius:70px;
                    line-height: 1.5;   
                    padding:15px 230px 20px 30px;  

                    .icon{
                        color:white;
                        cursor: pointer;
                    }
                    
                    input{
                        background:none;
                        border:none;
                        font-size:20px;
                        color:white;
                        width:320px;
                        padding:0 0 0 15px;

                        &:focus{                
                            outline:none;        
                            
                        }
                        
                    }

                    input::placeholder{
                        color:white;
                    }

                    &:hover{   
                        border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                            background-origin: border-box;   
                    }
                }

                .tab_container{
                    width:1020px;
                    
                    .nav_tabs{
                        padding-top:40px;
                        display:flex;
                        justify-content: flex-start;
                        margin-right:auto;
                        .nav_item{                        
                            flex-direction: row;
                            background:rgba(255, 255, 255, 0.2);
                            padding:20px;
                            color:#666;                               
                            
                            &:hover, &:focus, &.active{
                                transition: 0.3s ease-in-out all;                                                         
                                background:rgba(255, 255, 255, 0.2);                              
                                color: #fff;

                            }
                        }

                        
                                
                    }


                    .tab_content{                    
                        width:1020px;
                        background:rgba(255, 255, 255, 0.2);
                        display: flex;
                        justify-content: center;
                        padding:0 0 60px 0;

                         .product_delete{  
                            padding-top:40px;      
                            border-bottom: 1px solid #dddddd;      
                            input{
                                color:white;
                                background:transparent;           
                                margin-top: 10px;
                                list-style-type:none;                                                 
                                outline: none;
                                padding: 0 20px;
                                width: 230px;
                                height: 60px;
                                line-height: 60px;
                                vertical-align: middle;   
                                border:none;                         
                                outline: none; 
                            }

                            input::placeholder{
                                color:white;
                            }

                            &:hover{   
                                border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                                background-origin: border-box;   
                            }
                        }

                        .product_insert{  
                            form{
                                padding-top:40px;      
                                border-bottom: 1px solid #dddddd;      
                                input{       
                                    margin:0 auto;                             
                                    color:white;
                                    background:transparent;           
                                    margin-top: 10px;
                                    list-style-type:none;                                                 
                                    outline: none;
                                    padding: 0 20px;
                                    width: 120px;
                                    height: 60px;
                                    line-height: 60px;
                                    vertical-align: middle;   
                                    border:none;                         
                                    outline: none; 
                                    margin:10px;
                                }

                                input::placeholder{
                                    color:white;
                                }

                                &:hover{   
                                    border-image: linear-gradient(to right, #5363ff, #8eeb97) 0 0 100% 0/1px 0 1px 0 stretch;
                                    background-origin: border-box;   
                                }
                            }
                        }
                        .product_table{   
                            padding-top:50px;                 
                            font-size:15px;
                            width:820px;

                            table{
                                border-collapse: collapse;
                                border-radius: 3px;
                                width: 100%;
                                margin: 0 auto;
                                position: relative;
                                overflow: hidden;

                                thead{
                                    display: table-header-group;
                                    vertical-align: middle;
                                    border-color: inherit;
                                    width:100%;
                                    tr{
                                        height: 60px;
                                        background: #54608e;

                                        th{
                                            font-size: 18px;
                                            color: #fff;
                                            line-height: 1.2;
                                            font-size:22px;
                                            
                                        }
                                    }
                                }

                                tbody{                            
                                    display: table-row-group;
                                    vertical-align: middle;
                                    border-color: inherit;
                                    background:rgba(255, 255, 255, 0.2);
                                    tr{
                            
                                        height: auto;
                                        padding: 37px 0;
                                        td{            
                                            color:white;      
                                            text-align: center;
                                            margin-bottom: 24px;
                                            padding:20px 0;
                                            font-size:18px;

                                            svg{
                                                padding:0 10px;
                                            }
                                        }
                                        &:hover{
                                            transition: 0.2s ease-in-out all;   
                                            background:rgba(255, 255, 255, 0.2);
                                            cursor: pointer;
                                        }
                                    }
                                    
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

