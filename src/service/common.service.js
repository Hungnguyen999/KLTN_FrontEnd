export class CommonService {
    checkSmartPhone() {
        if (document.documentElement.clientWidth  > 992) {
            return false
        } else {
            return true
        }
    }
}