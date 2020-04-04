var apiConfig = require('../../API/api.json')
var apiAddress = apiConfig.apiURL

var apiURL = {
    adminLogin: apiAddress + "/adminLogin",
    admin: apiAddress + "/admin",
    userLogin: apiAddress + "/userLogin",
    addToCart: apiAddress + "/addToCart",
    adminCategory: apiAddress + "/admin/category",
    adminTopic: apiAddress + "/admin/topic",




    //// user
    user: apiAddress + "/user",
    userCategory: apiAddress +"/user/category",
    userCourse: apiAddress + "/user/course",
    userEditPassword: apiAddress + "/user/edit/password",
    userEditInfor: apiAddress + "/user/edit/infor",
    userEditProfile: apiAddress + "/user/edit/profile"
}

exports.apiURL = apiURL