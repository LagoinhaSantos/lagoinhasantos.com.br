<template>
  <div class="home">
    <Theheader />
    <div class="carrossel-container">
      <Carrossel width="100%" height="80vh"
        :images="['./src/assets/TRIO01.jpg', './src/assets/TRIO02.jpg', './src/assets/TRIO03.jpg']">
        <div class="img">
          <img class="name" src="../assets/NAME.png" >
          <img class="logo" src="../assets/LOGO.png" >
        </div>
      </Carrossel>
    </div>
  </div>
</template>

<script>
import Carrossel from '../components/Carrossel.vue';
import Theheader from '../components/Theheader.vue';

export default {
  name: 'home',
  components: {
    Theheader,
    Carrossel
  }
};
</script>

<style scoped>
.carrossel-container {
  display: flex;
  align-items: center;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img .name {
  width: 70rem;
  height: auto;
}

.img .logo{
  width: 10rem;
  height: auto;
}
</style>
