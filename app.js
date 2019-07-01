
// 1.引入exoress模块
const express = require('express')
// 引入 fs模块
const fs = require('fs')

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


// 5添加路由
app.get('/', (req, res) => {
    fs.readFile(__dirname + "/views/index.html", (err, data) => {
        if (err) {
            res.end('404')
        } else {
            res.end(data)
        }
    })
})