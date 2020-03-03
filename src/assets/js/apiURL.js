var apiConfig = require('../../API/api.json')
var apiAddress = apiConfig.apiURL

var apiURL = {
    adminLogin: apiAddress + "/adminLogin",
    userLogin: apiAddress + "/userLogin",
    user: apiAddress + "/user"
}

exports.apiURL = apiURL