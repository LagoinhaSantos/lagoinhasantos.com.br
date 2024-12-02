<template>
    <div class="dizimo">
        <div class="top">
            <h3>DÍZIMOS E OFERTAS</h3>
            <div class="bolinha"></div>
        </div>
        <Card width="100%" height="250px" backgroundImage="/assets/IMG_2021.JPG" :hasOverlay="true">
            <p>Faça sua contribuição através de uma das nossas contas bancárias.</p>
        </Card>
        <div class="bdy">
            <div class="banco"><font-awesome-icon :icon="['fab', 'pix']" />
                <p>AG 3650 C/C 13004578-4</p>
            </div>
            <div class="banco"><font-awesome-icon :icon="['fab', 'pix']" />
                <p>CNPJ 38.029.306/0001-43</p>
            </div>
            <div class="social">
                <h4>RAZÃO SOCIAL</h4>
                <p>PRIMEIRA IGREJA BATISTA DA LAGOINHA S</p>
            </div>
        </div>
        <div class="pix">
            <p class="name_diferente">DÍZIMOS E <br>
                OFERTAS</p>
            <img src="/public/assets/PIX.png" @click="copyToClipboard">
            <span class="click">{{ copyStatus }}</span>
            <p>INVISTA EM <br>
                UM NOVO !</p>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: 'Dizimo',
    components: {
        Card
    },
    data() {
        return {
            copyStatus: 'CLICK NO QRCODE PARA COPIAR A CHAVE',
            copyKey: '12345' 
        };
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.copyKey).then(() => {
                this.copyStatus = 'COPIADO!';
                
                setTimeout(() => {
                    this.copyStatus = 'CLICK NO QRCODE PARA COPIAR A CHAVE';
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar para a área de transferência: ', err);
            });
        }
    }
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 150px;
}

.click {
    display: none;
}

.top {
    position: relative;

}

.top h3 {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    line-height: 1;
    padding: 0 0.5rem;
    letter-spacing: 0.1em;
}

.top h3::after {
    position: relative;
    content: '';
    border: 2px solid #FFC700;
    width: 90%;
    left: -5%; 
    bottom: -1rem;
}
/* 
.top .bolinha {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #FFC700;
    border-radius: 50%;
    bottom: 15px;
    right: 10%;

    transform: translateX(50%) translateY(-50%);
} */

.dizimo {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    overflow: hidden;
}

.dizimo .card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.dizimo .card p {
    font-size: 3rem;
    line-height: 1;
}

.bdy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 2rem;
}

.bdy .social {
    text-align: center;
}

.bdy .social p {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-weight: 400;
}

.pix {
    margin: 5rem 0;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
    color: white;
}

.social h4 {
    color: #FFC700;
}

.pix p {
    font-size: 4rem;
    font-weight: bold;
    line-height: 1;
}

.dizimo::after {
    content: '';
    display: block;
    width: 100vw;
    border-top: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
}

@media (max-width: 500px) {
    .top h3 {
    font-size: 3rem;
    line-height: 0.9;
    padding: 0 0.5rem;
    letter-spacing: 0.05em;
}
/* 
.top h3::after {
    content: '';
    border: 2px solid #FFC700;
    width: 100%;
    position: absolute;
    left: -5%; 
    transform: translateX(-50%);
    bottom: -1rem;
}

.top h3::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #FFC700;
    border-radius: 50%;
    bottom: -1.6rem; 
    right: 13rem;
    transform: translateX(50%) translateY(-50%);
} */

.dizimo .card p {
    font-size: 1.2rem;
    padding: 0 1rem;
}

.bdy {
    font-size: 1.5rem
}

.bdy .social p {
    font-size: .8rem;
}

.pix {
    margin: 2rem 0;
    flex-direction: column;
}

.pix  img{
    width: 8rem;
}

.name_diferente {
    display: none;
}

.pix p {
    font-size: 2.5rem;
}            

.click {
    display: flex;
    font-size: 1rem;
    margin-top: -2rem;
}
}

@media (max-width: 981px) {
    .pix  img{
    width: 8rem;
}
    .pix p {
        font-size: 3rem;
    }
}
</style>
