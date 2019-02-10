<template>
    <div class="Toolbar">
        <svgicon @click="copy" icon="copy" hint="copied" morphTo="copy-2" fill="#f4b865" />
        <svgicon @click="beautify" icon="tidy" hint="tidy!" morphTo="tidy-2" fill="#5EB5B1" />
        <svgicon @click="expand" icon="expand" hint="swishh" morphTo="expand-2" fill="#59A6D0"/>
        <svgicon @click="remove" icon="bin" hint="removed" morphTo="bin-2" fill="#F05D5E" />
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
    top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 25px 15px;
    background-color: rgba(255, 255, 255, 0.05);

    .Icon {
        cursor: pointer;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

</style>
