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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.7980892305827!2d-46.339522224577095!3d-23.932202875321234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce049bb0dcec47%3A0x72643a850eb39a9!2sAv.%20Visconde%20de%20S%C3%A3o%20Leopoldo%2C%20653%20-%20Centro%2C%20Santos%20-%20SP%2C%2011010-201!5e0!3m2!1spt-BR!2sbr!4v1732688938965!5m2!1spt-BR!2sbr"
                        width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>Política de Privacidade</p>
                </div>
            </div>
            <p class="direitos">Lagoinha Santos - Todos os direitos reservados © 2024</p>
            <p class="name">Site feito com muito amor | <a href="javascript:void(0);" @click="irParaWhatsApp">Victor Lima</a>💙</p>
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
        irParaWhatsApp() {
        window.open('https://wa.me/13991822130', '_blank');
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

.name {
    color: gray;
    font-size: small;
}

.name a {
    text-decoration: underline;
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

@media (max-width: 940px) {
    .thefooter {
        padding: 2rem 1rem;
        color: white;
    }

    .thefooter .direitos,
    .name {
        text-align: center;
    }


    iframe {
        width: 100%;
        height: auto;
        margin-top: 2rem;
    }

    .logo p {
        font-size: 1rem;
    }
}

@media (max-width: 500px) {

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
    }

    .thefooter .content .redes {
        display: none;
    }
}
</style>
