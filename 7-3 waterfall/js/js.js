// 加载文档
$(document).ready(function(){
	$(window).on("load",function(){
        imgLocation();
   //允许滚动加载新的图片，模拟一个网络获取数据的图片，模拟一个字符串杰森字符串，网络传输数据的一种格式
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};

        window.onscroll = function(){  //通过window来实现鼠标的滚动事件
        //什么时候加载
            if (scrollside()) {
            	//用each给dataImg进行便利，获取到具体的数据data，(放到位置,放的具体的数值)
            	$.each(dataImg.data,function(index,value){ 
            	    //通过jquery动态的创建div以及Img
            	    //先创建最外层的box，指定标签是div，添加一个class，通过appendTo加载进来，追加到容器里面    
            		var box = $("<div>").addClass("box").appendTo($("#container"));
            		//创建内容的div，指定一个class
            		var content = $("<div>").addClass("content").appendTo(box); 

            		//console.log("./img/"+$(value).attr("src"));   
            		//创建一个img，设置它的属性
            		$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);  //添加到appendTo内容中
            	});
            	imgLocation();
            }
        };
	});
});

// 监测窗口大小改变
$(window).resize(function(){
   location.reload();
});



//我们这里判断是以最后一张图片到达一半的时候为节点
function scrollside(){       //滚动到边缘进行加载图片
	var box = $(".box");     //创建box对象
	//得到最后一张图片的高度
	//通过box.last同时获取当前对象，offsetTop距顶端的距离+最后一张图片的一半
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	//当前容器的高度
	var documentHeight = $(document).width();
	//当前滚动的高度
	var scrollHeight = $(window).scrollTop();  //通过声明window来得到，滚动到距顶端的位置 ,这是一个方法
	//最后图片的高度>滚动的距离+文档的高度，他将允许滚动返回trun否则返回false
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


// 确定图片的加载位置
function imgLocation(){
 //创建一个盒子对象
	var box = $(".box");
 //确定盒子的宽度	
	var boxWidth = box.eq(0).width(); //通过eq获得第一张图片的宽度
 //确定一排有多少个
    var num = Math.floor($(window).width()/boxWidth); //先通过window来获取当前设备的宽度除以盒子的宽度，括号里可能是小数
    //通过Math.floor()是其变成整数
 //定义一个数组用来承载储存列的所有数组(box)的高度
 var boxArr = [];               //获取高度的原因是为了知道这一排盒子中高度最小的那个
 //确定图片放置的位置，将其循环
 box.each(function(index,value){        //index是用来确定哪一个位置，value是用来确定当前是那个元素
 //	 console.log(index+"--"+value);
 //获取每个盒子的高度
    var boxHeight = box.eq(index).height();
    if (index<num) {
    	boxArr[index]= boxHeight;    //储存第一行盒子的高度 ，数组是需要索引的[index]
  //  	console.log(boxHeight);      //获取第一行盒子高度
    }else{
    	var minboxHeight = Math.min.apply(null,boxArr);   //获取盒子最小的高度
  //    	console.log(minboxHeight);
    	//设置最小图片的位置
    	var minboxIndex = $.inArray(minboxHeight,boxArr);  //(最小的高度,数组对象)
  //  	console.log(minboxIndex);
  //通过位置进行摆放
        $(value).css({        //获取jquery对象$(),通过css进行操作摆放其位置
        	"position":"absolute",       //绝对布局
        	"top":minboxHeight,          //确定顶端的距离是最小图片的距离
        //确定其左边的距离，第二张距左边的位置也是根据第一排中图片最小高度位置来确定
        	"left":box.eq(minboxIndex).position().left
        });
        //重新纪录当前高度
        boxArr[minboxIndex]+=box.eq(index).height();
    }
 });           
}