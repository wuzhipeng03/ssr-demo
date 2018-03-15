<!-- Item.vue -->
<template>
    <div>
        <h1>你好呀我是item</h1>
        <h1> 这是store里面的{{ item }} </h1>
    </div>
</template>
<script>
    export default {
        asyncData ({ store }) {
            // 触发 action 后，会返回 Promise
            return store.dispatch('fetchItem', 1)
        },
        computed: {
            // 从 store 的 state 对象中的获取 item。
            item () {
                return this.$store.state.items[1]
            }
        },
        created() {
            console.log('我是item的created');
        },
        mounted() {
            console.log('我是item的mounted');
        }
    }
</script>