//start.js

//引入express 模块
const express = require('express')

//实例化一个 express 服务器对象
var app = express()

//设定监听 8080 端口, 如果8080端口被占用则报错,成功则显示 Server Listening on 8080...
app.listen(8080, ()=>{
  console.log('Server Listening on 8080...')
})

//设定服务器提供静态服务的根目录为当前文件夹
app.use(express.static('./'))

/**
 * 推荐把今天的ES6文件夹直接放在D盘下:
 * 通过 cmd 命令行工具来执行 start.js
 * 
 * win+r 搜 cmd  打开cmd工具
 * >D:    回车 切换到D盘下
 * >cd ES6   回车 切换到 ES6目录下,按照自己实际情况填写/复制目录路径
 * >node start.js
 * 
 * 出现 Server Listening on 8080... 说明启动成功, cmd不允许关闭
 * 
 * 如果出现报错 cannot find module 'express'
 * 说明没有这个模块, 则需要用 npm 安装
 * > npm install express
 * 
 * npm正常是从国外服务器下载, 但是被墙了, 国内需要切换到 国内的淘宝源,切换的命令
 * > npm config set registry https://registry.npm.taobao.org
 * 
 * 启动之后, 在浏览器访问
 * 127.0.0.1:8080/index.html
 * 
 * 或者 直接使用 live server 运行也可以
 * 
 * 下节课 11:10
 * 
 * 目前console会报错, 因为 Stu那行没写export
 */