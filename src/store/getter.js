export default {
    adminObject: state => state.adminState.object,
    userObject: state => state.userState.object,
    cart: state => state.ATCState.cart,
    loadHide: state => state.headerState.hide,
    adminGetCategoryLoading: state => state.adminCategoryState.loading,
    adminGetCategories: state => state.adminCategoryState.list,
    adminGetCategoryObject: state => state.adminCategoryState.object
}