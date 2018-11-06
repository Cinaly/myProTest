<template>
    <div>
      <h2>单元素/组件的过渡</h2>
      <button @click="show1=!show1">click</button>
      <transition name="fade">
        <p v-if="show1">hello jollychic</p>
      </transition>
      <hr>
      <h2>自定义组件的动画过渡效果</h2>
      <button @click="show2=!show2">click</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
      >
        <p v-if="show2">hello jollychic</p>
      </transition>
      <hr>
      <h2>多个组件的过渡</h2>
      <input type="radio" value="v-a" id="a" name="view">
      <label for="a">A</label>
      <input type="radio" value="v-b" id="b" name="view">
      <label for="b">B</label>
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
      <hr>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            show1:true,
            show2:false,
            view:'v-a'
          }
        },
        components:{
          'v-a':{
            template:'<div>component A</div>'
          },
          'v-b':{
            template:'<div>component B</div>'
          },
        },
        methods:{
          beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
          },
          enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
          },
          leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
              rotateZ: '45deg',
              translateY: '30px',
              translateX: '30px',
              opacity: 0
            }, { complete: done })
          }
        }

    }
</script>

<style scoped>
  .fade-enter-active{
    transition:all 0.5s linear;
  }
  .fade-leave-active{
    transition:all 0.8s cubic-bezier(1.0,0.5,0.8,1.0);
  }
  .fade-enter,.fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
  .component-fade-enter-active,.component-fade-leave-active{
    transition: all 0.3s linear;
  }
  .component-fade-enter,.component-fade-leave-to{
    opacity: 0;
  }
</style>
