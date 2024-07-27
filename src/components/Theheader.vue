<template>
    <header>
        <div class="theheader">
            <div class="top">
                <Logo src="../assets/TRIO02.JPEG" width="350px" height="auto" />
            </div>
            <div class="nav">
                <router-link v-for="(link, index) in links" :key="index" :to="`/${link.url}`"
                    exact-active-class="active">
                    {{ link.text }}
                </router-link>
            </div>
            <i></i>
        </div>
    </header>
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
                { text: 'QUEM SOMOS', url: 'QuemSomos' },
                { text: 'CULTOS', url: 'Cultos' },
                { text: 'DÍZIMOS E OFERTAS', url: 'Dizimo' },
                { text: 'CURSOS', url: 'Cursos' },
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

.nav a {
    display: flex;
    color: white;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    position: relative;
    padding: .2em .4em;
}

.nav a::before,
.nav a::after {
    content: '';
    height: 5px;
    width: 5px;
    position: absolute;
    transition: all .35s ease;
    opacity: 0;
}

.nav a::before {
    content: '';
    right: 0;
    top: 0;
    border-top: 3px solid #FFC700;
    border-right: 3px solid #FFC700;
    transform: translate(-100%, 50%);
}

.nav a::after {
    content: '';
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #e0b829;
    border-left: 3px solid #FFC700;
    transform: translate(100%, -50%);
}

.nav a:hover::before,
.nav a:hover::after {
    transform: translate(0, 0);
    opacity: 1;
}

.nav a:hover {
    color: #FFC700;
}

.nav a.active {
    color: #FFC700;
}

.nav a.active::before,
.nav a.active::after {
    opacity: 1;
    transform: translate(0, 0);
}

i {
    width: 100%;
    border: 1px solid white;
    margin-top: 2rem;
}
</style>
