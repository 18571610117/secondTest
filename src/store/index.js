import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/sates';
import mutations from './modules/mutations';
import getters from './modules/getters';
import actions from './modules/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
