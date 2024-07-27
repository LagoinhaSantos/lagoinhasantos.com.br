<template>
    <div class="dizimo">
        <div class="top">
            <h3>DÍZIMOS E OFERTAS</h3>
        </div>
        <Card width="100%" height="250px" backgroundImage="/assets/QUEMSOMOS1.png" :hasOverlay="true">
            <p>Faça sua contribuição através de uma das nossas contas <br> bancárias.</p>
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
            <p>DÍZIMOS E <br>
                OFERTAS</p>
            <img src="/public/assets/PIX.png">
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

.top h3 {
    font-size: 4rem;
    line-height: 1;
    position: relative;
    padding: 0 0.5rem;
    letter-spacing: 0.1em;
}

.top h3::before {
    content: '';
    position: absolute;
    width: 336%;
    border-top: 4px solid #FFC700;
    border-radius: 10px;
    bottom: -1rem;
    left: -100rem;
    transform: translateY(-50%);
}

.top h3::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #FFC700;
    border-radius: 50%;
    top: 110%;
    left: 82%;
    transform: translate(-50%, 0);
}

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

</style>
