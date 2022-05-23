<template>
  <div id="app-wrapper">    
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
  computed: {
    currentUser() {
      return this.$store.state.auth.memberEntity;
    },    
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}

</script>

<style lang="scss">

@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

*{
  text-decoration: none;
  font-family:"NanumSquare";
}
</style>
