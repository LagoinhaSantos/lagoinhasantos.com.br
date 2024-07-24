<template>
    <div class="logo">
        <img :src="logoSrc" :style="{ width: size, height: size2 }">
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const logo = defineProps({
    size: {
        type: String,
        default: '100px'
    },
    size2: {
        type: String,
        default: 'auto'
    },
    logoSrc: {
        type: String,
        default: '../src/assets/logo.png'
    }
});
</script>

<style scoped>
.logo {
    cursor: pointer;
}
</style>