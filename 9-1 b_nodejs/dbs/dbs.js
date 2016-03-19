var express = require('express');
var orm = require('orm');

//服务器的配置
var dbusername = 'root';
var dbpassword = '';
var dbname = 'news';

//导入到路由
module.exports = function(router) {

	//数据库设置
	router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname,{
		define: function(db,models,next) {

			models.news = db.define("news", {
				newsid      : { 
					type: 'serial',
					key: true 
				},
				newstitle   : String,
				newsimg     : String, 
				newscontent : String,
				addtime     : String, 
				newstype    : String

			});  
			next();
		}
	}));

	//数据库操作
	var dbs ={

		//插入数据
		insertData: function(req, res, next) {
			req.models.news.create({
				newstitle: req.body.newstitle,
				newsimg: req.body.newsimg,
        		newscontent: req.body.newscontent,
        		addtime: req.body.addtime,
        		newstype: req.body.newstype
			},function(err,news){
				if (err) throw err;
				res.locals.news = "数据插入成功";
				next();
			});
		},

		
		//修改数据
		undateData: function(req, res, next) {
			req.models.news.get(req.body.newsid, function (err, news) {
			    news.save({ 
		    		newstitle: req.body.newstitle,
					newsimg: req.body.newsimg,
	        		newscontent: req.body.newscontent,
	        		addtime: req.body.addtime,
	        		newstype: req.body.newstype
			    }, function (err) {
			    	if (err) throw err;
			    	res.locals.news = "修改数据成功";
			    	next();
			    });
			});
		},

		//删除数据
		deleteData: function(req, res, next) {
			req.models.news.get(req.body.newsid, function (err, news) {
			    news.remove(function (err) {
			    	if (err) throw err;
			    	res.locals.news = "删除数据成功";
			    	next();
			    });
			});
		},

		//查询数据
		selectData: function(req, res, next) {
			req.models.news.find(req.body.newsid, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		}
	};

	return dbs;
}