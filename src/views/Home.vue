<template>
  <div class="Container">
    <span class="wallpaper">
      <div class="description">
        <h1>집 앞의 작은 즐거움<br>start with stArt</h1>
        <div class="description_button">
          <router-link to="/product" tag="button">상품 보러 가기 <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
        </div>
      </div>
      <div class="main_banner">
        <img src="../assets/title.png" alt="">
      </div>
    </span>
    <div class="advertise">
      <ul>
        <li>
          <div class="ad">
            <img src="../assets/icon1.png">
            <h4>App으로 더욱 간편하게!</h4>
          </div>          
        </li>
        <li>          
          <div class="ad">
            <img src="../assets/icon2.png">
            <h4>매달 진행되는 다양한 이벤트!</h4>
          </div>         
        </li>
        <li>          
          <div class="ad">
            <img src="../assets/icon3.png">
            <h4>다양한 상품 아이디어!</h4>
          </div>         
        </li>
        <li>          
          <div class="ad">
            <img src="../assets/icon4.png">
            <h4>항상 고객을 우선시!</h4>
          </div>
        </li>
      </ul>
    </div>
    <div class="main_hooper">
      <hooper :autoPlay="true" :playSpeed="2000">
          <slide><img src="../assets/slider1.png"></slide>
          <slide><img src="../assets/slider2.png"></slide>
          <slide><img src="../assets/slider3.png"></slide>
          <hooper-pagination slot="hooper-addons" />
        </hooper>
    </div>
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import "hooper/dist/hooper.css";

export default {
  name:"Home",
  components:{
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,

  },
 
}
</script>

<style lang="scss" scoped>
.Container{
  overflow: hidden; 
  width:1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0 auto; 

  .wallpaper{
    background-image:url('../assets/wallpaper.png');
    position:relative;
    width:1280px;
    height:440px;

    .description{
      position:relative;
      float:left;
      left:80px;
      top:40px;
      color:white;
      h1{
        font-weight:300;
        font-size:48px;
      }
      .description_button
      {
        padding-top:30px;
        button{
          border-radius: 40px;
          border:1px solid white;
          background:rgb(255,255,255,0);
          color:white;
          padding:10px 20px;
          font-size:17px;

          svg{
            margin-left:10px;
            color:white;
            transform:translateX(-50%);

          }

          &:hover{
            cursor: pointer;
            padding:10px 30px;
            transition: 0.3s ease-in-out all;
            svg{
              transition: 0.3s ease-in-out all;  
              transform:translateX(0);
            }
          }
        }
      }
    }

    .main_banner{
      position:relative;
      float:right;
      top:40px;
      left:90px;
      img{
        width:600px;
        height:480px;
      }

    }

    
  }

  .advertise{
    background:#f6f6f6;
    padding:0;
    border-radius: 30px;
    width:1080px;
    justify-content: center;
    display: flex;
    margin:0 auto;
    ul{
        width:100%;
        list-style: none;
        display:grid;
        padding:15px;
        grid-template-columns: repeat(4,1fr);
      li{        
        float:left;        
        .ad{
          display: flex;
          justify-content: center;          
          flex-direction: column;
          img{
           margin:0 auto;
            width:150px;
            height:150px;
          }

          h4{
            color:#666;
            text-align: center;
            font-weight:400;
          }

        }
        
      }

      li:last-child{
          border-right:0px;
      }
    }
  }

  .main_hooper{

    justify-content: center;
    display: flex;
    margin:60px auto;
    width: 1280px;
    height: 470px;
    border-top:1px solid #ddd;  
    border-bottom:1px solid #ddd;  
    overflow: hidden;
    margin-bottom:70px;
    .hooper{
      position: absolute;
      width: 1280px;   
      z-index: 0;
      height: 450px;
      min-width: 1280px;
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
  

 
}



</style>


