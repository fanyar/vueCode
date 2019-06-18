import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    modal1:false,
  },
  mutations: {
    updateModal(state,payload){
      state.modal1 = payload.val;
    }
    },
  actions:{

  }
});

export default store;





