<template>
    <div
     class="Tag"
     @click="$emit('click')"
    >
        <span class="Name">{{name}}</span>
        <icon
         class="Icon--close"
         icon="close"
         fill="var(--color-red)"
         :width="0.75"
         :height="0.75"
        />
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
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: solid 1px rgba(235, 235, 235, 0.25);
    position: relative;
    display: flex;
    transition: all .19s $ease;
    user-select: none;

    &:hover {
        border-color: color(red);
        color: color(red);

        &::before {
            border-color: color(red);
        }

        .Icon--close {
            padding: unset;
            padding-right: 9px;
            max-width: 20px;
            margin-left: -11px;
        }
    }

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

    .Name {
        padding: 9px 15px;
        font-size: 0.85rem;
        position: relative;
        display: block;
        line-height: 1;
    }

    .Icon--close {
        max-width: 0;
        transition: all .255s $ease;
        overflow: hidden;
    }
}

</style>
