<template>
  <div class="kb">
    <div class="kb-left">
      <div class="kb-item" v-for="item in keyArr">{{item}}</div>
      <div class="kb-item kb-toggle">键盘</div>
    </div>
    <div class="kb-right">
      <div class="kb-delete">删除</div>
      <div class="kb-ok">确定</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "keyboard",
    data() {
      return {
        keyArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      }
    },
    created() {
      this.handleInit();
    },
    methods: {
      handleInit: function () {
        this.keyArr.splice(this.keyArr.length - 1, 0, '');
      },
      handleDelete:function () {
        
      }
    }
  }
</script>

<style scoped>
  .kb {
    display: flex;
  }

  .kb-left {
    width: 400px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
  }

  .kb-item {
    width: 33%;
    line-height: 100px;
  }

  .kb-item:nth-child(3n) {
    border-left: 1px solid #bbb;
  }

  .kb-item:nth-child(3n - 2) {
    border-right: 1px solid #bbb;
  }

  .kb-item:nth-child(n) {
    border-top: 1px solid #bbb;
  }

  .kb-item:nth-child(-n+3) {
    border-top: none;
  }

  .kb-toggle {

  }

  .kb-right {
    display: flex;
    flex-flow: column;
    width: 133px;
  }

  .kb-delete {
    line-height: 200px;
    font-size: 32px;
    border-left: 1px solid #bbb;
  }

  .kb-ok {
    background: darkblue;
    line-height: 200px;
    font-size: 32px;
    color: #fff;
  }
</style>
