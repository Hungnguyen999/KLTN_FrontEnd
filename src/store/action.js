import axios from 'axios'
const apiConfig = require('../assets/js/apiURL').apiURL

export default {
    AdminLogin({ commit }, admin) {
        const apiUrl = apiConfig.adminLogin
        commit('adminLogin_request')
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, admin, { params: admin })
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
            formData.append('category_id', course.category_id)
            formData.append('topic_id_list', course.topics)
            formData.append('name', course.name)
            formData.append('description', course.description)
            formData.append('image', course.imageInput)
            //formData.append('video', course.lessons[0].videoInput)
            /*
            formData.append('lesson_count', course.lessons.length)
            for (let i = 0; i < course.lessons.length; i++) {
                formData.append('lesson_title_' + i, course.lessons[i].title)
                formData.append('lesson_descriptipn_' + i, course.lessons[i].description)
                formData.append('lesson_video_' + i, course.lessons[i].videoInput)
                formData.append('lesson_ext_' + i, course.lessons[i].videoInput.name.split('.').pop())
            }
            */
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
    userGetInsCourse({ commit }) {
        const apiURL = apiConfig.userCourse
        commit('user_course_request')
        const config = {
            token: localStorage.token
        }
        return new Promise((resolve, reject) => {
            axios.get(apiURL, { params: config })
                .then(function (response) {
                    commit('user_course_success', response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit('user_course_error')
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
            axios.patch(apiURL, {}, { params: user })
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
    guestGetCategory({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.guestGetCategory
            commit('guest_category_request')
            axios.get(apiURL)
                .then(function (response) {
                    commit('guest_category_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('guest_category_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    userGetInsLesson({ commit }, course_id) {
        const apiURL = apiConfig.userLesson
        commit('user_lesson_request')
        const config = {
            token: localStorage.token,
            course_id: course_id
        }
        return new Promise((resolve, reject) => {
            axios.get(apiURL, { params: config })
                .then(function (response) {
                    commit('user_lesson_success', response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit('user_lesson_error')
                    reject(err)
                })
        })
    },
    userInsertLesson({ commit }, lesson) {
        return new Promise((resolve, reject) => {
            commit('user_lesson_request')
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                token: localStorage.token
            }
            let formData = new FormData()
            formData.append('course_id', lesson.course_id)
            formData.append('title', lesson.title)
            formData.append('description', lesson.description)
            formData.append('video', lesson.videoInput)
            formData.append('token', localStorage.token)
            let apiURL = apiConfig.userLesson
            axios.post(apiURL, formData, config)
                .then(function (response) {
                    commit('user_lesson_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_lesson_error')
                    reject(error)
                })
        })
    },
    userUpdateLesson({ commit }, lesson) {
        return new Promise((resolve, reject) => {
            commit('user_lesson_request')
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                token: localStorage.token
            }
            let formData = new FormData()
            formData.append('course_id', lesson.course_id)
            formData.append('lesson_id', lesson.lesson_id)
            formData.append('title', lesson.title)
            formData.append('description', lesson.description)
            formData.append('video', lesson.videoInput)
            formData.append('token', localStorage.token)
            let apiURL = apiConfig.userEditLesson
            axios.post(apiURL, formData, config)
                .then(function (response) {
                    commit('user_lesson_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_lesson_error')
                    reject(error)
                })
        })
    },
    adminGetQuestionBot({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminQuestionBot
            commit('admin_question_bot_request')
            axios.get(apiURL, { params: { token: localStorage.adminToken } })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminInsertAnswerBot({ commit }, answerBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminAnswerBot
            answerBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.post(apiURL, {}, { params: answerBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminUpdatetAnswerBot({ commit }, answerBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminAnswerBot
            answerBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.patch(apiURL, {}, { params: answerBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminDeleteAnswerBot({ commit }, answerBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminAnswerBot
            answerBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.delete(apiURL, { params: answerBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminInsertQuestionBot({ commit }, questionBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminQuestionBot
            questionBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.post(apiURL, {}, { params: questionBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminUpdateQuestionBot({ commit }, questionBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminQuestionBot
            questionBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.patch(apiURL, {}, { params: questionBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminDeleteQuestionBot({ commit }, questionBot) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminQuestionBot
            questionBot.token = localStorage.adminToken
            commit('admin_question_bot_request')
            axios.delete(apiURL, { params: questionBot })
                .then(function (response) {
                    commit('admin_question_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_question_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminGetMessageBot({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminMessageBot
            commit('admin_message_bot_request')
            axios.get(apiURL, { params: { token: localStorage.adminToken } })
                .then(function (response) {
                    commit('admin_message_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_message_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminInsertMessageBot({ commit }, message) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminMessageBot
            message.token = localStorage.adminToken
            console.log(message)
            commit('admin_message_bot_request')
            axios.post(apiURL, {}, { params: message })
                .then(function (response) {
                    commit('admin_message_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_message_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminUpdateMessageBot({ commit }, message) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminMessageBot
            message.token = localStorage.adminToken
            commit('admin_message_bot_request')
            axios.patch(apiURL, {}, { params: message })
                .then(function (response) {
                    commit('admin_message_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_message_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    adminDeleteMessageBot({ commit }, message) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.adminMessageBot
            message.token = localStorage.adminToken
            commit('admin_message_bot_request')
            axios.delete(apiURL, { params: message })
                .then(function (response) {
                    commit('admin_message_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('admin_message_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    guestChatBot({ commit }, question) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.guestChatBot
            commit('guest_message_bot_request')
            axios.get(apiURL, { params: { question: question } })
                .then(function (response) {
                    commit('guest_message_bot_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('guest_message_bot_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    guestGetCategoryWithTopCourse({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.guestGetCategoryWithTopCourse
            commit('guest_category_topCourse_request')
            axios.get(apiURL)
                .then(function (response) {
                    commit('guest_category_topCourse_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('guest_category_topCourse_error')
                    // console.log(error)
                    reject(error)
                })
        })
    },
    AddtoCart({ commit }, course_id) {
        const apiURL = apiConfig.addtoCart;
        // let a = JSON.parse(localStorage.user);
        // let x = a.user_id;
        let data = {
            token: localStorage.token,
            course_id: course_id,
            // user_id: x,
        };
        // console.log('response',data.user_id);
        commit("ATC_request");
        return new Promise((resolve, reject) => {
            axios
                .post(apiURL, data, { params: data })
                .then(function (response) {
                    commit("ATC_success", response.data);

                    resolve(response);
                })
                .catch(function (err) {
                    commit("ATc_error");
                    reject(err);
                });
        });
    },
    getCarts({ commit }) {
        const apiURL = apiConfig.carts;
        let data = {
            token: localStorage.token,
        };
        commit("ATC_request");
        return new Promise((resolve, reject) => {
            axios
                .post(apiURL, {}, { params: data })
                .then(function (response) {
                    commit("ATC_success", response.data);

                    resolve(response);
                })
                .catch(function (err) {
                    commit("ATc_error");
                    reject(err);
                });
        });
    },
    deleteCarts({ commit }, course_id) {
        const apiURL = apiConfig.deleteCarts;
        let data = {
            token: localStorage.token,
            course_id: course_id,
        };
        commit('ATC_request');
        return new Promise((resolve, reject) => {
            axios
                .delete(apiURL, { params: data })
                .then(function (response) {
                    commit("ATC_success", response.data);// thanh cong roi no vao mutation update carts
                    resolve(response);
                })
                .catch(function (err) {
                    commit("ATc_error");
                    reject(err);
                });
        })
    },
    getCourse({ commit }) {
        const apiURL = apiConfig.getCourse;
        let data = {
            token: localStorage.token,
        };
        commit("getCourse_request");
        return new Promise((resolve, reject) => {
            axios
                .get(apiURL, {}, { params: data })
                .then(function (response) {
                    commit("getCourse_success", response.data);
                    resolve(response);
                })
                .catch(function (err) {
                    commit("getCourse_error");
                    reject(err);
                });
        });
    },
    userInsertComment({ commit }, obj) {
        const apiURL = apiConfig.userInsertComment;
        let data = {
            token: localStorage.token,
            course_id: obj.course_id,
            ratingValue: obj.ratingValue,
            textComment: obj.textComment,
        };
        commit("courseComment_request");
        return new Promise((resolve, reject) => {
            axios
                .post(apiURL, {}, { params: data, obj })
                .then(function (response) {
                    commit("courseComment_success", response.data);
                    resolve(response)
                })
                .catch(function (err) {
                    commit("courseComment_error");
                    reject(err);
                })
        })
    },
    userGetListComment({ commit }, course_id) {
        const apiURL = apiConfig.userGetListComment;
        let data = {
            token: localStorage.token,
            course_id: course_id
        };
        commit("courseComment_request");
        return new Promise((resolve, reject) => {
            axios.get(apiURL, { params: data })
                .then(function (response) {
                    commit("courseComment_success", response.data);
                    resolve(response);
                })
                .catch(function (err) {
                    commit("courseComment_error");
                    reject(err);
                })
        })
    },
    userGetTop5CourseByTopic({ commit }, course_id) {
        const apiURL = apiConfig.userGetTop5CourseByTopic;
        let data = {
            token: localStorage.token,
            course_id: course_id
        };
        commit("top5Course_request");
        return new Promise((resolve, reject) => {
            axios.get(apiURL, {}, { params: data })
                .then(function (response) {
                    commit("top5Course_success", response.data);
                    resolve(response);
                })
                .catch(function (err) {
                    commit("top5Course_error");
                    reject(err);
                })
        })
    },
    userGetDetailCourse({ commit }, course_id) {
        const apiURL = apiConfig.userGetDetailCourse;
        let data = {
            course_id: course_id
        };
        commit("getDetailCourse_request");
        return new Promise((resolve, reject) => {
            axios.get(apiURL, { params: data })
                .then(function (response) {
                    commit("getDetailCourse_success", response.data)
                    resolve(response);
                })
                .catch(function (err) {
                    commit("getDetailCourse_error")
                    reject(err);
                })
        })
    },
    userGetCourseLike({ commit }) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.userCourseLike
            commit('user_course_like_request')
            axios.get(apiURL, { params: { token: localStorage.token } })
                .then(function (response) {
                    commit('user_course_like_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_course_like_error')
                    reject(error)
                })
        })
    },
    userLikeOrUnLikeCourseLike({ commit }, course_id) {
        return new Promise((resolve, reject) => {
            let apiURL = apiConfig.userCourseLike
            commit('user_course_like_request')
            axios.post(apiURL, {}, { params: { token: localStorage.token, course_id: course_id } })
                .then(function (response) {
                    commit('user_course_like_success', response.data)
                    resolve(response)
                })
                .catch(function (error) {
                    commit('user_course_like_error')
                    // console.log(error)
                    reject(error)
                })
        })
    }
}