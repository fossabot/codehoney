<template>
    <div class="Headline">
        <h1 contenteditable>{{title}}</h1>
        <p contenteditable>{{description}}</p>
    </div>
</template>
<script>
export default {
    name: 'Headline',
    props: {
        title: String,
        description: String,
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Headline {
    color: color(white);
    margin-top: 40px;
    margin-bottom: 32px;

    h1 {
        font-size: 2.5rem;
        margin: 0;
        line-height: 1;
        outline: none;
    }

    p {
        opacity: 0.75;
        outline: none;

    }
}

</style>
