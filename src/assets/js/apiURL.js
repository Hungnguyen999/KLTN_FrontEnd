var apiConfig = require('../../API/api.json')
var apiAddress = apiConfig.apiURL

var apiURL = {
    adminLogin: apiAddress + "/adminLogin",
    admin: apiAddress + "/admin",
    userLogin: apiAddress + "/userLogin",
    user: apiAddress + "/user",
    addToCart: apiAddress + "/addToCart",
    adminCategory: apiAddress + "/admin/category"
}

exports.apiURL = apiURL