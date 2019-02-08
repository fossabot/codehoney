<template>
    <div class="Toolbar">
        <svgicon @click="copy" icon="copy" morphTo="copy-2" fill="#f4b865" />
        <svgicon @click="beautify" icon="tidy" morphTo="tidy-2" fill="#5EB5B1" />
        <svgicon @click="expand" icon="expand" morphTo="expand-2" fill="#59A6D0"/>
        <svgicon @click="remove" icon="bin" hint="remove" morphTo="bin-2" fill="#F05D5E" />
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
        expand() {
            this.$emit('expand');
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
    position: fixed;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 25px 20px;
    background-color: rgba(255, 255, 255, 0.05);

    .Icon {
        cursor: pointer;
        margin-bottom: 25px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

</style>
