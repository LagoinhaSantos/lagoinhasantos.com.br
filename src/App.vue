<template>
  <div class="app">
    <Theheader />
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../src/components/Footer.vue';
import Home from './pages/Home.vue';
import Theheader from '../src/components/Theheader.vue'


export default {
  name: 'app',
  components: {
    Home,
    Footer,
    Theheader
  }
}

</script>

<style scoped>

</style>
