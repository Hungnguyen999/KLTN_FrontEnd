export default {
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
    user_success(state) {
        state.userState.loading = false
    },
    user_error(state) {
        state.userState.loading = false
    },
    ATC_request(state) {
        state.ATCState.loading = true
    },
    ATC_success(state) {
        state.ATCState.loading = false
    },
    ATC_error(state) {
        state.ATCState.loading = false
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
        if(data.list) {
            state.adminCategoryState.list = data.list
        }
        if(data.object) {
            state.adminCategoryState.object = data.object
        }
    },
    admin_getCategory_error(state) {
        state.adminCategoryState.loading = false
    }
}