<template>
    <div class="Tags">
        <label
         class="Label"
         v-if="tags"
         v-text="'tags'"
        />
        <div class="Tags-Wrapper">
            <Tag
             v-for="(tag,i) in tags"
             :key="i"
             :name="tag"
             @click="remove(i)"
            />
            <input
             class="Tags-Input"
             v-model="input"
             @keyup="handleKeypress"
             placeholder="seperate your tags with by pressing enter"
             spellcheck="false"
            >
        </div>
    </div>
</template>
<script>
import Tag from './Tag.vue';

export default {
    name: 'Tags',
    components: {
        Tag
    },
    props: {
        tags: Array
    },
    data: () => ({
        addTag: false,
        input: '',
        spaceCounter: 0
    }),
    methods: {
        handleKeypress(e) {
            let keyCode = e.keyCode;

            switch (keyCode) {
                case 59:
                case 13:
                    this.add();
                    break;
                case 32:
                    this.incrementSpaceCounter();
                    break;
                    // case 8:
                    //     this.remove();
                    //     break;
                default:
                    break;
            }
        },
        add() {
            let tags = this.input.split(';');
            this.$emit('addTag', tags[0].trim());
            this.input = "";
        },
        remove(i) {
            this.$emit('removeTag', { index: i });
        },
        incrementSpaceCounter() {
            this.spaceCounter++
        }
    }
}

</script>
<style lang="scss">
.Tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    min-height: 1rem;

    .Tags-Wrapper {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    .Tag+.Tags-Input {
        margin-left: 0px;
    }

    .Tags-Input {
        border-bottom: solid 1px rgba(color(white), 0.5);
        line-height: 1.25;
        padding-bottom: 5px;
        align-self: center;
        flex: 1;
        min-width: 100px;
    }

    .Label {
        position: absolute;
        left: 0;
        transform: translateX(calc(-100% - 15px));
        top: 0;
        font-size: 0.85rem;
        color: rgba(color(white), 0.25);
        user-select: none;
    }
}

</style>
