// 读取首页
// 引入fs
const fs = require('fs')
module.exports.getIndexPage = (req, res) => {
    fs.readFile(__dirname + "/../views/admin/index.html", (err, data) => {
        if (err) {
            res.end('404')
        } else {
            res.end(data)
        }
    })
}

// 读取页面
// module.exports.getindex = getindex