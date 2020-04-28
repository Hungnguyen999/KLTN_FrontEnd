export default {
    changeTab(state, data) {
        state.mypageTabState.hash = data
    },
    adminLogin_request(state) {
        state.adminState.loading = true
    },
    adminLogin_success(state) {
        state.adminState.loading = false
    },
    adminLogin_error(state) {
        state.adminState.loading = false
    },
    user_request(state) {
        state.userState.loading = true
    },
    user_success(state, data) {
        state.userState.loading = false
        if (data.user) {
            state.userState.user = data.user
        }
    },
    user_error(state) {
        state.userState.loading = false
    },
    user_logout(state) {
        state.userState.user = {}
    },
    ShowHeaderAdmin(state) {
        state.headerState.hide = false
    },
    HideHeaderAdmin(state) {
        state.headerState.hide = true
    },
    admin_getCategory_request(state) {
        state.adminCategoryState.loading = true
    },
    admin_getCategory_success(state, data) {
        state.adminCategoryState.loading = false
        if (data.list) {
            state.adminCategoryState.list = data.list
        }
        if (data.object) {
            state.adminCategoryState.object = data.object
        }
    },
    admin_getCategory_error(state) {
        state.adminCategoryState.loading = false
    },
    admin_getTopic_request(state) {
        state.adminTopicState.loading = true
    },
    admin_getTopic_success(state, data) {
        state.adminTopicState.loading = false
        if (data.list) {
            state.adminTopicState.list = data.list
        }
        if (data.object) {
            state.adminTopicState.object = data.object
        }
    },
    admin_getTopic_error(state) {
        state.adminTopicState.loading = false
    },
    user_getCategory_request(state) {
        state.userCategoryState.loading = true
    },
    user_getCategory_success(state, data) {
        state.userCategoryState.loading = false
        if (data.list) {
            state.userCategoryState.list = data.list
        }
        if (data.object) {
            state.userCategoryState.object = data.object
        }
    },
    user_getCategory_error(state) {
        state.userCategoryState.loading = false
    },
    user_course_request(state) {
        state.userCourseState.loading = true
    },
    user_course_success(state, data) {
        state.userCourseState.loading = false
        if (data.list) {
            state.userCourseState.list = data.list
        }
        if (data.object) {
            state.userCourseState.object = data.object
        }
    },
    user_course_error(state) {
        state.userCourseState.loading = false
    },
    guest_category_request(state) {
        state.guestCategoryState.loading = true
    },
    guest_category_success(state, data) {
        state.guestCategoryState.loading = false
        if (data.list) {
            state.guestCategoryState.list = data.list
            //console.log(state.guestCategoryState.list)
        }
        if (data.object) {
            state.guestCategoryState.object = data.object
        }
    },
    guest_category_error(state) {
        state.guestCategoryState.loading = false
    },
    user_lesson_request(state) {
        state.userLessonState.loading = true
    },
    user_lesson_success(state, data) {
        state.userLessonState.loading = false
        if(data.list) {
            state.userLessonState.list = data.list
        }
        if(data.object) {
            state.userLessonState.object = data.object
        }
    },
    user_lesson_error(state) {
        state.userLessonState.loading = false
    },
    admin_question_bot_request(state) {
        state.adminQuestionBotState.loading = true
    },
    admin_question_bot_success(state, data) {
        state.adminQuestionBotState.loading = false
        if(data.list) {
            state.adminQuestionBotState.list = data.list
        }
        if(data.object) {
            state.adminQuestionBotState.object = data.object
        }
    },
    admin_question_bot_error(state) {
        state.adminQuestionBotState.loading = false
    },
    admin_message_bot_request(state) {
        state.adminMessageBotState.loading = true
    },
    admin_message_bot_success(state, data) {
        state.adminMessageBotState.loading = false
        if(data.list) {
            state.adminMessageBotState.list = data.list
        }
        if(data.object) {
            state.adminMessageBotState.object = data.object
        }
    },
    admin_message_bot_error(state) {
        state.adminMessageBotState.loading = false
    },
    guest_message_bot_request(state) {
        state.guestMessageBotState.loading = true
    },
    guest_message_bot_success(state, data) {
        state.guestMessageBotState.loading = false
        if(data.list) {
            state.guestMessageBotState.list = data.list
        }
        if(data.object) {
            state.guestMessageBotState.object = data.object
        }
    },
    guest_message_bot_error(state) {
        state.guestMessageBotState.loading = false
    },
    guest_category_topCourse_request(state) {
        state.guestCategoryWithTopCouseState.loading = true
    },
    guest_category_topCourse_success(state, data) {
        state.guestCategoryWithTopCouseState.loading = false
        if (data.list) {
            state.guestCategoryWithTopCouseState.list = data.list
            //console.log(state.guestCategoryWithTopCouseState.list)
        }
        if (data.object) {
            state.guestCategoryWithTopCouseState.object = data.object
        }
    },
    guest_category_topCourse_error(state) {
        state.guestCategoryWithTopCouseState.loading = false
    },
    
    user_ATC_request(state){
        state.userATCState.loading = true
    },
    user_ATC_success(state, data){
        if(data.carts){
            state.userATCState.carts = data.carts
            //alert('here')
            console.log(data.carts)
        }
        if(data.total){
            state.userATCState.total = data.total
        }
        state.userATCState.loading = false
    },
    user_ATC_error(state){
        state.userATCState.loading = false
    },
    user_courseComment_request(state){
        state.userCommentState.loading = true
    },
    user_courseComment_success(state,data){
        console.log("cái này là check",data.list)
        state.userCommentState.list = data.list
        state.userCommentState.loading = false
    },
    user_courseComment_error(state){
        state.userCommentState.loading = false
    },
    guest_top5Course_request(state){
        state.guestTop5CourseState.loading = true
    },
    guest_top5Course_success(state){
        state.guestTop5CourseState.loading = false
    },
    guest_top5Course_error(state){
        state.guestTop5CourseState.loading = false
    },
    getInfoInstructor_request(state){
        state.infoInstructorState.loading = true
    },
    getInfoInstructor_success(state){
        state.infoInstructorState.loading = false
    },
    getInfoInstructor_error(state){
        state.infoInstructorState.loading = false
    },
    guest_getDetailCourse_request(state){
        state.guestDetailCourseState.loading = true
    },
    guest_getDetailCourse_success(state,data){
        if(data.detail){
            state.guestDetailCourseState.detailCourse = data.detail
        }
        if(data.amounReview){
            state.guestDetailCourseState.amountReview = data.amountReview
        }
        state.guestDetailCourseState.loading = false
    },
    guest_getDetailCourse_error(state){
        state.guestDetailCourseState.loading = false
    },
    user_course_like_request(state) {
        state.userCourseLike.loading = true
    },
    user_course_like_success(state, data) {
        state.userCourseLike.loading = false
        if(data.list) {
            state.userCourseLike.list = data.list
        }
        if(data.object) {
            state.userCourseLike.object = data.object
        }
    },
    user_course_like_error(state) {
        state.userCourseLike.loading = false
    }
}