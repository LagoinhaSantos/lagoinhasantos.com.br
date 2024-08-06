<template>
    <button :class="buttonClass" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        buttonClass() {
            return ['button', this.className];
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>

<style scoped>
.button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 0.3rem 0rem;
    width: 10rem;
    transition: background-color 0.3s;
}

.button--primary {
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    border: 0.5px solid white;
    transition: all .5s ease;
}

.button--primary:hover {
    color: black;
    background-color: #fff;
}

.button--secondary {
    background-color: #FFC700;
    font-weight: bold;
    font-size: 1.4rem;
    padding: .5rem 0;
    width: 27rem;
    border-radius: 2rem;
    transition: all .5s ease;
}

.button--secondary:hover {
    background-color: #ffc8006e;
    color: white;
}

.button--Tertiary {
    font-weight: bold;
    background-color: white;
    font-size: 1.1rem;
    border-radius: .5rem;
    padding: .3rem 0;
    transition: all .5s ease;
}

.button--Tertiary:hover {
    color: white;
    background-color: #000000;
}

.aovivo:hover {
    background-color: #f90000;
    color: white;
}

.button--fourth {
    background-color: #000000;
    color: white;
    font-size: 1.1rem;
    border-radius: .5rem;
    padding: .5rem 0;
    transition: all .5s ease;
}

.button--fourth:hover {
    background-color: #FFC700;
    color: white;
}

.button--fifty {
    background-color: #FFC700;
    font-weight: bold;
    font-size: 1.4rem;
    padding: .5rem 0;
    width: 13rem;
    border-radius: 2rem;
    transition: all .5s ease;
}

 .button--fifty:hover {
    background-color: #ffc8006e;
    color: white;
}
</style>