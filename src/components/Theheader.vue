<template>
    <header>
      <div class="theheader">
            <div class="top">
            <Logo :src="'../assets/TRIO02.JPEG'" :width="logoWidth" height="auto" />
            </div>
  
        <div class="nav" v-if="!isMobile">
          <router-link v-for="(link, index) in links" :key="index" :to="`/${link.url}`" exact-active-class="active">
            {{ link.text }}
          </router-link>
        </div>
  
        <div class="hamburger" v-if="isMobile" @click="toggleMenu">
          <div class="line" :class="{ 'line-1': true, 'open': menuOpen }"></div>
          <div class="line" :class="{ 'line-2': true, 'open': menuOpen }"></div>
          <div class="line" :class="{ 'line-3': true, 'open': menuOpen }"></div>
        </div>
  
        <div class="mobile-menu" :class="{ open: menuOpen }">
          <router-link v-for="(link, index) in links" :key="index" :to="`/${link.url}`" exact-active-class="active" @click="toggleMenu">
            {{ link.text }}
          </router-link>
          <div class="social">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
  
        <i></i>
      </div>
    </header>
  </template>
  
  <script>
  import Logo from './Logo.vue';
  
  export default {
    name: 'TheHeader',
    components: {
      Logo,
    },
    data() {
      return {
        links: [
          { text: 'QUEM SOMOS', url: 'QuemSomos' },
          { text: 'CULTOS', url: 'Cultos' },
          { text: 'DÍZIMOS E OFERTAS', url: 'Dizimo' },
          { text: 'CURSOS', url: 'Cursos' },
          { text: 'CONTATO', url: 'contato' },
        ],
        menuOpen: false,
        isMobile: window.innerWidth < 900,
        logoWidth: window.innerWidth < 900 ? '250px' : '350px',  // Largura inicial da logo
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      updateLogoSize() {
        this.logoWidth = window.innerWidth < 900 ? '250px' : '350px';
        this.isMobile = window.innerWidth < 900;
      },
    },
    watch: {
      '$route'(to, from) {
        this.updateLogoSize();
      },
    },
    mounted() {
      this.updateLogoSize();
      window.addEventListener('resize', this.updateLogoSize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateLogoSize);
    },
  };
  </script>
  
  <style scoped>
  .theheader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .top {
    padding-top: 1rem;
  }
  
  img {
    width: 100%;
  }
  
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-top: 1.5rem;
  }
  
  .nav a {
    display: flex;
    color: white;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    position: relative;
    padding: 0.2em 0.4em;
  }
  
  .nav a::before,
  .nav a::after {
    content: '';
    height: 5px;
    width: 5px;
    position: absolute;
    transition: all 0.35s ease;
    opacity: 0;
  }
  
  .nav a::before {
    content: '';
    right: 0;
    top: 0;
    border-top: 3px solid #FFC700;
    border-right: 3px solid #FFC700;
    transform: translate(-100%, 50%);
  }
  
  .nav a::after {
    content: '';
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #e0b829;
    border-left: 3px solid #FFC700;
    transform: translate(100%, -50%);
  }
  
  .nav a:hover::before,
  .nav a:hover::after {
    transform: translate(0, 0);
    opacity: 1;
  }
  
  .nav a:hover {
    color: #FFC700;
  }
  
  .nav a.active {
    color: #FFC700;
  }
  
  .nav a.active::before,
  .nav a.active::after {
    opacity: 1;
    transform: translate(0, 0);
  }
  
  i {
    width: 100%;
    border: 1px solid white;
    margin-top: 2rem;
  }
  
  .hamburger {
    position: fixed;
    right: 1rem;
    display: none;
    align-items: end;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
    z-index: 99999;
  }
  
  .hamburger .line {

    width: 30px;
    height: 4px;
    background-color: white;
    transition: all 0.3s;
    border-radius: 4rem;
  }
  
  .hamburger .line-1 {
    width: 17px;
  }
  
  .hamburger .line-3 {
    width: 22px;
  }
  
  .hamburger .line-1.open {
    transform: rotate(50deg) translateY(5px);
    width: 30px;
    background-color: black;
  }
  
  .hamburger .line-2.open {
    opacity: 0;
  }
  
  .hamburger .line-3.open {
    transform: rotate(-50deg) translateY(-7px);
    position: absolute;
    bottom: 0;
    width: 30px;
    background-color: black;
  }
  
  .mobile-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    background-color: #fed424;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 8rem 0;
    z-index: 40;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;
  }
  
  .mobile-menu.open {
    transform: translateY(0);
  }
  
  .mobile-menu a {
    color: rgb(3, 3, 3);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .mobile-menu .social {
    display: flex;
    gap: 3rem;
  }
  
  .mobile-menu .social i {
    border: none;
    font-size: 3rem;
    cursor: pointer;
  }
  
  @media (max-width: 1200px) {
    .nav {
      gap: 5rem;
    }
    .nav a {
      font-size: .7rem;
    }
  }
  
  @media (max-width: 900px) {
    img {
      width: 150px;
    }

    .nav {
      display: none;
    }
  
    .hamburger {
      display: flex;
    }
  
    .top {
      padding-top: 2rem;
      width: 97%;
    }
  }
  </style>
  