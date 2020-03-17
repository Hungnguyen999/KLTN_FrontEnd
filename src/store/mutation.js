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
    }
}