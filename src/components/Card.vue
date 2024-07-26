<template>
  <div class="card" :style="cardStyle">
    <div class="overlay" v-if="hasOverlay"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '470px'
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    hasOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardStyle() {
      const backgroundStyle = this.backgroundImage
        ? `url(${this.backgroundImage})`
        : this.background;

      return {
        width: this.width,
        height: this.height,
        background: backgroundStyle,
        backgroundSize: this.backgroundImage ? 'cover' : 'auto'
      };
    }
  }
}
</script>


<style scoped>
.card {
  position: relative;
  align-items: center;
  overflow: hidden;
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.607); 
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  color: white; 
}

</style>
