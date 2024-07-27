<template>
    <footer>
        <div class="thefooter">
            <div class="content">
                <div class="logo">
                    <img src="/public/assets/LOGOSANTOS.png" alt="logo">
                    <p>Seja bem-vindo à Lagoinha Santos! Esteja pronto <br> para ser impactado pela mensagem da Cruz.
                    </p>
                    <p>Nosso foco é em servir a Deus e amar as <br> pessoas, entendendo que é assim que <br>cumprimos
                        nosso propósito.</p>
                    <p>Nós amamos, vivemos e servimos!</p>
                    <p>SEJA PARTE DO NOVO!</p>
                </div>
                <div class="redes">
                    <router-link v-for="(link, index) in links" :key="index" :to="`/${link.url}`"
                        exact-active-class="active" @click.native="handleLinkClick(link.url, $event)">
                        <p>{{ link.text }}</p>
                    </router-link>

                    <div class="social">
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div class="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.2613971826486!2d-46.329050525405854!3d-23.95119507602847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03eaa0927381%3A0x9d53e12e248c8e4!2sIgreja%20Batista%20da%20Lagoinha%20Santos!5e0!3m2!1spt-BR!2sbr!4v1722006739613!5m2!1spt-BR!2sbr"
                        width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>Política de Privacidade</p>
                </div>
            </div>
            <p class="direitos">Lagoinha Santos - Todos os direitos reservados © 2024</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
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
    },
    methods: {
        handleLinkClick(url, event) {
            event.preventDefault(); 

            this.scrollToTop(1000); 

            this.$router.push({ path: `/${url}` });

            this.$nextTick(() => {
                const activeLink = document.querySelector('.redes a.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                }

                const clickedLink = document.querySelector(`.redes a[href*="${url}"]`);
                if (clickedLink) {
                    clickedLink.classList.add('active');
                }
            });
        },
        scrollToTop(duration) {
            const start = window.scrollY;
            const startTime = performance.now();

            const step = (timestamp) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                window.scrollTo(0, start - start * easeInOutQuad(progress));

                if (elapsed < duration) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        }
    }
}
</script>

<style scoped>
.thefooter {
    padding: 2rem 3rem;
    color: white;
}

a {
    text-decoration: none;
    color: white;
}

.thefooter .content {
    display: flex;
    justify-content: space-between;
}

.thefooter .content .redes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "Montserrat", sans-serif;
}

.thefooter .content .redes p {
    cursor: pointer;
    margin: 0;
}

.thefooter .content .redes .active p {
    color: #FFC700;
}

.thefooter .content .logo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.thefooter .content .social {
    display: flex;
    gap: 2rem;
    font-size: 2rem;
}

.thefooter .content .social i {
    cursor: pointer;
}

.thefooter .logo img {
    width: 12rem;
    height: 5rem;
}

.thefooter .content .maps {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
}

.thefooter .content .maps p {
    text-decoration: underline;
    cursor: pointer;
}

.thefooter .direitos {
    margin-top: 2rem;
    color: gray;
}
</style>
