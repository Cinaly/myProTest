import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    lang:1
  },
  mutations:{
    setLang(state,obj){
      state.lang=obj.lang;
      Vue.i18n.set(state.lang)
    }
  },
  actions:{
    setLang({commit},obj) {
      commit('setLang',obj)
    }
  }
})
