let express =  require('express')
router = express.Router()
let userController = require('../controller/user.controller')




let createRoute =  router.post('/create',userController.insertData)
let listUsers = router.get('/list',userController.getUserList)

module.exports = router;
