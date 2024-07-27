<template>
    <router-link to="/">
        <div class="logo">
            <img src="/public/assets/NAME.png" :alt="alt" :style="{ width: width, height: height }">
        </div>
    </router-link>
</template>

<script>

export default {
    name: 'Logo',
    props: {
        alt: {
            type: String,
            default: 'Logo'
        },
        width: {
            type: String,
            default: '100px'
        },
        height: {
            type: String,
            default: 'auto'
        }
    }
}

</script>

<style scoped>
img {
    display: block;
    cursor: pointer;
}
</style>