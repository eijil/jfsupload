//基于命令行上传文件测试
var request = require('request');
var fs = require('fs');

var r = request.post('http://172.19.123.124/util/upload.action', function optionalCallback(err, httpResponse, body) {
  console.log(body);
})
var form = r.form();
form.append('upload', fs.createReadStream(__dirname + '/images/1.jpg'));
form.append('upload', fs.createReadStream(__dirname + '/images/2.jpg'));
