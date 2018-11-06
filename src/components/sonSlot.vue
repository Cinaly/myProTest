<template>
    <div class="son-box">
        <h3>son-slot</h3>
        <slot>123</slot>

        <div>
            <slot name="sonSlot0" :cname="name" :addr="addr" :age="age"></slot>
            <slot name="sonSlot2" :cname="item[0]['cname']" :addr="item[0]['addr']" :age="item[0]['age']"></slot>
            <slot name="sonSlot3" :cname="item[1]['cname']" :addr="item[1]['addr']" :age="item[1]['age']"></slot>
            <slot name="sonSlot3" :cname="item[2]['cname']" :addr="item[2]['addr']" :age="item[2]['age']"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sonSlot',
        props: ['item'],
        data() {
            return {
                name: 'nana',
                addr: '杭州',
                age: 26
            }
        },
        created() {
            console.log('item', this.$props.item);
        }
    }
</script>

<style scoped>
    .son-box {
        font-size: 3rem;
        color: #666;
    }
</style>
