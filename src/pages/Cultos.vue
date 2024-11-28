<template>
    <div class="cultos">
        <div class="top">
            <h3>CULTOS</h3>
        </div>
        <Card 
            class="card" 
            width="100%" 
            :height="cardHeight" 
            backgroundImage="/assets/IMG_1988.JPG" 
            :hasOverlay="true"
        >
            <div class="content">
                <p>"Nenhum membro de um corpo pode subsistir <br> sozinho, sem o resto do corpo." <br>
                    (1 Coríntios 12:21-22)</p>

                <div class="dias">
                    <h2>CULTO DE DOMINGO</h2>
                    <p>10h30 <span><font-awesome-icon icon="hands" /></span> | 16h <span><font-awesome-icon
                                icon="fa-solid fa-hands" /></span> | 18h | 20h</p>
                </div>
                <div class="dias">
                    <h2>CULTO DE QUARTA</h2>
                    <p>20h</p>
                </div>
                <h4><span><font-awesome-icon icon="fa-solid fa-hands" /></span>acessível em libras</h4>
            </div>
        </Card>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: 'Cultos',
    components: {
        Card
    },
    data() {
        return {
            windowWidth: window.innerWidth,  
        };
    },
    computed: {
        cardHeight() {
            return this.windowWidth <= 500 ? '80vh' : '140vh';
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
};
</script>

<style scoped>
.cultos {
    color: white;
    position: relative;
    overflow: hidden;
}

.cultos::after {
    content: '';
    display: block;
    width: 100vw;
    border-top: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.cultos .top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
}

.cultos .top h3 {
    font-size: 4rem;
    letter-spacing: 15px;
    position: relative;
    margin: 0;
}

.cultos .top h3::after {
    content: '';
    position: absolute;
    border: 2px solid #FFC700;
    bottom: -2px;
    left: 9rem;
    width: 110%;
    border-radius: 10px;
    transform: translateX(-52%);
}

.cultos .top h3::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #FFC700;
    border-radius: 50%;
    top: 94%;
    left: 105%;
    transform: translateX(-50%);
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8rem;
}

.content {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8rem;
}

.content p {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.5rem;
}

.content .dias h2 {
    font-size: 3rem;
    color: #FED424;
}

.content .dias p {
    font-size: 2rem;
    font-weight: bold;
}

.content h4 {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    gap: 1rem;
}

@media (max-width: 500px) {
    .content p {
        font-size: 1rem;
        letter-spacing: .08rem;
    }

    .content {
        gap: 4rem;
    }

    .cultos .card {
        height: 100vh;
    }

    .content .dias h2 {
        font-size: 2rem;
    }

    .content .dias p {
        font-size: 1rem;
    }
}
</style>
