<template>
    <div class="Headline">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
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
    margin-top: 30px;
    margin-bottom: 32px;

    h1 {
        font-size: 1.625rem;
    }
    p{
        opacity: 0.75;
    }
}

</style>
