<template>
    <div class="Search">
        <input required type="text" name="" v-model="searchquery" @keyup="searchSnippet(searchquery)">
        <label>search for your code...</label>
        <img class="Icon Icon--search" src="@/assets/icon/icon-search.svg">
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'Search',
    components: {},
    data: () => ({
        searchquery: ""
    }),
    props: {
        title: String,
    },
    methods: {
        ...mapActions([
            'searchSnippet',
        ])
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Search {
    color: color(white);
    margin: 0 25px 0;
    padding: 28px 0 30px;
    overflow: hidden;
    position: relative;
    display: flex;

    label {
        position: absolute;
        left: 5px;
        top: 0;
        font-size: 0.85rem;
        transition: all .295s $ease;
        color: rgba(white, 0.5);
        pointer-events: none;
        animation-name: input-is-not-focused;
        animation-duration: .195s;
        animation-fill-mode: forwards;
        animation-timing-function: $ease;
    }

    input {
        margin: 5px;
        display: block;
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        font-family: font(regular);
        font-size: 1.125rem;
        color: color(white);
        outline: none;
        border-bottom: solid 1px rgba(white, 0.5);
        padding-right: 50px;
        padding-bottom: 5px;

        &:focus,
        &:valid {
            ~label {
                font-size: 0.75rem;
                animation-name: input-is-focused;
                animation-duration: .195s;
                animation-fill-mode: forwards;
                animation-timing-function: $ease;
            }
        }
    }

    .Icon--search {
        position: absolute;
        right: 20px;
        top: 32px;
        transform: scaleX(-1);
    }

    @keyframes input-is-focused {
        0% {
            transform: translateY(28px) translateZ(0);
        }

        100% {
            transform: translateY(55px) translateZ(0);
        }
    }

    // @keyframes input-is-focused {
    //     0% {
    //         transform: translateY(28px) translateZ(0);
    //         opacity: 1;
    //     }

    //     26% {
    //         transform: translateY(-20px) translateZ(0);
    //         opacity: 1;
    //     }

    //     50% {
    //         transform: translateY(-20px) translateZ(0);
    //         opacity: 0;
    //     }

    //     51% {
    //         transform: translateY(100px) translateZ(0);
    //         opacity: 0;
    //     }

    //     100% {
    //         transform: translateY(55px) translateZ(0);
    //         opacity: 1;
    //     }
    // }

    @keyframes input-is-not-focused {
        0% {
            transform: translateY(55px) translateZ(0);
        }

        100% {
            transform: translateY(28px) translateZ(0);
        }
    }
}

</style>
