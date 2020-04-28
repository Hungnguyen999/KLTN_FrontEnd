import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        mypageTabState: {
            hash: 'info-tab'
        },
        headerState: {
            hide: false
        },
        adminState: {
            object: {},
            loading: false
        },
        userState: {
            object: {},
            user: {},
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
        },
        adminTopicState: {
            loading: false,
            list: [],
            pbject: {}
        },
        userCategoryState: {
            loading: false,
            list: [],
            object: {}
        },
        userCourseState: {
            loading: false,
            list: [],
            object: {}
        },
        guestCategoryState: {
            loading: false,
            list: [],
            object: {}
        },
        userLessonState: {
            loading: false,
            list: [],
            object: {}
        },
        adminQuestionBotState: {
            loading: false,
            list: [],
            object: {}
        },
        adminMessageBotState: {
            loading: false,
            list: [],
            object: {}
        },
        guestMessageBotState: {
            loading: false,
            list: [],
            object: {}
        },
        guestCategoryWithTopCouseState: {
            loading: false,
            list: [],
            object: {}
        },
        courseState:{
            loading: false,
            list: []
        },
        userCommentState:{
            loading: false,
            list:[]
        },
        top5CourseState:{
            loading: false,
            list: [],
            topfive: [],
            count: 0,
        },
        infoInstructorState:{
            loading: false,
            totalCourse: 0,
            infoInstructor: {}
        },
        detailCourseState:{
            loading: false,
            detailCourse: {},
            amountReview: 0,
        },
        userCourseLike: {
            loading: false,
            list: [],
            object: {}
        }
    },
    mutations,
    actions,
    getters
})