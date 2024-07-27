<template>
    <div class="quemsomos">
        <div class="top">
            <Card width="500px" height="250px" backgroundImage="/assets/QUEMSOMOS1.png" :hasOverlay="true"></Card>
            <Card width="500px" height="250px" backgroundImage="/assets/QUEMSOMOS2.png" :hasOverlay="true"></Card>
            <Card width="500px" height="250px" backgroundImage="/assets/QUEMSOMOS3.png" :hasOverlay="true"></Card>
            <h3>QUEM SOMOS</h3>
        </div>
        <div class="somos">
            <div class="nos">
                <h4>QUEM SOMOS</h4>
            </div>
            <div class="sobre">
                <div class="text">
                    <p>A história da Igreja Batista da Lagoinha começou em Belo Horizonte em 20 de dezembro de 1957, e
                        ao longo de 66 anos tem desempenhado um papel significativo na divulgação do evangelho.
                    </p>

                    <p>Inicialmente conhecida como Sexta Igreja Batista, foi fundada por um grupo de 32 pessoas
                        lideradas pelo Pastor José Rêgo do Nascimento.
                        Em 1972, a igreja já contava com 300 membros e passou a ser liderada pelo Pastor Márcio Roberto
                        Vieira Valadão, que há mais de 50 anos tem dedicado sua vida ao pastoreio na Lagoinha e à
                        propagação do Evangelho.</p>

                    <p>Atualmente, sob a liderança do Pastor Presidente André Valadão, a Lagoinha continua a expandir-se
                        dinamicamente, com mais de 600 igrejas estabelecidas e cerca de 120 mil membros em diferentes
                        partes do Brasil e do mundo.
                    </p>

                    <p>Além de seu trabalho de expansão, a Lagoinha também se dedica ao desenvolvimento pessoal através
                        de projetos de ressocialização, atendimento jurídico gratuito, capacitação profissional,
                        assistência espiritual, psicológica e familiar. Esses projetos são realizados pelas Lagoinhas
                        regionais e pelos departamentos internos da sede.
                    </p>

                    <p>O que começou em Belo Horizonte agora se estende até Santos/SP, onde a Lagoinha Santos está
                        comprometida em levar a palavra de Deus a todos, transformando vidas por meio de Cristo e para
                        Cristo.</p>
                </div>
                <div class="card">
                    <Card width="500px" height="600px" backgroundImage="/assets/DANIEL.png">
                    </Card>
                    <p>Pr. Daniel Santana</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: 'QuemSomos',
    components: {
        Card
    }
}

</script>

<style scoped>
.quemsomos {
    position: relative;
}

.quemsomos::after {
    content: '';
    display: block;
    width: 100%;
    border-top: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
}

.top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.top .card {
    flex: 1 1 calc(33.333% - 1rem);
    box-sizing: border-box;
}

.top h3 {
    font-size: 4rem;
    color: white;
    line-height: 1;
    position: absolute;
    z-index: 1;
}

.somos {
    padding: 2rem;
    color: white;
    position: relative;
}

.somos .nos {
  position: absolute;
  display: flex;
  flex-direction: column;
}

.somos .nos h4 {
  font-size: 2.5rem;
}

.somos .nos::after {
  content: '';
  border: 2px solid #FFC700;
  margin-left: -10rem;
  width: 190%;
}

.somos .nos::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #FFC700;
  border-radius: 50%;
  top: 97%;
  left: 120%;
  transform: translate(-50%, -50%);
}


.somos .sobre {
    display: flex;
    align-items: center;
}

.somos .sobre .card {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.somos .sobre .card p {
    font-size: 1.5rem;
    font-weight: bold;
}

.somos .sobre .text {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1.5rem;
}
</style>



