//参数:
//obj:要执行动画的对象
//target:执行动画的目标位置
//speed:移动的速度
//attr:要执行动画的样式,比如: left top width height
//callback:回调函数,这个函数将会在动画执行完毕以后执行
function move(obj, attr, target, speed, callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);

    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));
    //判断速度的正负值

    if (current > target) {
        //此时速度应为负值
        speed = -speed;
    }

    //开启一个定时器，用来执行动画效果
    obj.timer = setInterval(function () {
        //获取box1的原来的位置值
        var oldValue = parseInt(getStyle(obj, attr));

        //在旧值的基础上增加，值越大越快
        var newValue = oldValue + speed;

        //当元素移动到指定位置时，使其停止执行动画
        //向左移动时,需要判断newValue是否小于target
        //向右移动时,需要判断newValue是否大于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        //将新值设置给box1
        obj.style[attr] = newValue + "px";

        //当元素移动到指定位置时,使其停止执行动画
        if (newValue === target) {
            //达到目标,关闭定时器
            clearInterval(obj.timer);
            //动画执行完毕,调用回调函数
            callback && callback();
        }

    }, 30);
};


//getStyle函数：
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //加上window则为属性，可解决变量全局未定义报错
        //正常浏览器的方式，具有getComputedstyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，不具有getComputedstyle()方法
        return obj.currentStyle[name];
    }
};

//创建一个方法用来设置选中的a
function setA() {

    //判断当前索引是否是最后一张图片
    if (index >= imgArr.length - 1) {
        //则将index设置为0
        index = 0;

        //此时显示的最后一张图片,而最后一张图片和第一张是一摸一样
        //通过CSS将最后一张切换成第一张
        imgList.style.left = 0;
    }

    //遍历所有并将它们的背景颜色设置为红色
    for (var i = 0; i < allA.length; i++) {
        allA[i].style.backgroundColor = "";
    }
    //将选中的a设置为黑色
    allA[index].style.backgroundColor = "black";
};

//定义一个自动切换的定时器的标识
var timer;
//创建一个函数，用来开启自动切换图片
function autoChange() {
    //开启一个定时器,用来定时去切换图片
    timer = setInterval(function () {
        //使索引自增
        index++;

        //判断index的值
        index %= imgArr.length;

        //执行动画,切换图片
        move(imgList, "left", -520 * index, 20, function () {
            //修改导航按钮
            setA();
        });

    }, 3000);
};


//判断一个元素中是否含有指定的class属性值
/*参数:
    obj 要添加class属性的元素
    cn 要判断是否存在的class值
    如果有该class,则返回true,没有则返回false
*/
function hasClass(obj, cn) {
    //判断obj中有没有cn class
    //创建一个正则表达式
    //var reg = /\bb2\b/;				//单词边界	\b
    //但是上面的写死了，需要动态的如下：
    var reg = new RegExp("\\b" + cn + "\\b");

    return reg.test(obj.className);
}


//定义一个函数,用来向一个元素中添加指定的class属性值
/* 参数:
*obj要添加class属性的元素
*cn要添加的class值
*/
function addClass(obj, cn) {

    //检查obj中是否含有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }

}

function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    //删除class
    obj.className = obj.className.replace(reg, "");		//替换为空串
}

/*toggleClass可以用来切换一个类
*如果元素中具有该类,则删除
*如果元素中没有该类,则添加
*/
function toggleClass(obj, cn) {
    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //有,则删除
        removeClass(obj, cn);
        //没有,则添加
        addClass(obj, cn);
    }
};


/**
 * 分页函数
 * pno--页数
 * psize--每页显示记录数
 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
 **/
 function goPage(pno,psize){
    var itable = document.getElementsByClassName("idcon1");
    var num = itable.length;//表格所有行数(所有记录数)
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页 
    if(num/pageSize > parseInt(num/pageSize)){   
            totalPage=parseInt(num/pageSize)+1;   
       }else{   
           totalPage=parseInt(num/pageSize);   
       }   
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
       var endRow = currentPage * pageSize;//结束显示的行   40
       endRow = (endRow > num)? num : endRow;    40
       console.log(endRow);
       //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){    
        var irow = itable[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";    
        }else{
            irow.style.display = "none";
        }
    }
 
    var tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
    }else{
        tempStr += "首页";
        tempStr += "<上一页";    
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
        tempStr += "下一页>";
        tempStr += "尾页";    
    }

    document.getElementById("barcon").innerHTML = tempStr;
    
}