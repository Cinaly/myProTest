<template>
  <div>

    <my-select :subject="subject"></my-select>
    <div v-if="true">
      <p>{{test()}}</p>
    </div>
  </div>
</template>

<script>
  import mySelect from './select/select';

  export default {
    name: 'my-test',
    data() {
      return {
        subject: [{value: 0, text: '小张'}, {value: 1, text: '小李'}, //模拟option中的文本和value值
          {value: 2, text: '小王'}, {value: 4, text: '小明'}]
      }
    },
    methods: {
      test() {
        console.log(1);
        return 1;
      }
    },
    components: {
      mySelect
    }
  }
</script>

<style scoped>
  li {
    width: 100%;
  }

  li:first-child:nth-last-child(2),
  li:first-child:nth-last-child(2) ~ li {
    width: 50%;
  }

  li:first-child:nth-last-child(3),
  li:first-child:nth-last-child(3) ~ li {
    width: 33%;
  }
</style>
