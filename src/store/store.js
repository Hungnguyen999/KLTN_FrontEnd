import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        adminState: {
            object: {},
            loading: false
        },
        userState: {
            object: {},
            loading: false,
        }
    },
    mutations,
    actions,
    getters
})