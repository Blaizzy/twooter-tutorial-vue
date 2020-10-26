import { createStore } from 'vuex';
import { UserModule } from './User'

export default createStore({
  state: {},
  //Mutations are func that affect the state
  mutations: {},
  // func that you call throughout the app that call mutations
  actions: {},

  modules: {
    User: UserModule
  }
})
