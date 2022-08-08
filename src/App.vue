<template>
  <div class="app-wrapper">    
    <div class="app">
      <Navigation/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default{
  name:"app",
  components:{
    Navigation,
    Footer
  },
  
}

</script>

<style lang="scss">

@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

*{
  text-decoration: none;
  font-family:"NanumSquare";
  
  
}

body{
  margin:5px 0 0 0;
  
}

body::-webkit-scrollbar{
  display: none;
}


</style>

