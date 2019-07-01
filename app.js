
// 1.引入exoress模块
const express = require('express')

//6. 引入路由模块
const router = require('./router/index.js')


// 2.创建应用服务器
const app = express()

//3. 添加端口并监听

app.listen(3005, () => {
    console.log('启动端口 http://127.0.0.1:3005')
})

// 4.添加静态资源托管
// 托管CSS的路径
app.use('/assets', express.static('assets'))
// 托管图片虚拟路径
app.use('/uploads', express.static('uploads'))

// 7。添加路由设置
//  use :让app应用来使用这个路由进行所有的用户管理
app.use(router)