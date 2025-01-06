import { createStore } from 'vuex';

const store = createStore({
    state: {
        activeStep: 1,
        user: {
            name: '',
            email: '',
            phone: ''
        }
    },
    getters: {
        getActiveStep (state) {
            return state.activeStep
        },
        getUser (state) {
            return state.user
        }
    },
    mutations: {},

})

export default store;