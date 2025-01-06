import { createStore } from 'vuex';

const store = createStore({
    state: {
        activeStep: 1
    },
    getters: {
        getActiveStep (state) {
            return state.activeStep
        }
    },
    mutations: {},

})

export default store;