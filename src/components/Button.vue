<template>
    <button :class="computedClass" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        variant: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        computedClass() {
            return `btn-${this.variant}`;
        }
    }
};
</script>

<style scoped>
.btn-primary {
    background-color: transparent;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: white;
    padding: .7rem 4rem;
    font-size: 1.7rem;
    border: 1px solid white;
    border-radius: .5rem;
    cursor: pointer;
}

.btn-secondary {
    background-color: #FFC700;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: black;
    padding: .7rem 6rem;
    font-size: 1.7rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
}

.btn-third{
    background-color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: black;
    padding: .7rem 2rem;
    font-size: 1rem;
    border-radius: .7rem;
    border: none;
    cursor: pointer;
}

.btn-fourth {
    background-color: #000000;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: rgb(255, 255, 255);
    padding: .7rem 6rem;
    font-size: 1.7rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
}
</style>