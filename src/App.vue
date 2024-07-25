<template>
  <div class="App">
    <Theheader />
    <Home />
    <footer/>
  </div>
</template>

<script>
import Theheader from './components/Theheader.vue'
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Theheader,
    Home,
    Footer
  }
}

</script>

<style scoped></style>
