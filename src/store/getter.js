export default {
    adminObject: state => state.adminState.object,
    userObject: state => state.userState.object,
    cart: state => state.ATCState.cart,
    loadHide: state => state.headerState.hide
}