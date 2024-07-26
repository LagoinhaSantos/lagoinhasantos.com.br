<template>
    <div class="input">
        <input :type="type" :placeholder="placeholder"
            :style="{ width: computedWidth, height: height, border: computedBorder }" :value="value"
            @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small', 'medium', 'large'].includes(value);
            }
        },
        value: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        height: {
            type: String,
            default: 'auto'
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        computedWidth() {
            switch (this.size) {
                case 'small':
                    return '150px';
                case 'medium':
                    return '300px';
                case 'large':
                    return '450px';
                default:
                    return '300px';
            }
        },
        computedBorder() {
            return this.border ? '1px solid black' : 'none';
        }
    }
}
</script>

<style scoped>
input {
    border: none;
    border-radius: .5rem;
    padding: .5rem;
}
</style>