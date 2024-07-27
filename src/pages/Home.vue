<template>
  <div class="home">
    <div class="carrossel-container">
      <Carrossel :width="''" :height="''" :images="imageArray">
        <div class="img">
          <img class="name" src="/assets/NAME.png" />
          <img class="logo" src="/assets/LOGO.png" />
        </div>
      </Carrossel>
    </div>
    <div class="cards">
      <Card width="500px" height="470px" backgroundImage="/assets/SEJAMEMBRO.JPEG" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'handshake-simple']" />
          <h3>SEJA MEMBRO</h3>
          <p>Está interessado em <br> se tornar membro da <br> Lagoinha Santos?</p>

          <Button class="button--primary">CONHECER</Button>
        </div>
      </Card>
      <Card width="500px" height="470px" backgroundImage="/assets/GCSINICIO.jpg" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'house-chimney']" />
          <h3>GC’S</h3>
          <p>Descubra o seu grupo <br> de crescimento (GC): <br> encontre o lugar <br> certo para você!</p>

          <Button class="button--primary">VER MAIS</Button>
        </div>
      </Card>
      <Card width="500px" height="470px" backgroundImage="/assets/BATISMO.jpeg" :hasOverlay="true">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'water']" />
          <h3>BATISMO</h3>
          <p>Quer se batizar?</p>

          <Button class="button--primary">QUERO</Button>
        </div>
      </Card>
    </div>
    <div class="voluntario">
      <Card width="" height="470px" backgroundImage="/assets/FAÇAPARTEDONOSSOTIMEDEVOLUNTÁRIOS.JPG"
        :hasOverlay="true">
        <h3>VENHA FAZER PARTE DO NOSSO <br> TIME DE VOLUNTÁRIOS!</h3>
        <Button class="button--secondary">QUERO ME TORNA</Button>
      </Card>
    </div>
    <div class="somos">
      <div class="nos">
        <h4>QUEM SOMOS</h4>
      </div>
      <div class="sobre">
        <p>Somos uma igreja comprometida com um evangelho que se aproxima e não desiste das pessoas. Aqui, o pecado é
          tratado com rigor, mas o pecador é acolhido com amor.
          Somos um grupo de encorajadores. Deus nos instrui a segurar as mãos uns dos outros e dizer "vamos juntos até o
          fim; ninguém será deixado para trás".
          Somos uma igreja vibrante, evangelizadora e intercessora, enraizada na Palavra e dedicada à comunhão e ao
          discipulado.
          Nossa visão é conduzir cada pessoa a um relacionamento público e crescente com Jesus.
          Como missão, buscamos alcançar 10% da nossa cidade para Lagoinha.
          Lagoinha é Grande em Servir e Pequena em Importar-se.
          BEM-VINDO AO NOVO!
        </p>
        <Card width="500px" height="470px" backgroundImage="/assets/CULTOS.JPG" />
      </div>
    </div>
    <div class="programacao">
      <h3>NOSSA PROGRAMAÇÃO</h3>
      <div class="days">
        <Card width="380px" height="380px" background="linear-gradient(to right, black, gray)">
          <div class="content">
            <h3>CULTO DE DOMINGO</h3>
            <div class="calendario"><font-awesome-icon :icon="['fas', 'calendar-days']" />
              <p>10h30 | 16h | 18h | 20h</p>
            </div>
            <p>Nossos domingos de celebração são incríveis! Venha ter uma experiência única com Jesus. Oferecemos 4
              cultos; escolha o melhor horário, incluindo opções acessíveis para Libras.
            </p>
            <Button class="button--Tertiary">CONHECER!</Button>
          </div>
        </Card>
        <Card width="380px" height="380px" background="linear-gradient(to right, black, gray)">
          <div class="content">
            <h3>CULTO DA FÉ</h3>
            <div class="calendario"><font-awesome-icon :icon="['fas', 'calendar-days']" />
              <p>QUARTA - 20h</p>
            </div>
            <p>Por que esperar até domingo? Junte-se a nós no Culto Fé às terças-feiras! Estamos ansiosos para te ver
              pessoalmente!
            </p>
            <Button class="button--Tertiary">CONHECER!</Button>
          </div>
        </Card>
        <Card width="380px" height="380px" backgroundImage="/assets/QUEMSOMOS.JPG" :hasOverlay="true">
          <div class="content mudanca">
            <p>Nossos domingos de celebração são incríveis! Venha ter uma experiência única com Jesus. Oferecemos 4
              cultos; escolha o melhor horário, incluindo opções acessíveis para Libras.
            </p>
            <Button class="button--Tertiary aovivo">ASSISTIR AOVIVO!</Button>
          </div>
        </Card>
      </div>
    </div>
    <div class="canal">
      <Card class="content" width="100%" height="380px" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="true">
        <h3>CONHEÇA LAGOINHA <br>DE CASA</h3>
      </Card>
      <div class="tube">
        <Card width="17rem" height="10rem" backgroundImage="/assets/QUEMSOMOS.JPEG" :hasOverlay="false">
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
      <Button class="button--fourth">VER MAIS CONTEUDO</Button>
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
              <p>(13) 0000-0000</p>
            </div>
          </div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            <div class="name">
              <h4>VISITE-NOS</h4>
              <p>Rua. Carvalho de Mendonça 74 Santos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrossel from '../components/Carrossel.vue';
import Card from '../components/Card.vue'
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';

export default {
  name: 'home',
  components: {
    Carrossel,
    Card,
    Button,
    Input,
  },
  data() {
    return {
      imageArray: [
        '/assets/TRIO01.jpg',
        '/assets/TRIO02.jpg',
        '/assets/TRIO03.jpg'
      ],
    };
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

.img .logo {
  width: 10rem;
  height: auto;
}

.cards {
  display: flex;
  justify-content: center;
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
  padding: 3rem 0 0 0 ;
  position: relative;
}

.canal .card {
  display: flex;
  align-items: center;
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
  z-index: 100;
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
  padding: 3rem ;
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

.fale .content .text svg, i{
  font-size: 3rem;
  color: #FFC700;
}

.fale .button--fourth {
  font-weight: bold;
  width: 100%;
}

</style>
