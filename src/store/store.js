import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        headerState: {
            hide: false
        },
        adminState: {
            object: {},
            loading: false
        },
        userState: {
            object: {},
            loading: false,
        },
        ATCState: {
            loading: false,
            cart: {}
        },
        adminCategoryState: {
            loading: false,
            list: [],
            object: {}
        }
    },
    mutations,
    actions,
    getters
})