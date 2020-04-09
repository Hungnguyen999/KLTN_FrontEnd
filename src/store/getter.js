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
    // user
    mypageTab: state => state.mypageTabState.hash,
    userUserInfo: state=>state.userState.user,
    userUserInfoLoading: state=>state.userState.loading,
    userGetCategoryLoading: state => state.userCategoryState.loading,
    userGetCategories: state => state.userCategoryState.list,
    userGetCategoryObject: state => state.userCategoryState.object,
    userCourseList: state => state.userCourseState.list,
    userCourseLoading: state => state.userCourseState.loading,
    // guest
    guestCategoryList: state => state.guestCategoryState.list,
    guestCategoryLoading: state => state.guestCategoryState.loading,
    guestCategoryObject: state => state.guestCategoryState.object
}