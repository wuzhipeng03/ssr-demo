<template>
    <div class="index">
        <h1>你好呀,我是vuessr主页</h1>
        <h1>看看{{ index }}</h1>
    </div>
</template>

<script>
    export default {
        name: "app",
        asyncData ({ store, route }) {
            // 触发 action 后，会返回 Promise
            return store.dispatch('fetchItem', route.params.id)
        },
        data() {
            return {
            };
        },
        computed: {
            index() {
                return this.$store.state.items;
            }
        },
        methods: {

        },
        components: {
        },
        mounted: function() {
            console.log('我是index的mounted');
            console.log( this.$store );
        },
        created: function() {
            console.log( '我是index的created' );
        }
    };
</script>

<style>

</style>
