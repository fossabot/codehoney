<template>
    <div class="Toolbar">
        <span @click="copy">
            <svgicon icon="copy"/>
        </span>
        <span @click="beautify">
            <svgicon icon="tidy"/>
        </span>
        <span @click="remove">
            <svgicon icon="bin"/>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Toolbar',
    components: {},
    props: {
        title: String,
        description: String,
    },
    methods: {
        copy(code) {
            this.$emit('copy');
        },
        remove() {
            this.$emit('remove');
        },
        beautify() {
            this.$emit('beautify');
        },
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Toolbar {
    position: absolute;
    right: 40px;
    top: 40px;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    user-select: none;

    span {
        cursor: pointer;

    }
}

</style>
