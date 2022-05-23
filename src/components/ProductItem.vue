<template>
  <div class="prod_item">
    <div class="prod_info">        
        <img :src="require(`../assets/${post.coverPhoto}.jpg`)" alt="">
        <div class="prod_title">{{post.title}}</div>
        <div class="prod_cost">{{post.cost}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"productItem",
    props:["post"],
}
</script>

<style lang="scss" scoped>
.prod_item{
  position: relative;
  cursor:pointer;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color:#fff;
  min-height:220px;
  transition:.5s ease all;
  border: 1px solid #dddddd; 
    
  &:hover{
    transform:rotateZ(-2deg)scale(0.98);  
    border: 3px solid transparent;
    background-origin: border-box;   
    display:inline-block;     
    background: linear-gradient(#fff 0 0) padding-box,linear-gradient(to bottom,#5363ff, #8eeb97)border-box;
  }

  .prod_info{
    display:flex;
    flex-direction: column;
    height:100%;
    z-index: 3;
    padding:20px 15px;
    color:#000;    
    

    img{     
      padding:0 0 10px 10px ;
      width:120px;
      height:120px;
    }

    .prod_title{
      display:flex;
      justify-content: center;
      padding-bottom:8px;
      font-size:18px;
      font-weight:400;
    }

    .prod_cost{
      display:flex;
      justify-content: center;
      font-weight:500;
      font-size:15px;
      padding-bottom: 16px;
    }
  }
}



</style>