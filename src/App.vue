<template>
  <div class="app">
    <Theheader />
    <RouterView />
    <Footer/>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../src/components/Footer.vue';
import Theheader from '../src/components/Theheader.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Theheader
  },
  setup() {
    const route = useRoute();

    const isHomePage = computed(() => route.path === '/');
    const isQuemSomosPage = computed(() => route.path === '/quem-somos');
    const isCultosPage = computed(() => route.path === '/cultos');

    return {
      isHomePage,
      isQuemSomosPage,
      isCultosPage,
    };
  }
};
</script>

<style scoped>

</style>
