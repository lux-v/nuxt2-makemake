<template>
    <div :class="classes">
        <div class="items">
            <ul
                v-for="(column, i) in columns"
                :key="`columnIndex - ${i}`"
                class="list"
            >
                <li
                    v-for="(item, i) in column"
                    :key="item.title"
                    class="list-item"
                >
                    <nuxt-link
                        class="link"
                        :to="item.to"
                        @mouseover.native="toggleHover(i)"
                        @mouseout.native="toggleHover"
                    >
                        <h2
                            class="director-name"
                            v-html="item.title"
                        />
                    </nuxt-link>

                    <wp-image
                        v-if="item.image"
                        :image="item.image"
                        mode="fullbleed"
                        class="image"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// Helpers
import sortColumns from "~/utils/sortColumns"

import WpImage from "~/components/WpImage"

export default {
    components: { WpImage },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            isHovered: -1,
        }
    },
    computed: {
        columns() {
            // Split items into arrays of columns
            const itemsLength = this.items.length

            // Set columnCount default to 1
            let columnCount = 1

            if (itemsLength > 14) {
                columnCount = 3
            } else if (itemsLength > 7) {
                columnCount = 2
            }

            return sortColumns(this.items, columnCount)
        },
        classes() {
            return [
                "gallery-list",
                { "has-many-items": this.items.length > 7 },
                { "is-hovered": this.isHovered >= 0 },
            ]
        },
    },
    methods: {
        toggleHover(i = -1) {
            this.isHovered = i
        },
    },
}
</script>

<style lang="scss" scoped>
.gallery-list {
    min-height: var(--unit-100vh);
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .items {
        width: 100%;

        display: flex;
        text-align: left;

        justify-content: space-around;
    }
    .list {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .list-item {
        white-space: nowrap;
        margin: 16px 0;

        &:last-child {
            margin-bottom: 0;
        }
    }
    .link {
        position: relative;

        display: inline-block;

        z-index: 20;
        padding: 16px 0;

        text-decoration: none;
        color: var(--color-yellow);

        cursor: pointer;

        transition: color 0.4s var(--easing-authentic-motion);
    }

    &.has-many-items {
        .list {
            padding: 0 15px;
        }
    }

    .director-name {
        margin: 0;
        font-size: 24px;
        font-weight: normal;
    }

    .image {
        width: 80%;
        margin: auto;

        position: fixed;
        top: 200px;
        bottom: 200px;
        left: 50px;
        right: 50px;

        z-index: 10;

        opacity: 0;
        transition: opacity 0.4s var(--easing-authentic-motion);

        pointer-events: none;
    }

    // Image Hover state
    @media #{$has-hover} {
        .list-item:hover .image {
            opacity: 1;
        }
        .list-item:hover .link {
            color: var(--color-white);
        }
    }

    // List Breakpoint
    @media #{$lt-phone} {
        .items {
            flex-direction: column;
            margin-top: var(--unit-header-height);

            text-align: center;
        }
        .director-name {
            font-size: 16px;
        }
    }
}
</style>
