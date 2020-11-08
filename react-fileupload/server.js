const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

//使用中间件
app.use(fileUpload());

//处理路由
app.post('/upload', (req, res) => {
    //判断files属性有没有文件
    if (req.files === null) {
        return res.status(400).json({msg:'没有上传的文件！'})
    }

    const file = req.files.file;

    //将文件移动到指定位置
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            fileName: file.name,
            filePath:`/uploads/${file.name}`
        })
    })
})

//监听端口号
app.listen(5001, () => {
    console.log('服务器正在5001端口号运行...');
});