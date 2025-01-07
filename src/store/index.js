import { createStore } from 'vuex';

const store = createStore({
    state: {
        activeStep: 1,
	    totalSteps: 5,
        user: {
            name: '',
            email: '',
            phone: ''
        },
        plan: {
            choice: 1, 
            items: [
                {
                    'img': 'icon-arcade.svg',
                    'title': 'Arcade',
                    'month': 9,
                    'year': 90,
                    'promotionYear': '2 months free',
                    'choice': 0
                },
                {
                    'img': 'icon-advanced.svg',
                    'title': 'Advanced',
                    'month': 12,
                    'year': 120,
                    'promotionYear': '2 months free',
                    'choice': 1
                },
                {
                    'img': 'icon-pro.svg',
                    'title': 'Pro',
                    'month': 15,
                    'year': 150,
                    'promotionYear': '2 months free',
                    'choice': 0
                },
            ]
        },
        accessories: [
            {
                'mainText': 'Online service',
                'subText': 'Access to multiplayer games',
                'month': 1,
                'year': 10,
                'choice': 1
            },
            {
                'mainText': 'Larger storage',
                'subText': 'Extra 1TB of cloud save',
                'month': 2,
                'year': 20,
                'choice': 0
            },
            {
                'mainText': 'Customizable profile',
                'subText': 'Custom theme on your profile',
                'month': 2,
                'year': 20,
                'choice': 0
            },
        ]
    },
    getters: {
        getActiveStep (state) {
            return state.activeStep
        },
        getTotalSteps (state) {
            return state.totalSteps
        },
        getUser (state) {
            return state.user
        },
        getPlan (state) {
            return state.plan
        },
        getAccessories (state) {
            return state.accessories
        }
    },
    mutations: {
        activeStepPlus(state) {
            if(state.activeStep < 5) {
                state.activeStep ++;
            }
        },
        activeStepMinus(state) {
            if(state.activeStep > 1) {
                state.activeStep --;
            }
        },
        setUser (state, payload) {
            state.user = payload
        },
        setPlan (state, payload) {
            state.plan.choice = payload.choice;
            state.plan.items.forEach((el, index) => {
                if(payload.choicePlan==el.title) {
                    el.choice = 1;
                } else {
                    el.choice = 0;
                }
            })
        }
    },

})

export default store;