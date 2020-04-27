var apiConfig = require('../../API/api.json')
var apiAddress = apiConfig.apiURL

var apiURL = {
    adminLogin: apiAddress + "/adminLogin",
    admin: apiAddress + "/admin",
    userLogin: apiAddress + "/userLogin",
    addToCart: apiAddress + "/addToCart",
    adminCategory: apiAddress + "/admin/category",
    adminTopic: apiAddress + "/admin/topic",
    adminQuestionBot: apiAddress + "/admin/bot/question",
    adminAnswerBot: apiAddress + "/admin/bot/answer",
    adminMessageBot: apiAddress + "/admin/bot/message",
    //// user
    user: apiAddress + "/user",
    userCategory: apiAddress +"/user/category",
    userCourse: apiAddress + "/user/course",
    userEditPassword: apiAddress + "/user/edit/password",
    userEditInfor: apiAddress + "/user/edit/infor",
    userEditProfile: apiAddress + "/user/edit/profile",
    userLesson: apiAddress + "/user/lesson",
    userEditLesson: apiAddress + "/user/lesson/edit",

    //guest
    guestGetCategory: apiAddress + "/guest/category",
    guestGetCategoryWithTopCourse: apiAddress + "/guest/category/topCourse",
    guestChatBot: apiAddress + "/guest/bot",


    // hung
    userInsertComment: apiAddress + "/user/course/insertcomment",
    userGetListComment: apiAddress + '/guest/course/getListComment',
    userGetTop5CourseByTopic: apiAddress + '/guest/course/getTop5CourseByTopic',
    userGetDetailCourse: apiAddress + '/guest/course/getDetailCourse',
    fieldCRUD: apiAddress + "/fieldCRUD",
    addtoCart: apiAddress + "/addToCart",
    carts: apiAddress +'/carts',
    getCourse: apiAddress + '/getCourse',
    deleteCarts: apiAddress + '/deleteCarts',
}

exports.apiURL = apiURL