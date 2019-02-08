<template>
    <div class="Headline">
        <div class="Wrapper">
            <h1 class="Title" contenteditable>{{title}}</h1>
            <label class="Label">H1</label>
        </div>
        <div class="Wrapper">
            <p class="Description" contenteditable>{{description}}</p>
            <label class="Label">meta</label>
        </div>
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
<style scoped lang="scss">
.Headline {
    color: color(white);
    margin-top: 40px;
    margin-bottom: 0px;

    .Wrapper {
        position: relative;
    }

    .Title {
        font-size: 1.75rem;
        margin: 0;
        line-height: 1;
        outline: none;
        margin-bottom: 15px;
        margin-top: 0;
    }

    .Description {
        outline: none;
        font-size: 0.85rem;
        margin-top: 0px;
        opacity: .75;
    }

    .Label {
        position: absolute;
        left: 0;
        transform: translateX(calc(-100% - 15px));
        bottom: 0;
        font-size: 0.85rem;
        color: rgba(color(white), 0.25)
    }

    @media (min-width: breakpoint(desktop-small)) {
        .Title {
            font-size: 2rem;
        }

        .Description {
            font-size: 1rem;
        }
    }

    @media (min-width: breakpoint(desktop)) {
        .Title {
            font-size: 2.5rem;
        }

        .Description {
            font-size: 1.125rem;
        }
    }
}

</style>
