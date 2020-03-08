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
    }
}