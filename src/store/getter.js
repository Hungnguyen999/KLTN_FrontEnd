export default {
    adminObject: state => state.adminState.object,
    userObject: state => state.userState.object,
    cart: state => state.ATCState.cart,
    loadHide: state => state.headerState.hide,
    adminGetCategoryLoading: state => state.adminCategoryState.loading,
    adminGetCategories: state => state.adminCategoryState.list,
    adminGetCategoryObject: state => state.adminCategoryState.object,
    adminGetTopicLoading: state => state.adminTopicState.loading,
    adminGetTopics: state => state.adminTopicState.list,
    adminGetTopicObject: state => state.adminTopicState.object,
    adminQuestionBotList: state => state.adminQuestionBotState.list,
    adminQuestionBotLoading: state => state.adminQuestionBotState.loading,
    adminMessageBotList: state => state.adminMessageBotState.list,
    adminMessageBotLoading: state => state.adminMessageBotState.loading,
    // user
    mypageTab: state => state.mypageTabState.hash,
    userUserInfo: state=>state.userState.user,
    userUserInfoLoading: state=>state.userState.loading,
    userGetCategoryLoading: state => state.userCategoryState.loading,
    userGetCategories: state => state.userCategoryState.list,
    userGetCategoryObject: state => state.userCategoryState.object,
    userCourseList: state => state.userCourseState.list,
    userCourseLoading: state => state.userCourseState.loading,
    userLessonList: state => state.userLessonState.list,
    userLessonLoading: state => state.userLessonState.loading,
    userLessonObject: state => state.userLessonState.object,
    userCourseLikeList: state => state.userCourseLike.list,
    userCourseLikeLoading: state => state.userCourseLike.loading,
    // guest
    guestCategoryList: state => state.guestCategoryState.list,
    guestCategoryLoading: state => state.guestCategoryState.loading,
    guestCategoryObject: state => state.guestCategoryState.object,
    guestBotList: state => state.guestMessageBotState.list,
    guestBotLoading: state => state.guestMessageBotState.loading,
    guestBotObject: state => state.guestMessageBotState.object,
    guestCategoryTopCourseList: state => state.guestCategoryWithTopCouseState.list,
    guestCategoryTopCourseLoading: state => state.guestCategoryWithTopCouseState.loading,


    // hung
    userCommentState: state => state.userCommentState.list,
    userCommentStateLoading: state => state.userCommentState.loading,

    userTop5CourseStateList: state => state.top5CourseState.list,
    userTop5CourseStateLoading: state => state.top5CourseState.loading,
    userTop5CourseStateTop5: state => state.top5CourseState.topfive,

    userGetInfoInstructorTotalCourse: state => state.infoInstructorState.total,
    userGetInfoInstructor: state => state.infoInstructorState.infoInstructor,
    userGetInfoInstructorLoading: state => state.infoInstructorState.loading,
    userLoadCart: state => state.userATCState.carts,
    userLoadCartTotal: state => state.userATCState.total,
    
    // guest
    guestGetDetailCourseAmountReview: state => state.guestDetailCourseState.amountReview,
    guestGetDetailCourse: state => state.guestDetailCourseState.detailCourse,
    guestGetDetailCourseLoading: state => state.guestDetailCourseState.loading,

    loadCourse: state => state.courseState.list,
}