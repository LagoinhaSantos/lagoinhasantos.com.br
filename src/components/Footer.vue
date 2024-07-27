<template>
    <div class="footer">
        <div class="content">
            <div class="logo">
                <img src="/public/assets/LOGOSANTOS.png" alt="logo">
                <p>Seja bem-vindo à Lagoinha Santos! Esteja pronto <br> para ser impactado pela mensagem da Cruz.</p>
                <p>Nosso foco é em servir a Deus e amar as <br> pessoas, entendendo que é assim que <br>cumprimos nosso propósito.</p>
                <p>Nós amamos, vivemos e servimos!</p>
                <p>SEJA PARTE DO NOVO!</p>
            </div>
            <div class="redes">
                <router-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="`/${link.url}`"
                    exact-active-class="active"
                >
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
</template>

<script>
export default {
    name: 'Footer',
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
}
</script>

<style scoped>
.footer {
    padding: 2rem 3rem;
    color: white;
}

a {
    text-decoration: none;
    color: white;
}

.footer .content {
    display: flex;
    justify-content: space-between;
}

.footer .content .redes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "Montserrat", sans-serif;
}

.footer .content .redes p {
    cursor: pointer;
    margin: 0;
}

.footer .content .redes .active p {
    color: #FFC700; 
}

.footer .content .logo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer .content .social {
    display: flex;
    gap: 2rem;
    font-size: 2rem;
}

.footer .content .social i {
    cursor: pointer;
}

.footer .logo img {
    width: 12rem;
    height: 5rem;
}

.footer .content .maps {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
}

.footer .content .maps p {
    text-decoration: underline;
    cursor: pointer;
}

.footer .direitos {
    margin-top: 2rem;
    color: gray;
}
</style>
