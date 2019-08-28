<template>
    <div>
        <ul>
            <li>
                <h4>codePointAt, fromCodePoint</h4>
                <input type="text" v-model="inputText1" placeholder="请输入要转换的字符或字符串">
                <p>
                    <button @click="codePointAt(inputText1)">codePointAt</button>
                    <span v-if="result2.length>0">result= {{result2}}</span>
                </p>
                <p>
                    <button @click="fromCodePoint(result2)">fromCodePoint</button>
                    <span v-if="result1.length>0">result= {{result1}}</span>
                </p>
            </li>
            <li>
                <h4>includes, startWith, endWith</h4>
                <p>确定字符串B是否包含在字符串A中</p>
                <input type="text" v-model="demo2.text1" placeholder="请输入字符串A">
                <input type="text" v-model="demo2.text2" placeholder="请输入字符串B">
                <input type="number" v-model="demo2.text3" placeholder="请输入开始搜索的位置">
                <p>
                    <button @click="test1(1)">includes</button>
                    <button @click="test1(2)">startWith</button>
                    <button @click="test1(3)">endWith</button>
                </p>
            </li>
            <li>
                <h4>normalize</h4>
                <p>将字符的不同表示方法统一为同样的形式, Unicode 正规化</p>
                <p class="flex">
                    <input type="text" v-model="demo1.text1" placeholder="请输入unicode编码A">
                    <span>{{demo1.result1}}</span>
                </p>
                <p class="flex">
                    <input type="text" v-model="demo1.text2" placeholder="请输入unicode编码B">
                    <span>{{demo1.result2}}</span>
                </p>
                <p>
                    <button @click="normalize(1)">转换</button>
                    <button @click="normalize(2)">普通等价</button>
                    <button @click="normalize(3)">normalize</button>
                </p>
            </li>
            <li>
                <h4>repeat</h4>
                <p>返回一个新字符串，表示将原字符串重复n次</p>
                <input type="text" v-model="demo3.text1" placeholder="请输入字符串">
                <input type="text" v-model="demo3.text2" placeholder="请输入要重复的次数">
                <button @click="test2(demo3.text1, demo3.text2)">repeat</button>
            </li>
            <li>
                <h4>padStart, padEnd</h4>
                <p>补全字符串</p>
                <input type="text" v-model="demo4.text1" placeholder="请输入字符串">
                <input type="text" v-model="demo4.text2" placeholder="请输入要补全的字符串">
                <input type="number" v-model="demo4.text3" placeholder="请输入字符串的长度">
                <p>
                    <button @click="test3(1)">padStart</button>
                    <button @click="test3(2)">padEnd</button>
                </p>
            </li>
            <li>
                <h4>trimStart, trimEnd</h4>
                <p>消除字符串头尾空格</p>
                <input type="text" v-model="demo5.text1" placeholder="请输入字符串">
                <p>
                    <button @click="test4(1)">trimStart</button>
                    <button @click="test4(2)">trimEnd</button>
                </p>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'newMethodsOfString',
        data() {
            return {
                inputText1: [],
                inputText2: '',
                demo1: {
                    text1: '',
                    text2: '',
                    result1: '',
                    result2: ''
                },
                demo2: {
                    text1: '',
                    text2: '',
                    text3: undefined
                },
                demo3: {
                    text1: '',
                    text2: ''
                },
                demo4: {
                    text1: '',
                    text2: undefined,
                    text3: undefined
                },
                demo5: {
                    text1: ''
                },
                result1: [],
                result2: []
            }
        },
        created() {

        },
        methods: {
            // fromCodePoint
            fromCodePoint(codeArr) {
                this.result1.length = 0;
                try {
                    codeArr = Array.from(codeArr, (x) => '0x' + x);
                    codeArr.forEach(cc => {
                        this.result1 = this.result1.concat(String.fromCodePoint(cc));
                    })
                } catch (err) {
                    console.log(err);
                }
            },
            // codePointAt
            codePointAt(string) {
                this.result2.length = 0;
                try {
                    for (let s of string) {
                        this.result2 = this.result2.concat(s.codePointAt(0).toString(16));
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            // row
            row() {

            },
            // normalize
            normalize(type) {
                var str1 = eval("'" + this.demo1.text1 + "'");
                var str2 = eval("'" + this.demo1.text2 + "'");
                if (type == 1) {
                    this.demo1.result1 = decodeURIComponent(str1);
                    this.demo1.result2 = decodeURIComponent(str2);
                }
                if (type == 2) {
                    alert(str1 === str2);
                }
                if (type == 3) {
                    alert(str1.normalize() === str2.normalize());
                }
            },
            // includes, startWith, endWith
            test1(type) {
                if (type == 1) alert(this.demo2.text1.includes(this.demo2.text2, this.demo2.text3));
                if (type == 2) alert(this.demo2.text1.startsWith(this.demo2.text2, this.demo2.text3));
                if (type == 3) alert(this.demo2.text1.endsWith(this.demo2.text2, this.demo2.text3));
            },
            // repeat
            test2(string, number) {
                alert(string.repeat(number));
            },
            // padStart, padEnd
            test3(type) {
                if (type == 1) {
                    if (this.demo4.text2 === undefined) {
                        alert(this.demo4.text1.padStart(this.demo4.text3));
                    } else {
                        alert(this.demo4.text1.padStart(this.demo4.text3, this.demo4.text2));
                    }
                }
                if (type == 2) {
                    if (this.demo4.text2 === undefined) {
                        alert(this.demo4.text1.padEnd(this.demo4.text3));
                    } else {
                        alert(this.demo4.text1.padEnd(this.demo4.text3, this.demo4.text2));
                    }
                }
            },
            // trimStart, trimEnd
            test4(type) {
                if (type == 1) alert(this.demo5.text1.trimStart());
                if (type == 2) alert(this.demo5.text1.trimEnd());
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
