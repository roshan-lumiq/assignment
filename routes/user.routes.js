let express =  require('express')
router = express.Router()
let {insertData} = require('../controller/user.controller')




let createRoute =  router.post('/create',insertData)

module.exports = createRoute;