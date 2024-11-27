<template>
  <div class="home">
    <transition name="fade">
      <div v-if="showOverlay && isMobile" class="overlay">
        <img class="logo_" src="/assets/LOGOPRETA.png" />
        <div class="dots-container">
          <div class="dot" :class="{ active: activeDot === 1 }"></div>
          <div class="dot" :class="{ active: activeDot === 2 }"></div>
          <div class="dot" :class="{ active: activeDot === 3 }"></div>
          <div class="dot" :class="{ active: activeDot === 4 }"></div>
        </div>
      </div>
    </transition>

    <div class="carrossel-container">
      <Carrossel :width="''" :height="''" :images="imageArray">
        <div class="img">
          <img class="name" src="/assets/NAME.png" />
          <img class="logo" src="/assets/LOGO.png" />
        </div>
      </Carrossel>
    </div>
    <div class="cards">
      <Card :isCentered="true" width="100%" height="470px" backgroundImage="/assets/SEJAMEMBRO.JPEG" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'handshake-simple']" />
          <h3>SEJA MEMBRO</h3>
          <p>Está interessado em <br> se tornar membro da <br> Lagoinha Santos?</p>

          <Button  @click="irParaWhatsApp" class="button--primary">CONHECER</Button>
        </div>
      </Card>
      <Card :isCentered="true" width="100%" height="470px" backgroundImage="/assets/GCSINICIO.jpg" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'house-chimney']" />
          <h3>GC’S</h3>
          <p>Descubra o seu grupo <br> de crescimento (GC): <br> encontre o lugar <br> certo para você!</p>

          <Button  @click="irParaWhatsApp" class="button--primary">VER MAIS</Button>
        </div>
      </Card>
      <Card :isCentered="true" width="100%" height="470px" backgroundImage="/assets/BATISMO.jpeg" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'water']" />
          <h3>BATISMO</h3>
          <p>Quer se batizar?</p>

          <Button  @click="irParaWhatsApp" class="button--primary">QUERO</Button>
        </div>
      </Card>
    </div>
    <div class="voluntario">
      <Card  width="" height="470px" backgroundImage="/assets/FAÇAPARTEDONOSSOTIMEDEVOLUNTÁRIOS.JPG"
        :hasOverlay="true">
        <h3>VENHA FAZER PARTE DO NOSSO <br> TIME DE VOLUNTÁRIOS!</h3>
        <Button  @click="irParaWhatsApp" class="button--secondary">QUERO ME TORNA</Button>
      </Card>
    </div>
    <div class="somos">
      <div class="nos">
        <h4>QUEM SOMOS</h4>
      </div>
      <div class="sobre">
        <p>Somos uma igreja comprometida com um evangelho que se aproxima e não desiste das pessoas. Aqui, o pecado é
          tratado com rigor, mas o pecador é acolhido com amor. Somos um grupo de encorajadores. Deus nos instrui a
          segurar as mãos uns dos outros e dizer "vamos juntos até o fim; ninguém será deixado para trás". Somos uma
          igreja vibrante, evangelizadora e intercessora, enraizada na Palavra e dedicada à comunhão e ao discipulado.
          Nossa visão é conduzir cada pessoa a um relacionamento público e crescente com Jesus. Como missão, buscamos
          alcançar 10% da nossa cidade para Lagoinha. Lagoinha é Grande em Servir e Pequena em Importar-se. BEM-VINDO AO
          NOVO!</p>
        <Card :isCentered="true" width="500px" height="470px" backgroundImage="/assets/CULTOS.JPG" />
      </div>
    </div>
    <div class="programacao">
      <h3>NOSSA PROGRAMAÇÃO</h3>
      <div class="days">
        <Card :isCentered="true" width="100%" height="380px" background="linear-gradient(to right, black, gray)">
          <div class="content">
            <h3>CULTO DE DOMINGO</h3>
            <div class="calendario"><font-awesome-icon :icon="['fas', 'calendar-days']" />
              <p>10h30 | 16h | 18h | 20h</p>
            </div>
            <p>Nossos domingos de celebração são incríveis! Venha ter uma experiência única com Jesus. Oferecemos 4
              cultos; escolha o melhor horário, incluindo opções acessíveis para Libras.</p>
            <Button class="button--Tertiary">CONHECER!</Button>
          </div>
        </Card>
        <Card :isCentered="true" width="100%" height="380px" background="linear-gradient(to right, black, gray)">
          <div class="content">
            <h3>CULTO DA FÉ</h3>
            <div class="calendario"><font-awesome-icon :icon="['fas', 'calendar-days']" />
              <p>QUARTA - 20h</p>
            </div>
            <p>Por que esperar até domingo? Junte-se a nós no Culto Fé às terças-feiras! Estamos ansiosos para te ver
              pessoalmente!</p>
            <Button class="button--Tertiary">CONHECER!</Button>
          </div>
        </Card>
        <Card :isCentered="true" width="100%" height="380px" backgroundImage="/assets/QUEMSOMOS.JPG" :hasOverlay="true">
          <div class="content mudanca">
            <p>Nossos domingos de celebração são incríveis! Venha ter uma experiência única com Jesus. Oferecemos 4
              cultos; escolha o melhor horário, incluindo opções acessíveis para Libras.</p>
            <Button class="button--Tertiary aovivo"  @click="irParaYouTube" >ASSISTIR AOVIVO!</Button>
          </div>
        </Card>
      </div>
    </div>
    <div class="canal">
      <Card  :isCentered="true" class="content" width="100%" height="380px" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="true">
        <h3>CONHEÇA LAGOINHA <br>DE CASA</h3>
      </Card>
      <div class="tube">
        <Card :isCentered="true" width="17rem" height="10rem" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="false">
          <font-awesome-icon :icon="['far', 'circle-play']" />
        </Card>
        <Card width="17rem" height="10rem" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="false">
          <font-awesome-icon :icon="['far', 'circle-play']" />
        </Card>
        <Card width="17rem" height="10rem" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="false">
          <font-awesome-icon :icon="['far', 'circle-play']" />
        </Card>
        <Card width="17rem" height="10rem" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="false">
          <font-awesome-icon :icon="['far', 'circle-play']" />
        </Card>
      </div>
      <Button class="button--fourth"  @click="irParaYouTube">VER MAIS CONTEUDO</Button>
    </div>
    <div class="fale">
      <h3>FALE CONOSCO</h3>
      <div class="content">
        <form>
          <Input v-model="inputValue" placeholder="Nome" size="medium" />
          <Input v-model="inputValue" placeholder="Email" size="medium" />
          <Input v-model="inputValue" placeholder="Whatsapp / Numero" size="medium" />
          <Input v-model="inputValue" placeholder="Mensagem" size="medium" height="100px" />
          <Button class="button--fourth">ENVIAR</Button>
        </form>
        <div class="contato">
          <div class="text">
            <font-awesome-icon :icon="['far', 'envelope']" />
            <div class="name">
              <h4>E-MAIL</h4>
              <p>lagoinhasantos@gmail.com</p>
            </div>
          </div>
          <div class="text">
            <i class="fa-brands fa-whatsapp"></i>
            <div class="name">
              <h4>WHATSAPP</h4>
              <p>(13) 99666-8900</p>
            </div>
          </div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            <div class="name">
              <h4>VISITE-NOS</h4>
              <p>Av. Visconde de São Leopoldo -653</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrossel from '../components/Carrossel.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';

export default {
  name: 'Home',
  components: {
    Carrossel,
    Card,
    Button,
    Input
  },
  data() {
    return {
      imageArray: [
        '/assets/TRIO01.jpg',
        '/assets/TRIO02.jpg',
        '/assets/TRIO03.jpg'
      ],
      showOverlay: true,
      activeDot: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 3000);

    this.animateDots();
  },
  methods: {
    animateDots() {
      let dotIndex = 0;
      setInterval(() => {
        dotIndex = (dotIndex + 1) % 4;
        this.activeDot = dotIndex + 1;
      }, 500);
    },
    irParaWhatsApp() {
      window.location.href = 'https://wa.me/13996668900';
    },
    irParaYouTube() {
      window.location.href = 'https://www.youtube.com/@lagoinhasantos';
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < 500;
    }
  },
  watch: {
    '$route'() {
      this.$nextTick(() => {
        this.isMobile; 
      });
    }
  }
};
</script>


<style scoped>
.home {
  overflow: hidden;
}

.overlay {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fed424;
  z-index: 99999;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.overlay {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.overlay.fade-enter-active,
.overlay.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.overlay.fade-enter, 
.overlay.fade-leave-to {
  opacity: 0;
}

.dots-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin: 0 5px;
  opacity: 0.3;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dot.active {
  opacity: 1;
  transform: translateY(-5px);
}



.overlay .logo_ {
  width: 7rem;
}

.overlay.fade-out {
  opacity: 0;
}

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
  width: 90vw;
  height: auto;
}

.img .logo {
  width: 10rem;
  height: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: auto;
  margin: 0;
}

.cards .card {
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
}

.cards .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 22rem;
  margin-top: 5rem;
  position: relative;
}

.cards .content .centered{
  display: flex;
  flex-direction: column
}

.cards .content svg {
  font-size: 4rem
}

.cards .content h3 {
  font-size: 2rem;
}

.cards .content p {
  font-size: 1.5rem;
  line-height: 1;
}

.button--primary {
  position: absolute;
  bottom: 1rem;
}

.voluntario .card {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.voluntario h3 {
  font-size: 4rem;
  line-height: 1;
}

.button--secondary {
  margin-top: 3rem;
}

.somos {
  width: 100%;
  position: relative;
  color: white;
}

.somos .nos {
  position: absolute;
}

.somos .nos h4 {
  font-size: 2.5rem;
  margin-left: 2rem;
}

.somos .nos {
  display: flex;
  flex-direction: column;
}

.somos .nos::after {
  content: '';
  border: 2px solid #FFC700;
  width: 120%;
}

.somos .nos::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #FFC700;
  border-radius: 50%;
  top: 98%;
  left: 120%;
  transform: translate(-50%, -50%);
}

.somos .sobre {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.somos .sobre p {
  margin-top: 5rem;
  width: 45rem;
  font-size: 1.5rem;
}

.programacao {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: white;
  padding: 2rem 0 0 0;
  align-items: center;

}

.programacao h3 {
  font-size: 4rem;
  letter-spacing: 15px;
}

.programacao .days {
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
  padding: 0 2rem;
}

.programacao .days .card .calendario {
  display: flex;
  align-items: center;
  gap: .4rem;
  font-weight: bold;
}

.programacao .days .card .calendario svg {
  font-size: 2rem;
  color: #FFC700;
}

.programacao .days .card h3 {
  font-size: 1.7rem;
  letter-spacing: 0px;
}

.programacao .days .card p {
  width: 75%;
}

.programacao .days .content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 22rem;
  gap: 1rem;
  padding: 2rem;
  position: relative;
}

.programacao .days .card {
  display: flex;
}

.programacao .days .content .mudanca {
  display: flex;
  justify-content: center;
  height: 22rem;
}

.programacao .days .content .button--Tertiary {
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}

.canal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 3rem 0 0 0;
  position: relative;
}

.canal .card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.canal .button--fourth {
  margin-top: 10rem;
  margin-bottom: 2rem;
  width: 400px;
  font-size: 1.5rem;
  font-weight: bold;
}

.canal .card h3 {
  font-size: 5rem;
  margin-left: 2rem;
  letter-spacing: 10px;
  line-height: 1;
}

.canal .tube {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  bottom: 9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.canal .tube .card {
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}

.canal .tube svg {
  font-size: 3rem;
  color: #FFC700;
  opacity: 20%;
}

.fale {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  gap: 5rem;
  padding: 3rem;
}

.fale h3 {
  font-size: 4.5rem;
  margin-left: 2rem;
  letter-spacing: 10px;
  line-height: 1;
}

.fale .content {
  display: flex;
  gap: 5rem;
  align-items: center;
}

.fale .content form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;
}

.fale .content form::after {
  content: '';
  position: absolute;
  top: 0;
  right: -45px;
  width: 5px;
  height: 100%;
  border-radius: 20rem;
  background: black;
}

.fale .content .contato {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.fale .content .text {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem
}

.fale .content .text svg,
i {
  font-size: 3rem;
  color: #FFC700;
}

.fale .button--fourth {
  font-weight: bold;
  width: 100%;
}

@media (max-width: 1300px) {
  .canal .tube {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .canal .tube .card:nth-child(4) {
    display: none;
  }

}


@media (max-width: 900px) {
  .canal .tube {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .canal .card h3 {
    font-size: 3rem;
  }

  .programacao h3 {
        font-size: 2rem;
    }

  .cards {
    display: flex;
    flex-direction: column
  }

  .voluntario h3 {
    font-size: 2rem;
  }

  .somos .sobre {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;
  }


  .days {
    display: flex;
    flex-direction: column
  }

  .canal .tube .card:nth-child(3) {
    display: none;
  }

  .canal .tube .card:nth-child(4) {
    display: none;
  }

}

@media (max-width: 500px) {
  .img .logo {
    width: 5rem;
    height: auto;
  }

  .img .name {
    width: 20rem;
    height: auto;
  }

  .canal .tube {
    display: flex;
    flex-direction: column;
  }

  .voluntario h3 {
    font-size: 1rem;
  }

  .button--secondary {
    background-color: #FFC700;
    font-size: 1rem;
    width: 15rem;
  }

  .somos .nos h4 {
    font-size: 2rem;
  }

  .somos .sobre p {
    font-size: 1rem;
    width: 90%;
  }

  .programacao h3 {
    font-size: 2rem;
    width: 90%;
  }

  .canal .card h3 {
    font-size: 2rem;
    width: 90%;
  }

  .canal .tube {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    left: 0;
    margin: 1rem 0;
    transform: translateX(0);
    position: static;
    z-index: 10;
  }

  .canal .button--fourth {
    margin: 0
  }

  .fale {
    margin: 0;
  }

  .fale h3 {
    font-size: 2rem;
    margin: 0;
  }

  .fale .content {
    display: flex;
    flex-direction: column-reverse;
  }

  .fale .content form::after {
    content: none;
  }

}
</style>
