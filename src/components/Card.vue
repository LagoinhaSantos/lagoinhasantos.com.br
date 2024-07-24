<template>
    <div :style="cardStyles" class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        altura: {
            type: String,
            default: '200px'
        },
        largura: {
            type: String,
            default: '300px'
        },
        cor: {
            type: String,
            default: ''
        },
        background: {
            type: String,
            default: ''
        },
        gradient: {
            type: String,
            default: ''
        }
    },
    computed: {
        cardStyles() {
            if (this.gradient && this.background) {
                return {
                    backgroundColor: this.cor,
                    height: this.altura,
                    width: this.largura,
                    backgroundImage: `linear-gradient(${this.gradient}), url(${this.background})`
                };
            } else if (this.gradient) {
                return {
                    backgroundColor: this.cor,
                    height: this.altura,
                    width: this.largura,
                    backgroundImage: `linear-gradient(${this.gradient})`
                };
            } else if (this.background) {
                return {
                    backgroundColor: this.cor,
                    height: this.altura,
                    width: this.largura,
                    backgroundImage: `url(${this.background})`
                };
            } else {
                return {
                    backgroundColor: this.cor,
                    height: this.altura,
                    width: this.largura
                };
            }
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 4rem;
}
</style>
