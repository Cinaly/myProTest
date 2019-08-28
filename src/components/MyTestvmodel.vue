<template>
    <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>勾选的名字是：{{ checkedNames }}</span>
        <p class="tt1 tt-common ">1000 Chic-coins</p>
        <p class="tt2 tt-common ">$20 Big Discount Coupon X2</p>
        <p class="tt3 tt-common ">$800+, $200 OFF Coupon For Luxury Brands</p>
        <p class="tt4 tt-common ">$10 Big Discount Coupon X2</p>
        <p class="tt5 tt-common ">$10 Big Discount Coupon X2</p>
        <p class="tt6 tt-common ">5% OFF Jolly Travel Coupon</p>
        <p class="aa1">Your Accumulative Total: $555</p>
    </div>
</template>

<script>
    export default {
        name: 'myTestvmodel',
        data() {
            return {
                checkedNames: []
            }
        }
    }
</script>

<style scoped>
    div{
        background: #b50031;
    }
    .tt-common{
        font-size: 1.8rem;
        color: white;
        box-sizing: border-box;
        height: 48px;
        display: block;
        border-radius: 24px;
    }
    .tt1{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(-90deg, #ffd132, transparent);
        background-blend-mode: normal, normal, normal;
    }
    .tt2{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(-90deg, #f296ce,transparent);
        background-blend-mode: normal, normal, normal;
    }
    .tt3{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(-90deg, #ffd132,transparent);
        background-blend-mode: normal, normal, normal;
    }
    .tt4{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(90deg, #f296ce,transparent);
        background-blend-mode: normal, normal, normal;
    }
    .tt5{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(90deg, #ffd132,transparent);
        background-blend-mode: normal, normal, normal;
    }
    .tt6{
        width: 187px;
        padding: 4px 16px 4px 16px;
        word-break: break-word;
        background-image: linear-gradient(90deg, #f296ce,transparent);
        background-blend-mode: normal, normal, normal;
    }
    .aa1{
        font-size: 3.4rem;
        background: #671adc;
        color: #ffa854;
        opacity: 0.9;
        text-shadow: 0px 3px 2px #6e001e;
    }
</style>
