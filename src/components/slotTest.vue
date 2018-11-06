<template>
    <div class="father-box">
        father-box
        <son-slot :item="items">
            <p>我是父组件的文子,但是我要被放到子组件里</p>
            <button>fa-button</button>
            <div slot="sonSlot0" slot-scope="props">
                <span>{{props.cname}}</span>
                <span>{{props.addr}}</span>
                <span>{{props.age}}</span>
            </div>
            <div slot="sonSlot1" slot-scope="props">
                <span>{{props.cname}}</span>
                <span>{{props.addr}}</span>
                <span>{{props.age}}</span>
            </div>
            <div slot="sonSlot2" slot-scope="props">
                <span>{{props.cname}}</span>
                <span>{{props.addr}}</span>
                <span>{{props.age}}</span>
            </div>
            <div slot="sonSlot3" slot-scope="props">
                <span>{{props.cname}}</span>
                <span>{{props.addr}}</span>
                <span>{{props.age}}</span>
            </div>
        </son-slot>
    </div>
</template>

<script>
    import sonSlot from './sonSlot';

    export default {
        name: 'slotTest',
        components: {sonSlot},
        data:function () {
          return {
              items: [
                  {text: '文字1', cname: 'name1', addr: 'addr1', age:21},
                  {text: '文字2', cname: 'name2', addr: 'addr2', age:22},
                  {text: '文字3', cname: 'name3', addr: 'addr3', age:23}
              ]
          }
        }

    }

</script>

<style scoped>
    .father-box {
        font-size: 5rem;
        color: #000;
    }
</style>
