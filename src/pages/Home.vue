<template>
  <div>
    <Card altura="500px" largura="100%" background="../src/assets/trio2.jpg">
      <Logo size="1000px" />
      <img src="../assets/passaro.png">
    </Card>
    <div class="cards">
      <Card altura="600px" largura="34%" background="../src/assets/SEJAMEMBRO.JPEG">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'handshake']" />
          <h3>SEJA MEMBRO</h3>
          <p>Está interessado em</p>
          <p>se tornar membro da</p>
          <p>Lagoinha Santos?</p>
          <div class="button">
            <Button variant="primary">CONHECER</Button>
          </div>
        </div>
      </Card>
      <Card altura="600px" largura="34%" background="../src/assets/GCSINICIO.jpg ">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'house-chimney']" />
          <h3>GC’S</h3>
          <p>Descubra o seu grupo de crescimento (GC):</p>
          <p>encontre o lugar</p>
          <p>certo para você!</p>
          <div class="button">
            <Button variant="primary">VER MAIS</Button>

          </div>
        </div>
      </Card>
      <Card altura="600px" largura="34%" background="../src/assets/BATISMO.jpeg">
        <div class="content">
          <font-awesome-icon :icon="['fas', 'water']" />
          <h3>BATISMO</h3>
          <p>Quer se batizar?</p>
          <div class="button">
            <Button variant="primary">QUERO</Button>
          </div>
        </div>
      </Card>
    </div>
    <Card altura="500px" largura="100%" background="../src/assets/TRIO03.jpeg" class="criancas">
      <h3>VENHA FAZER PARTE DO NOSSO <br> TIME DE VOLUNTÁRIOS!</h3>
      <Button variant="secondary">QUERO ME TORNA</Button>
    </Card>
    <div class="text">
      <div class="nos">
        <h3>QUEM SOMOS</h3>
        <div class="point">
          <hr>
          <div></div>
        </div>
      </div>
      <p>Somos uma igreja comprometida com um evangelho que se aproxima e não desiste das pessoas. Aqui, o pecado é
        tratado com rigor, mas o pecador é acolhido com amor. <br>
        Somos um grupo de encorajadores. Deus nos instrui a segurar as mãos uns dos outros e dizer "vamos juntos até o
        fim; ninguém será deixado para trás".<br>
        Somos uma igreja vibrante, evangelizadora e intercessora, enraizada na Palavra e dedicada à comunhão e ao
        discipulado.<br>
        Nossa visão é conduzir cada pessoa a um relacionamento público e crescente com Jesus.<br>
        Como missão, buscamos alcançar 10% da nossa cidade para Lagoinha.
        Lagoinha é Grande em Servir e Pequena em Importar-se.<br>
        BEM-VINDO AO NOVO!
      </p>
      <Card altura="500px" largura="450px" background="../src/assets/QUEMSOMOS.JPEG" />
    </div>
    <div class="programacao">
      <h2>NOSSA PROGRAMAÇÃO</h2>
      <div class="cds">
        <Card altura="400px" largura="400px" gradient="to right, #000000, #737373">
          <div class="int">
            <h3>CULTO DE DOMINGO</h3>
            <div class="horario"><font-awesome-icon icon="calendar-days" />
              <p>10h30 | 16h | 18h | 20</p>
            </div>
            <p>Nossos domingos de celebração são incríveis! Venha ter uma experiência única com Jesus. Oferecemos 4
              cultos; escolha o melhor horário, incluindo opções acessíveis para Libras.
            </p>
            <div class="btn">
              <Button variant="third" class="buton">CONHECER!</Button>
            </div>
          </div>
        </Card>
        <Card altura="400px" largura="400px" gradient="to right, #000000, #737373">
          <div class="int">
            <h3>CULTO DA FÉ</h3>
            <div class="horario"><font-awesome-icon icon="calendar-days" />
              <p>QUARTA - 20h</p>
            </div>
            <p>Por que esperar até domingo? Junte-se a nós no Culto Fé às terças-feiras! Estamos ansiosos para te ver
              pessoalmente!
            </p>
            <div class="btn">
              <Button variant="third" class="buton">CONHECER!</Button>
            </div>
          </div>
        </Card>
        <Card altura="400px" largura="400px" background="../src/assets/QUEMSOMOS.JPEG">
          <div class="int ajuste">
            <p>Não pode comparecer pessoalmente? Leve a Palavra até sua casa de maneira online! Conheça nosso canal no
              YouTube e assista com sua família, confortavelmente em casa.
            </p>
            <Button variant="third" class="butoon">ASSISTIR AOVIVO!</Button>
          </div>
        </Card>
      </div>
    </div>
    <div class="youtube">
      <Card altura="300px" largura="100%" background="../src/assets/QUEMSOMOS.JPEG" class="text">
        <h3>CONHEÇA LAGOINHA <br> DE CASA</h3>
      </Card>
      <div class="cards">
        <Card altura="170px" largura="300px" background="../src/assets/QUEMSOMOS.JPEG" class="center"><font-awesome-icon
            :icon="['far', 'circle-play']" /></Card>
        <Card altura="170px" largura="300px" background="../src/assets/QUEMSOMOS.JPEG" class="center"><font-awesome-icon
            :icon="['far', 'circle-play']" /></Card>
        <Card altura="170px" largura="300px" background="../src/assets/QUEMSOMOS.JPEG" class="center"><font-awesome-icon
            :icon="['far', 'circle-play']" /></Card>
        <Card altura="170px" largura="300px" background="../src/assets/QUEMSOMOS.JPEG" class="center"><font-awesome-icon
            :icon="['far', 'circle-play']" /></Card>
      </div>
      <div class="btn"><Button variant="fourth">VER MAIS CONTEUDO</Button></div>
    </div>
    <div class="contato">
      <h3>FALE CONOSCO</h3>
      <div class="formulario">
        <div class="form">
          <Input />
          <Input />
          <Input />
        </div>
        <div class="contato">
          <div class="email">
            <font-awesome-icon :icon="['far', 'envelope']" />
            <div class="conf">
              <h3>E-MAIL</h3>
              <p>lagoinhasantos@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Logo from '../components/Logo.vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Logo,
    Button
  }
}

</script>

<style scoped>
.cards {
  display: flex;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  color: white;
}

.content svg {
  position: absolute;
  top: 1rem;
  font-size: 5rem;
}

.content h3 {
  position: absolute;
  top: 6rem;
  font-size: 3rem;
  font-weight: bold;
}

.content p {
  font-size: 1.7rem;
}

.content .button {
  position: absolute;
  left: 5rem;
  right: 5rem;
  bottom: 80px;
}

.criancas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.criancas h3 {
  color: white;
  font-size: 3.5rem;
  font-family: "Montserrat", sans-serif;
}

.text {
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 3rem;
  display: flex;
  height: 80%;
  color: white;
}

.text .nos {
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
}

hr {
  position: absolute;
  width: 200px;
  bottom: -10px;
  left: -50px;
  border: 1px solid #FFC700;
}

.text .nos .point div {
  position: absolute;
  bottom: -14px;
  right: -20px;
  width: 10px;
  height: 10px;
  background-color: #FFC700;
  border-radius: 50%;
}

.text p {
  width: 60%;
  height: 22rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;

}

.programacao {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200%;
  width: 100%;
  background-color: white;
  font-family: "Montserrat", sans-serif;
}

.programacao h2 {
  font-size: 3rem;
  margin-top: 4rem;

}

.programacao .cds {
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: white;
}

.programacao .cds .int {
  display: flex;
  height: 100%;
  gap: 2rem;
  position: relative;
  flex-direction: column;
  padding: 1rem;

}

.ajuste {
  justify-content: center;
}

.int .container {
  position: relative;
}

.int h3 {
  font-size: 2rem;
  font-weight: bold;
}

.int p {
  font-weight: bold;
  width: 90%;
}

.buton {
  position: absolute;
  bottom: 0;
  left: 7rem;
  margin-bottom: 2rem;
}

.butoon {
  position: absolute;
  margin-bottom: 2rem;
  bottom: 0;
  left: 5.5rem;

}

.int .horario {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  gap: 1rem;
}

.int .horario svg {
  font-size: 2rem;
  color: #FFC700;
}

.youtube {
  display: flex;
  gap: 10rem;
  flex-direction: column;
  align-items: center;
  height: 600px;
  background-color: #ffffff;
  position: relative;
}

.youtube .text {
  padding: 0 0 0 3rem;
  display: flex;
  height: 100%;
}

.youtube .text h3 {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 3.8rem;
  text-align: start;
  width: 100%;
}


.youtube .cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  position: absolute;
  top: 16rem;
}

.youtube .cards .center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  color: #ffc8005a;
  font-size: 2rem;
  cursor: pointer;
}

.contato {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: red;
}

.contato .formulario .form {
  display: flex;
  flex-direction: column;
}
</style>