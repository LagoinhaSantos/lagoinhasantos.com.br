<template>
  <div class="app">
    <Theheader />
    <RouterView />
    <Footer/>
  </div>
</template>

<script>
import Footer from '../src/components/Footer.vue';
import Theheader from '../src/components/Theheader.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Theheader
  },
};
</script>

<style scoped>

</style>
