<template>
  <div class="hello">


    <!--<div class="firefox"></div>-->

    <div class="my"></div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ...mapActions(['setLang']),
    },

    created() {
      var langName = this.$utils.getLang(this.$utils.getUrlKey('lang'));
      console.log('====', langName);
      console.log('===', this.$store.state)
      this.$store.dispatch('setLang', {lang: langName});
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .test1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    /* box-shadow:1px 2px 1px #ddd; */
    background-image: radial-gradient(#fff 38%, transparent 38%),
    radial-gradient(#09C 0%, #09C 100%);
  }

  .test1:before {
    content: "";
    width: 285px;
    height: 122px;
    background: none;
    border-radius: 100%;
    position: absolute;
    top: 33px;
    left: -45px;
    margin: auto;
    box-shadow: inset 0 12px 0 13px #09c,
    -35px -8px 0 -5px #fff;
    transform: rotate(-35deg);
  }

  .test1:after {
    content: "";
    width: 120px;
    height: 25px;
    background: #09c;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 50px 23px 0 -2px #fff
  }

  .thunder-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 260px;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 200%;
    color: #fff;
    background: #444;
    border-radius: 5px;
  }

  .thunder {
    color: #333;
    position: absolute;
    height: 50px;
    width: 50px;
    top: 40%;
    left: 30%;
    background: #222;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: #222 65px -15px 0 -5px,
    #222 25px -25px,
    #222 30px 10px,
    #222 60px 15px 0 -10px,
    #222 85px 5px 0 -5px;
    animation: cloudy 5s ease-in-out infinite;
  }

  .thunder:before {
    content: "";
    position: absolute;
    top: 60px;
    left: 60px;
    border-left: 0px solid transparent;
    border-right: 8px solid transparent;
    border-top: 38px solid yellow;
    box-shadow: yellow -7px -32px;
    transform: rotate(30deg);
    transform-origin: center -50px;
    animation: stormy_thunder 2s steps(1, end) infinite;;
  }

  .thunder:after {
    content: "";
    position: absolute;
    top: 120px;
    left: 64px;
    height: 15px;
    width: 120px;
    background: rgba(0, 0, 0, .5);
    border-radius: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    animation: cloudy_shadow 5s ease-in-out infinite;
  }

  @keyframes cloudy {
    50% {
      transform: translate(-50%, -30px);
    }
  }

  @keyframes cloudy_shadow {
    50% {
      transform: translate(-50%, 0) scale(0.8);
      background: rgba(0, 0, 0, .2);
    }
  }

  @keyframes stormy_thunder {
    0% {
      transform: rotate(30deg);
      opacity: 1;
    }
    5% {
      transform: rotate(-34deg);
      opacity: 1;
    }
    10% {
      transform: rotate(0deg);
      opacity: 1;
    }
    15% {
      transform: rotate(-34deg);
      opacity: 0;
    }
  }

  .firefox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border: 8px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    background: #F48D00;
    box-shadow: 0 0 2px 0 #999;
  }

  .firefox::before {
    content: "";
    width: 46px;
    height: 46px;
    background: #A4DFEF;
    border-radius: 100%;
    position: absolute;
    top: 90px;
    left: 50px;
    margin: auto;
    border: 1px solid #A4DFEF;
    box-shadow: -10px 0 0 5px rgba(164, 223, 239, .2),
    16px -60px 0 8px rgba(164, 223, 239, .2),
    -30px -50px 0 8px #F48D00,
    25px -38px 0 0px #A4DFEF,
    -30px -30px 0 12px #F48D00,
    15px -60px 0 8px #A4DFEF,
    33px 31px 0 -15px #A4DFEF,
    30px 17px 0 -13px #F48D00,
    20px -10px 0 0px #A4DFEF,
    -8px -0px 0 19px #F48D00,
    30px 17px 0 0px #A4DFEF,
    24px 30px 0 15px #F48D00,
    20px -6px 0 28px #A4DFEF,
    45px 10px 0 35px #F48D00,
    -5px -57px 0 8px #F48D00,
    20px -23px 0 45px #A4DFEF,
    -5px -80px 0 8px #A4DFEF,
    -30px -70px 0 8px #F48D00,
    -5px -57px 0 8px #F48D00,
    43px -11px 0 55px #F48D00,
    22px -39px 0 55px #A4DFEF;
  }

  .firefox::after {
    content: "";
    width: 0px;
    height: 2px;
    background: linear-gradient(90deg, #F48D00 75%, #333 30%);
    background-size: 35px 35px;
    position: absolute;
    top: 50px;
    left: 73px;
    margin: auto;
    border: solid;
    border-width: 12px 0 15px 30px;
    border-color: #A4DFEF #fff #A4DFEF transparent;
    box-shadow: inset 0px 0 0 50px #333;
  }

  .my {
    /*width: 100px;
    height: 100px;
    position: absolute;
    top: 150px;
    left: 100px;
    border-radius: 50%;
    background: #f48d00;
    border: 8px solid transparent;
    box-shadow:
      -95px -73px 0px -51px #f48d00,
      -68px -114px 0px -51px #F48d00,
      -22px -119px 0px -51px #f48d00,
      0px 0px 0px 17px #fff,
      34px -101px 0px 0px #f00,
      -102px -15px 0px 0px #f00,
      -102px -15px 0px 0px #f00*/
    width: 50px;
    height: 50px;
    background: url('../assets/1.gif') no-repeat;
    over: hidden;
    filter:drop-shadow(67px 0px 0 #f00);
  }

  /*.my:before{
    content:"";
    width: 80px;
    height: 40px;
    left: -34px;
    top: -45px;
    transform: rotate(-32deg);
    background: #f48d00;
    position: absolute;
  }*/
</style>
