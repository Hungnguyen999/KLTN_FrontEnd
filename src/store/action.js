import axios from 'axios'
const apiConfig = require('../assets/js/apiURL').apiURL

export default {
    AdminLogin({ commit }, admin) {
        const apiUrl = apiConfig.adminLogin
        console.log(apiConfig, commit)
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, {}, { params: admin })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (err) {
                    console.log(err)
                    reject(err)
                })
        })
    },
    UserRegister({ commit }, user) {
        const apiURL = apiConfig.user
        commit('user_request')
        return new Promise((resolve, reject) => {
            axios.post(apiURL, {}, { params: user })
                .then(function (response) {
                    commit('user_success', response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit('user_error')
                    reject(err)
                })
        })
    },
    UserLogin({ commit }, user) {
        const apiURL = apiConfig.userLogin
        commit('user_request')
        return new Promise((resolve, reject) => {
            axios.post(apiURL, {}, { params: user })
                .then(function (response) {
                    commit('user_success', response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit('user_error')
                    reject(err)
                })
        })
    }
}