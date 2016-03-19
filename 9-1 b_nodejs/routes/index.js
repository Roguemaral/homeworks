var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

//查询数据
router.post('/select', dbs.selectData, function(req, res) {
  res.send(res.locals.news);
});


/* 到显示手机页面的主页 */
router.get('/news', function(req, res, next) {
  res.render('news');
});

/* 到显示手机页面的主页 */
router.get('/bgd', function(req, res, next) {
  res.render('bgd');
});



//通过post查询并返回数据   //修改数据
router.post('/update', dbs.updatetData, function(req, res) {
  res.send(res.locals.news);
});

//查询功能的实现        //插入数据
router.post('/insert', dbs.inserData, function(req, res) {
  res.send(res.locals.news);
});

//通过post查询并返回数据     //删除数据
router.post('/delete', dbs.deleteData, function(req, res) {
  res.send(res.locals.news);
});

module.exports = router;
