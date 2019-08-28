<template>
    <div>
        <button class="btn1"></button>
        <button :class="$style.btn2"></button>
        <button class="btn3"></button>
    </div>
</template>

<script>
    export default {
        name: 'vForTest'
    }
</script>

<style scoped>
    .btn1{
        background: aqua;
    }
</style>

<style module>
    .btn2{
        background: bisque;
    }
</style>

<style>
    button{
        width: 100px;
        height: 50px;
        display: block;
    }
    .btn3{
        background: blueviolet;
    }
</style>
