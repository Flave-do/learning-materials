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


