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
        userATCState: {
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
            object: {}
        },

        //hung
        adminStatisticalState   :{
            loading: false,
            list: [],
            object: {}
        },
        adminGetListCourseState:{
            loading: false,
            list: [],
            object: {}
        },
        adminGetListPricetierState: {
            loading: false,
            list: [],
            object: {}
        },
        adminGetListCoursebyPriceState: {
            loading: false,
            list: [],
            object: {}
        },
        ///

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
        courseState: {
            loading: false,
            list: []
        },
        userCommentState: {
            loading: false,
            list: []
        },
        guestTop5CourseState: {
            loading: false,
            list: [],
            topfive: [],
            count: 0,
        },
        infoInstructorState: {
            loading: false,
            totalCourse: 0,
            infoInstructor: {}
        },
        guestDetailCourseState: {
            loading: false,
            detailCourse: {},
            amountReview: 0,
        },
        userCourseLike: {
            loading: false,
            list: [],
            object: {}
        },
        headerStateUser: {
            hide: false
        },
        footerStateUser: {
            hide: false
        },
        guestAutoAnswerState: {
            hide: false
        },
        userPriceTierState: {
            loading: false,
            list: [],
            object: {}
        },
        userPublicCourseState: {
            loading: false,
            list: [],
            object: {}
        },
        userForgotPassword: {
            loading: false,
            list: [],
            object: {}
        },
        guestCourseDetail: {
            loading: false,
            list: [],
            object: {}
        },
        historyCourseState: {
            list: []
        },
        userCourseListCartState: {
            loading: false,
            list: [],
            object: {}
        },
        userStudentCourseState: {
            loading: false,
            list: [],
            object: {}
        },
        userStudentCourseLessonState: {
            loading: false,
            list: [],
            object: {}
        },
        userCurrentVideoState: {
            object: {}
        },
        userStudentCourseLessonCommentState: {
            loading: false,
            list: [],
            object: {}
        },
        userDeleteCommentState: {
            loading: false
        },
        guestSearchState: {
            loading: false,
            list: [],
            object: {},
            search: ""
        },
    },
    mutations,
    actions,
    getters
})