import apiConfig from "../API/api.json"

export class CommonService {
    checkSmartPhone() {
        if (document.documentElement.clientWidth > 992) {
            return false
        } else {
            return true
        }
    }
    getChildrenRouteUser(router, name) {
        let childrenRouteUser = router.route[2].children;
        for (let i = 0; i < childrenRouteUser.length; i++) {
            if (childrenRouteUser[i].name == name) {
                return childrenRouteUser[i].path
            }
        }
        return 'not-found-page'
    }

    checkErrorToken(vm, msg) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        vm.$swal({
            icon: 'error',
            title: 'Thông báo',
            text: msg
        }).then(() => {
            //location.href = apiConfig.baseURL;
        })
    }
}