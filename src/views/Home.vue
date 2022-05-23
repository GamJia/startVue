<template>
  <div class="Container">
    <div class="Contents">
      <div class="main_banner">
        <hooper :autoPlay="true" :playSpeed="2000">
          <slide><img src="../assets/slider1.png"></slide>
          <slide><img src="../assets/slider2.png"></slide>
          <slide><img src="../assets/slider3.png"></slide>
          <hooper-pagination slot="hooper-addons" />
        </hooper>
      </div>

      <div class="mobile_banner">
        <div class="mobile_container">
          <div class="mobile_contents">
            <h1>stArt의 할인 소식을<br> 가장 먼저 알고 싶다면?</h1>
            <h3>stArt App을 다운 받아보세요!</h3>            
          </div>
          <div class="mobile_image">
            <img src="../assets/mobile.png">
          </div>          
        </div>
      </div>

      <div class="inner_wrap">
        <div class="inner_container">
          <h3>Product</h3>
          <div class="prod_card">
            <ProductItem :post="post" v-for="(post,index) in sample" :key="index"/>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import "hooper/dist/hooper.css";
import ProductItem from '../components/ProductItem.vue';
import UserService from '../services/user.service';
export default {
  name:"Home",
  components:{
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    ProductItem
  },
 
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  data(){
    return{
      sample:[
        {
          title:"불닭볶음면",
          cost:"1500원",
          coverPhoto:"firenoodle",
        },
        {
          title:"초코우유",
          cost:"1650원",
          coverPhoto:"chocomilk",
        },
        {
          title:"코카콜라",
          cost:"1700원",
          coverPhoto:"coke",
        },
        {
          title:"마스크",
          cost:"2000원",
          coverPhoto:"mask",
        },
        {
          title:"비닐우산",
          cost:"7000원",
          coverPhoto:"umbrella",
        },
      ],
    }
  },
}
</script>


<style lang="scss">
.Container{
  overflow: hidden;

  .Contents{
    width: 1020px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;

    .main_banner {
      width: 100%;
      height: 470px;
      border-bottom:1px solid #ddd;  
      overflow: hidden;
      margin-bottom:70px;
      .hooper{
        position: absolute;
        width: 1020px;   
        z-index: 0;
        height: 450px;
        min-width: 1020px;
        overflow: hidden;

        .hooper-indicator {
          margin: 0 2px;
          width: 12px;
          height: 12px;
          border-radius: 12px;
          border: none;
          padding: 0;
          background-color: #d3d3d3;
          cursor: pointer;
        }

        .hooper-indicator:hover, .hooper-indicator.is-active {
          background-color:#6ea1d0;
        }
      }
    }

    .mobile_banner{
      background: linear-gradient(-45deg, #f3f5f0  10%,#d7e4f0 90%);
      border-radius: 10px;
      overflow: hidden;
      padding: 33px;
      box-sizing: border-box;
      overflow: hidden;
      height:200px;    

      .mobile_contents{
        width:50%;
        float:left;
        color:#666;
        h1{
          color:#4f4f4f;          
        }

        h3{
          font-weight:300;         
        }
      }

      .mobile_image{
        width:50%;
        height:auto;
        float:right;   
        
        img{
          float:right;
          width:650px;
        }
      }
    }

    
  }
}


.inner_wrap{
  position:relative;
  padding:40px 40px;
  background-color:#fff;  
  height:400px;
}

.inner_wrap .inner_container h3{
  font-weight:bold;
  font-size:30px;
  margin-bottom:32px;
}

.inner_container>.prod_card {
  display:grid;
  gap:20px;
  grid-template-columns: repeat(5,1fr);
}
</style>


