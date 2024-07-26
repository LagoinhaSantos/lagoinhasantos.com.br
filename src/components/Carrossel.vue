<template>
    <div class="carrossel" :style="{ width, height }">
      <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <img
          v-if="images.length"
          :key="currentIndex"
          :src="images[currentIndex]"
          alt="Carrossel"
          class="carrossel-image"
        />
      </transition>
      <div class="carrossel-slot">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carrossel',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100vh'
      },
      images: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0,
        interval: null
      };
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = 'scale(1.1)';
      },
      enter(el, done) {
        el.offsetHeight;
        el.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
        el.style.opacity = 1;
        el.style.transform = 'scale(1)';
        done();
      },
      leave(el, done) {
        el.style.transition = 'opacity 10s ease-in-out, transform 10s ease-in-out';
        el.style.opacity = 0;
        el.style.transform = 'scale(1.1)';
        done();
      }
    },
    mounted() {
      this.interval = setInterval(this.nextImage, 4000); 
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  };
  </script>
  
  <style scoped>
  .carrossel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carrossel-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  }
  
  .carrossel-slot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 1
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  