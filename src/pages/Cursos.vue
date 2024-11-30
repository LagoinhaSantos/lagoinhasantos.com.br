<template>
    <div class="cursos">
        <div class="top">
            <h3>&nbsp;CURSOS</h3>
        </div>
        <div class="content">
            <div class="libras">
                <Card :width="cardWidth" :height="cardHeight" backgroundImage="/assets/LIBRAS.png" />
            </div>
            <div class="tex">
                <h4>CURSO DE <br> LIBRAS</h4>
                <p>Participe do curso de Libras na Lagoinha Santos e aprenda a Língua Brasileira de Sinais para promover
                    inclusão e comunicação eficaz com pessoas surdas. Descubra gestos, sinais e a cultura surda,
                    contribuindo para um ambiente mais inclusivo em nossa comunidade. Junte-se a nós nessa jornada de
                    aprendizado da linguagem do amor e da inclusão.</p>
                <p>CURSO DE LIBRAS: Segunda 20h, Quarta 18h, Sábado 10h</p>
                <p>LOCALIZAÇÃO: Rua Carvalho de Mendonça, 74, Santos, SP, Brasil</p>
                <Button class="button--fifty">SAIBA MAIS</Button>
            </div>
        </div>
        <div class="content">
            <div class="tex text">
                <h4>CURSO DE <br> LIBRAS</h4>
                <p>Participe do curso de Libras na Lagoinha Santos e aprenda a Língua Brasileira de Sinais para promover
                    inclusão e comunicação eficaz com pessoas surdas. Descubra gestos, sinais e a cultura surda,
                    contribuindo para um ambiente mais inclusivo em nossa comunidade. Junte-se a nós nessa jornada de
                    aprendizado da linguagem do amor e da inclusão.</p>
                <p>CURSO DE LIBRAS: Segunda 20h, Quarta 18h, Sábado 10h</p>
                <p>LOCALIZAÇÃO: Rua Carvalho de Mendonça, 74, Santos, SP, Brasil</p>
                <Button class="button--fifty">SAIBA MAIS</Button>
            </div>
            <div class="libras">
                <Card :width="cardWidth" :height="cardHeight" backgroundImage="/assets/espanhol.jpg" />
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
    },
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    computed: {
        cardHeight() {
            return this.windowWidth <= 500 ? '17rem' : '500px';
        },
        cardWidth() {
            return this.windowWidth <= 500 ? '17rem' : '400px';
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    },
    methods: {
        updateWidth() {
            this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped>
.cursos {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding-bottom: 2rem;
}

.cursos::after {
    content: '';
    display: block;
    width: 100vw;
    border-top: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
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
    left: -16%;
    transform: translateX(-50%);
}

.content {
    display: flex;
    color: white;
    align-items: center;
    gap: 8rem;
    overflow: hidden;
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

.content .tex h4 {
    font-size: 4rem;
    line-height: 1;
    letter-spacing: 0.1em;
}

@media (max-width: 1250px) {
    .content .tex h4 {
        font-size: 3rem;
    }

    .content .tex {
        width: 30rem;

    }
    

    .content .tex p {
        font-size: 1rem;
    }
    
    .content {
        gap: 2rem;
    }
}

@media (max-width: 850px) {
    .content .tex {
        width: 17rem;

    }
}

@media (max-width: 500px) {

    .cursos .top {
        display: flex;
        height: 150px;
        align-items: center;
        justify-content: center;
    }

    .cursos .top h3 {
        font-size: 3rem;
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
        width: 90%;
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
        top: 91%;
        left: 4%;
        transform: translateX(-50%);
    }

    .content {
        flex-direction: column;
        gap: 3rem;
    }

    .content:last-child {
        flex-direction: column-reverse;
        margin-bottom: 5rem;
    }

    .content .tex h4 {
        font-size: 2rem;
    }

    .content .tex {
        align-items: center;
        text-align: center;
        width: 93%;
    }

    .content .tex p {
        font-size: .8rem;
    }
}
</style>
