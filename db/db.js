var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('连接test数据库成功')
    }
})
module.exports = mongoose