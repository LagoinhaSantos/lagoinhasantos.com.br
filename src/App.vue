<template>
  <div class="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/Theheader.vue'

export default {
  name: 'App',
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style scoped>
</style>
