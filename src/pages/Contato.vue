<template>
    <div class="contato">
        <Card width="100%" isCentered="true" height="250px" backgroundImage="/assets/QUEMSOMOS1.png" :hasOverlay="true">
            <h3 class="title">CONTATO</h3>
        </Card>
        <div class="content">
            <h2>DÚVIDAS OU PEDIDOS DE ORAÇÃO?</h2>
            <p>Deixa aqui sua dúvida ou o motivo de oração e seus contatos. <br>
                Assim que possível, leremos com carinho e incluiremos seus <br> pedidos nas orações oficiais da igreja.
            </p>
            <form>
                <Input v-model="inputValue" :size="inputSize" height="3rem" />
                <Input v-model="inputValue" :size="inputSize" height="3rem" />
                <Input v-model="inputValue" :size="inputSize" height="3rem" />
                <Input v-model="inputValue" :size="inputSize" height="10rem" />
                <Button class="button--fifty">ENVIAR</Button>
            </form>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default {
    name: 'Contato',
    components: {
        Card,
        Input,
        Button
    },
    data() {
        return {
            inputValue: ''
        }
    },
    computed: {
        // Computed para determinar o tamanho do Input com base na largura da janela
        inputSize() {
            return this.windowWidth <= 500 ? 'medium' : 'large';
        },
        windowWidth() {
            return window.innerWidth;
        }
    },
    mounted() {
        // Atualiza o tamanho do input quando a janela é redimensionada
        window.addEventListener('resize', this.updateWidth);
    },
    destroyed() {
        // Remover o listener quando o componente for destruído
        window.removeEventListener('resize', this.updateWidth);
    },
    methods: {
        // Método para atualizar o valor de windowWidth
        updateWidth() {
            this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped>
.contato {
    position: relative;
    color: white;
    width: 100%;
    overflow: hidden;
}

.contato::after {
    content: '';
    display: block;
    width: 100vw;
    border-top: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.title {
    font-size: 4rem;
    letter-spacing: 15px;
    position: relative;
    margin: 0;
}

.content {
    margin: 4rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content::after {
    content: '';
    display: block;
    width: 100vw;
    border-top: 2px solid white;
    position: absolute;
    bottom: -4rem;
    left: 0;
    z-index: 1;
}

.content h2 {
    font-size: 1.7rem;
}

.content p {
    margin: 1rem 0 4rem 0;
    text-align: center;
    font-size: 1.6rem;
}

form {
    display: flex;
    gap: 2.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (max-width: 500px) {
    .content {
        text-align: center;
    }

    .content h2 {
        font-size: 1.4rem;
    }

    .content p {
        font-size: 1rem;
    }
}
</style>
