<template>
    <div class="theheader">
        <div class="top"> 
            <Logo src="../assets/TRIO02.JPEG" width="350px" height="auto"/> 
        </div>
        <div class="nav">
            <a v-for="(link, index) in links" :key="index" :href="`#${link.url}`">{{ link.text }}</a>
        </div>
        <i></i>
    </div>
</template>

<script>
import Logo from './Logo.vue';
export default {
    name: 'TheHeader',
    components: {
        Logo,
    },
    data() {
        return {
            links: [
                { text: 'QUEM SOMOS', url: 'quem-somos' },
                { text: 'CULTOS', url: 'cultos' },
                { text: 'DÍZIMOS E OFERTAS', url: 'dizimos-e-ofertas' },
                { text: 'CURSOS', url: 'cursos' },
                { text: 'CONTATO', url: 'contato' }
            ]
        };
    }
};
</script>

<style scoped>
.theheader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.top {
    padding-top: 1rem;
}

img {
    width: 20rem;
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-top: 1.5rem;
}

a {
    display: flex;
    color: white;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
}

i {
    width: 100%;
    border: 1px solid white;
    margin-top: 2rem;
}
</style>