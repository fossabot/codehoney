<template>
    <div class="Headline">
        <div class="Wrapper">
            <input
                class="Title"
                v-model="mTitle"
            />
            <label class="Label">H1</label>
        </div>
        <div class="Wrapper">
            <input
                class="Description"
                v-model="mDescription"
            />
            <label class="Label">meta</label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Headline',
    props: {
        title: String,
        description: String
    },
    computed: {
        mTitle: {
            get() {
                return this.title;
            },
            set(value) {
                this.$emit('updateTitle', value);
            }
        },
        mDescription: {
            get() {
                return this.description;
            },
            set(value) {
                this.$emit('updateDescription', value);
            }
        }
    }
}

</script>
<style scoped lang="scss">
.Headline {
    color: color(white);
    margin-top: 40px;
    margin-bottom: 0px;
    margin-bottom: 15px;

    .Wrapper {
        position: relative;
        margin-bottom: 15px;
    }

    .Title {
        font-size: 1.75rem;
        margin: 0;
        line-height: 1.125;
        outline: none;
        margin-top: 0;
        background-color: transparent;
        border: none;
        color: color(white);
        font-family: font(regular);
        font-weight: bold;
    }

    .Description {
        outline: none;
        font-size: 0.85rem;
        margin-top: 0px;
        opacity: .75;
        position: relative;
    }

    .Label {
        position: absolute;
        left: 0;
        transform: translateX(calc(-100% - 15px));
        bottom: 0;
        font-size: 0.85rem;
        color: rgba(color(white), 0.25);
        user-select: none;
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
