<template>
    <div class="input">
        <input :style="inputStyle">
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        altura: {
            type: String,
            default: '200px'
        },
        lagura: {
            type: String,
            default: '100px'
        }
    },
    computed: {

    }
}

</script>

<style scoped></style>