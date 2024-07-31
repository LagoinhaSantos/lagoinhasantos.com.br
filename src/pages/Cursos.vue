<template>
    <div class="cursos">
        <div class="top">
            <h3>CURSOS</h3>
        </div>
        <div class="content">
            <div class="libras">
                <Card width="300px" height="370px" backgroundImage="/assets/LIBRAS.png"/>
            </div>
            <div class="tex">
                <h4>CURSO DE <br>
                    LIBRAS</h4>
                <p>Participe do curso de Libras na Lagoinha Santos e aprenda a Língua Brasileira de Sinais para promover
                    inclusão e comunicação eficaz com pessoas surdas. Descubra gestos, sinais e a cultura surda,
                    contribuindo para um ambiente mais inclusivo em nossa comunidade. Junte-se a nós nessa jornada de
                    aprendizado da linguagem do amor e da inclusão.</p>
                <p>CURSO DE LIBRAS: Segunda 20h, Quarta 18h, Sábado 10h</p>
                <p>LOCALIZAÇÃO: Rua Carvalho de Mendonça, 74, Santos, SP, Brasil</p>
                <Button>SAIBA MAIS</Button>
            </div>
        </div>
        <div class="content">
            <div class="tex text">
                <h4>CURSO DE <br>
                    LIBRAS</h4>
                <p>Participe do curso de Libras na Lagoinha Santos e aprenda a Língua Brasileira de Sinais para promover
                    inclusão e comunicação eficaz com pessoas surdas. Descubra gestos, sinais e a cultura surda,
                    contribuindo para um ambiente mais inclusivo em nossa comunidade. Junte-se a nós nessa jornada de
                    aprendizado da linguagem do amor e da inclusão.</p>
                <p>CURSO DE LIBRAS: Segunda 20h, Quarta 18h, Sábado 10h</p>
                <p>LOCALIZAÇÃO: Rua Carvalho de Mendonça, 74, Santos, SP, Brasil</p>
                <Button>SAIBA MAIS</Button>
            </div>
            <div class="libras">
                <Card width="300px" height="370px" backgroundImage="/assets/ESPANHOL.png" />
            </div>  
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
    name: 'Cursos',
    components: {
        Card,
        Button
    }
}

</script>

<style scoped>
.cursos {
    display: flex;
    gap: 9rem;
    flex-direction: column;
    align-items: center;
}

.cursos .top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    height: 250px;

}

.cursos .top h3 {
    font-size: 4rem;
    letter-spacing: 15px;
    position: relative;
    margin: 0;
}

.cursos .top h3::after {
    content: '';
    position: absolute;
    border: 2px solid #FFC700;
    bottom: -2px;
    left: 9rem;
    width: 110%;
    border-radius: 10px;
    transform: translateX(-52%);
}

.cursos .top h3::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #FFC700;
    border-radius: 50%;
    top: 94%;
    left: -10%;
    transform: translateX(-50%);
}

.content {
    display: flex;
    color: white;
    align-items: center;
    gap: 3rem;
}

.content .tex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 700px;
    font-size: 1.2rem;
}


.content .text {
    align-items: end;
    text-align: end;
}
</style>
