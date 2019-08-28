<template>
    <div>
        <h2>正则的扩展</h2>
        <ul>
            <li>
                <h3>u 修饰符</h3>
                <p>unicode模式 处理大于\uFFFF的unicode字符</p>
                <input type="text" placeholder="请输入unicode字符" v-model="demo1.text1">
                <input type="text" placeholder="请输入unicode字符" v-model="demo1.text2">
                <button></button>
            </li>
            <li>
                <h3>y 修饰符</h3>
            </li>
            <li>
                <h3>s 修饰符</h3>
            </li>
            <li>
                <h3>unicode属性</h3>
            </li>
            <li>
                <h3>sticky属性</h3>
            </li>
            <li>
                <h3>flags属性</h3>
            </li>
            <li>
                <h3>具名组匹配</h3>
            </li>
            <li>
                <h3>matchAll</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'regexp',
        data() {
            return {
                demo1: {
                    text1: '',
                    text2: ''
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        text-align: left;
        padding: 40px;
    }

    ul li {
        padding: 10px;
        border: 1px solid #e9e9e9;
    }

    ul li > * {
        margin-top: 10px;
    }

    ul li input {
        display: block;
        width: 200px;
    }

    .flex {
        display: flex;
    }
</style>
