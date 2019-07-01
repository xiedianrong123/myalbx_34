// 引入fs
const fs = require('fs')
// 引入users表的控制器模块
const usersController = require('../controllers/usersContoller.js')
// 4封装路由模板
const express = require('express')

const router = express.Router()
// 5添加路由
router.get('/', usersController.getIndexPage)


//5. 暴露路由模块
module.exports = router