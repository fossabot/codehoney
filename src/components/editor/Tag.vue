<template>
    <div class="Tag">
        <span class="Name">{{name}}</span>
    </div>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        name: String,
    },
}

</script>
<style lang="scss">
.Tag {
    margin-right: 15px;

    .Name {
        padding: 9px 15px;
        font-size: 0.85rem;
        border: solid 1px rgba(235, 235, 235, 0.25);
        position: relative;
        display: block;
        line-height: 1;

        &::before {
            content: "";
            position: absolute;
            top: -4px;
            left: -4px;
            height: 100%;
            width: 100%;
            border: solid 1px rgba(color(white), 0.25);
            transition: all .19s $ease;
        }
    }
}

</style>
