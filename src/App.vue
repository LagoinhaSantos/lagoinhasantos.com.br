<template>
  <div class="app">
    <TheHeader />
    <router-view/>
    <AoVivo />
    <TheFooter />
  </div>
</template>

<script>
import AoVivo from './components/AoVivo.vue';
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/Theheader.vue'

export default {
  name: 'App',
  components: {
    TheFooter,
    TheHeader,
    AoVivo
  }
}
</script>

<style scoped>
</style>
