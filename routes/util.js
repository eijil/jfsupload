var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var request = require('request');
var fs = require('fs');
var beautifyHtml = require('js-beautify').html;
var env = express().get('env');

//授权码
var aucode = env == 'development' ? 'd3a313cb0d444049260ab6c0a6535f3c' : '9dc110650c65f047b80a2800ca6f9eb4';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('util/index', { title: 'Upload Helper'});
});

router.get('/deploy',function(req,res,next){
    res.render('util/deploy', { title: 'deploy'});
})
router.post('/deploy',function(req,res,next){
    var form = new multiparty.Form({ uploadDir: './public/deploy',oname:true});
    form.parse(req, (err, fields, files) => {
    })
    res.end();
})
router.post('/upload', function(req, res) {

    var form = new multiparty.Form({ uploadDir: './public/files'});
    var requestData = {
    	method: 'POST',
        url: 'http://upload.erp.360buyimg.local/imageUpload.action',
        headers:{
        	keycode: '',
            aucode: aucode,
            type: 0
        },
        body:''
    };
    var count = 0;
    var uploadInfo = '';

        form.parse(req, (err, fields, files) => {

            var files = files.upload;

            var sourceCode = fields.sourceCode[0];

            var sendRequest = new Promise(function(resolve, reject) {

                files.forEach(function(file,n) {
                    requestData.body = fs.readFileSync('./' + file.path);
                    request(requestData, (err, response, body) => {
                        var originName = file.originalFilename;
                        var newName = imgdomain(JSON.parse(body)[0].msg)
                        //替换图片名称
                        sourceCode = replaceSource(sourceCode,originName,newName);
                        //delete tmpFile
                        fs.unlink('./' + file.path);
                        //debug info
                        uploadInfo += '"'+originName +'" : "' + newName + '"\n';
                        count++;
                        if (count == files.length) {
                           resolve();
                        }
                    });
                });

            })
            sendRequest.then(function() {
                sourceCode =  beautifyHtml(sourceCode);
                res.render('util/index',{response:sourceCode,info:uploadInfo});

            });
        });


    });


//for localupload
router.post('/upload.action', function(req, res) {

    var form = new multiparty.Form({ uploadDir: './public/files'});
    var requestData = {
    	method: 'POST',
        url: 'http://upload.erp.360buyimg.local/imageUpload.action',
        headers:{
        	keycode: '',
            aucode: aucode,
            type: 0
        },
        body:''
    };
    var count = 0;
    var uploadInfo = {};

        form.parse(req, (err, fields, files) => {
            var files = files.upload;
            var sendRequest = new Promise(function(resolve, reject) {

                files.forEach(function(file,n) {

                    requestData.body = fs.readFileSync('./' + file.path);

                    request(requestData, (err, response, body) => {
                        var originName = file.originalFilename;
                        var newName = imgdomain(JSON.parse(body)[0].msg)

                        //delete tmpFile
                        fs.unlink('./' + file.path);
                        //debug info
                        
                        uploadInfo[originName] = newName;
                        count++;

                        if (count == files.length) {
                           resolve();
                        }
                    });
                });

            })
            sendRequest.then(function() {

                res.json(uploadInfo);
                res.end();

            });
        });


    });



flashToCanvs();

//for flasthToCanvas

function flashToCanvs(){

    var tmpPath = './public/tmp/tmp.js';

    //先将js文件传到临时目录
    router.post('/uploadTmpJS', function(req, res) {

         var form = new multiparty.Form({ uploadDir: './public/files'});
         form.parse(req, (err, fields, files) => {

            fs.writeFile(tmpPath,fields.tmp,'utf-8');
            res.end();
         })
    })

    router.post('/flashToCanvas', function(req, res) {


        var form = new multiparty.Form({ uploadDir: './public/files'});
        var requestData = {
            method: 'POST',
            url: 'http://upload.erp.360buyimg.local/imageUpload.action',
            headers:{
                keycode: '',
                aucode: aucode,
                type: 0
            },
            body:''
        };
        var count = 0;
        var uploadInfo = '';

        form.parse(req, (err, fields, files) => {

            var files = files.upload;

            var sourceCode =fs.readFileSync(tmpPath,'utf-8');

            var sendRequest = new Promise(function(resolve, reject) {
                files.forEach(function(file,n) {

                    requestData.body = fs.readFileSync('./' + file.path);

                    request(requestData, (err, response, body) => {

                        var originName = file.originalFilename;
                        var newName = imgdomain(JSON.parse(body)[0].msg)
                        //替换图片名称
                        sourceCode = replaceSource(sourceCode,originName,newName);
                        //delete tmpFile
                        fs.unlink('./' + file.path);
                        //debug info
                        uploadInfo += '"'+originName +'" : "' + newName + '"\n';
                        count++;
                        if (count == files.length) {
                           resolve();
                        }
                    });
                });

            })
            sendRequest.then(function() {
                var path = './public/tmp/tmp.html';
                fs.writeFile(path,'<html><head><meta charset="utf-8"/></head><body><pre>'+sourceCode+'</pre></body></html>','utf-8');
                res.send('<pre>'+sourceCode+'</pre>');
            });
        });

    });


}

//http://img{10-14}.360buyimg.com/opr/..
//生成10-14的随机数
function imgdomain(img){
    var num = parseInt(Math.random() * 4 + 10);
    var domain = '';
    if(env == 'development'){
        doman = 'http://img30.360buyimg.com/test/' + img;
    }else{
        doman = 'https://img' + num + '.360buyimg.com/opr/' + img
    }
    return doman;
}
function replaceSource(source,originalFilename,newName) {

    var reg = new RegExp("[^\"|\(]*/"+originalFilename+"","gmi")
    return source.replace(reg,newName);
}
module.exports = router;
