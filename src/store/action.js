import axios from 'axios'
const apiConfig = require('../assets/js/apiURL').apiURL

export default {
    AdminLogin({ commit }, admin) {
        const apiUrl = apiConfig.adminLogin
        commit('adminLogin_request')
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, {}, { params: admin })
                .then(function (response) {
                    commit('adminLogin_success')
                    resolve(response)
                })
                .catch(function (err) {
                    commit('adminLogin_error')
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
    },
    AddToCart({ commit }, course_id) {
        const apiURL = apiConfig.addToCart
        let data = {
            token: localStorage.token,
            course_id: course_id
        }
        commit('ATC_request')
        return new Promise((resolve, reject) => {
            axios.post(apiURL, {}, { params: data })
                .then(function (response) {
                    commit('ATC_success', response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit('ATC_error')
                    reject(err)
                })
        })
    },
    adminGetCategories({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminCategory
            commit('admin_getCategory_request')
            axios.get(apiURL, { params: { token: localStorage.adminToken } })
                .then(function (response) {
                    commit('admin_getCategory_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getCategory_error')
                    reject(error)
                })
        })
    },
    adminUpdateCategory({ commit }, category) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminCategory
            category.token = localStorage.adminToken
            let data = category
            commit('admin_getCategory_request')
            axios.patch(apiURL, {}, { params: data })
                .then(function (response) {
                    commit('admin_getCategory_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getCategory_error')
                    reject(error)
                })
        })
    },
    adminInsertCategory({ commit }, category) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminCategory
            category.token = localStorage.adminToken
            let data = category
            commit('admin_getCategory_request')
            axios.post(apiURL, {}, { params: data })
                .then(function (response) {
                    commit('admin_getCategory_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getCategory_error')
                    reject(error)
                })
        })
    },
    adminDisableOrEnableCategory({ commit }, category) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminCategory
            category.token = localStorage.adminToken
            let data = category
            commit('admin_getCategory_request')
            axios.delete(apiURL, { params: data })
                .then(function (response) {
                    commit('admin_getCategory_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getCategory_error')
                    reject(error)
                })
        })
    },
    adminGetTopics({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminTopic
            commit('admin_getTopic_request')
            axios.get(apiURL, { params: { token: localStorage.adminToken } })
                .then(function (response) {
                    commit('admin_getTopic_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getTopic_error')
                    reject(error)
                })
        })
    },
    adminUpdateTopic({ commit }, topic) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminTopic
            topic.token = localStorage.adminToken
            let data = topic
            commit('admin_getTopic_request')
            axios.patch(apiURL, {}, { params: data })
                .then(function (response) {
                    commit('admin_getTopic_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getTopic_error')
                    reject(error)
                })
        })
    },
    adminInsertTopic({ commit }, topic) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminTopic
            topic.token = localStorage.adminToken
            let data = topic
            commit('admin_getTopic_request')
            axios.post(apiURL, {}, { params: data })
                .then(function (response) {
                    commit('admin_getTopic_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getTopic_error')
                    reject(error)
                })
        })
    },
    adminDisableOrEnableTopic({ commit }, topic) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminTopic
            topic.token = localStorage.adminToken
            let data = topic
            commit('admin_getTopic_request')
            axios.delete(apiURL, { params: data })
                .then(function (response) {
                    commit('admin_getTopic_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_getTopic_error')
                    reject(error)
                })
        })
    },
    userGetCategories({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.userCategory
            commit('user_getCategory_request')
            axios.get(apiURL, { params: { token: localStorage.token } })
                .then(function (response) {
                    commit('user_getCategory_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_getCategory_error')
                   // console.log(error)
                    reject(error)
                })
        })
    },
    userInfo({ commit }) {
        const apiURL = apiConfig.user
        commit('user_request')
        return new Promise((resolve, reject) => {
            axios.get(apiURL, { params: { token: localStorage.token } })
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
    userInsertCourse({ commit }, course) {
        return new Promise((resolve, reject) => {
            commit('user_course_request')
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                token: localStorage.token
            }
            let formData = new FormData()
            formData.append('topic_id_list', course.topics)
            formData.append('name', course.name)
            formData.append('description', course.description)
            formData.append('moneyType_id', 1)
            formData.append('tierPrice_id', 0)
            formData.append('image', course.imageInput)
            //formData.append('video', course.lessons[0].videoInput)
            formData.append('lesson_count', course.lessons.length)
            for (let i = 0; i < course.lessons.length; i++) {
                formData.append('lesson_title_' + i, course.lessons[i].title)
                formData.append('lesson_descriptipn_' + i, course.lessons[i].description)
                formData.append('lesson_video_' + i, course.lessons[i].videoInput)
                formData.append('lesson_ext_' + i, course.lessons[i].videoInput.name.split('.').pop())
            }
            formData.append('token', localStorage.token)
            let apiURL = apiConfig.userCourse
            axios.post(apiURL, formData, config)
                .then(function (response) {
                    commit('user_course_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_course_error')
                    reject(error)
                })
        })
    },
    userEditInfor({ commit }, user) {
        //console.log(user)
        const apiURL = apiConfig.userEditInfor
        commit('user_request')
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            token: localStorage.token
        }
        let formData = new FormData()
        formData.append('user_id', user.user_id)
        formData.append('name', user.name)
        formData.append('address', user.address)
        formData.append('phone', user.phone)
        formData.append('avatar', user.avatar)
        formData.append('token', localStorage.token)
        return new Promise((resolve, reject) => {
            axios.post(apiURL, formData, { params: config })
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
    userChangePassword({ commit }, user) {
        const apiURL = apiConfig.userEditPassword
        user.token = localStorage.token
        commit('user_request')
        return new Promise((resolve, reject) => {
            console.log(apiURL, user)
            axios.patch(apiURL, {} ,{ params: user })
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