<template>
    <div 
      :style="{ display: shouldDisplay ? 'flex' : 'none' }" 
      class="aovivo"
      @click="redirectToYoutube"
    >
      <div class="borde">
        <div class="circulo"></div>
        <p>CULTO <span>AO VIVO</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AoVivo',
    data() {
      return {
        shouldDisplay: false,
      };
    },
    mounted() {
      this.checkShowStatus();
    },
    methods: {
      checkShowStatus() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();
  
        if (dayOfWeek === 0) { 
          if (
            (hours === 10 && minutes >= 30) || 
            (hours > 10 && hours < 12) || 
            (hours === 16) || 
            (hours > 16 && hours < 20)
          ) {
            this.shouldDisplay = true;
          } else {
            this.shouldDisplay = false;
          }
        } else if (dayOfWeek === 3 && hours === 20) { 
          this.shouldDisplay = true;
        } else {
          this.shouldDisplay = false;
        }
      },
      redirectToYoutube() {
        window.location.href = "https://www.youtube.com"; 
      }
    }
  };
  </script>
  
  <style scoped>
  .aovivo {
    position: fixed;
    display: flex;
    align-items: center;
    width: 12rem;
    border-radius: .5rem;
    height: 3rem;
    padding: 1rem 0 1rem 1rem;
    background-color: rgba(255, 255, 255, 0);
    right: -2rem;
    bottom: 4rem;
    color: rgb(90, 89, 89);
    z-index: 99;
    cursor: pointer;
    transition: display 0.3s ease;
  }
  
  .borde {
    display: flex;
    align-items: center;
    text-align: center;
    gap: .2rem;
    border: 3px solid rgb(90, 89, 89);
    padding: 4px;
  }
  
  .circulo {
    display: flex;
    width: .9rem;
    height: .9rem;
    border-radius: 50%;
    background-color: rgb(255, 0, 0);
    animation: piscarVermelho 1s infinite alternate;
  }
  
  @keyframes piscarVermelho {
    0% {
      background-color: rgb(253, 69, 69);
    }
    100% {
      background-color: rgb(200, 0, 0);
    }
  }
  
  p {
    font-size: 1rem;
  }
  
  span {
    font-weight: bold;
  }
  </style>
  