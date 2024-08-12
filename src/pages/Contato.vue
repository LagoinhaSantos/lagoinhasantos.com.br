<template>
    <div class="contato">
        <Card width="100%" height="250px" backgroundImage="/assets/QUEMSOMOS1.png" :hasOverlay="true">
            <h3>CONTATO</h3>
        </Card>
       
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: 'Contato',
    components: {
        Card
    }
}
</script>

<style scoped>

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    font-size: 4rem;
    color: white;
    letter-spacing: 10px;
}



</style>
