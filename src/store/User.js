export const UserModule = {
    namespaced: true,

    state: {
        user: null,
    },
    //Mutations are func that affect the state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    // func that you call throughout the app that call mutations
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },
}