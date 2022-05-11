position：

static		默认,普通布局, top, bottom, left, right属性将不生效

relative	相对于默认的位置重新定位

absolute	相对于最近一个设置了position属性值的祖先元素重新定位

fixed	相对于浏览器窗口重新定位

sticky	粘滞定位(结合了absolute和fixed的定位方式)



被设置position的元素会脱离文档流，乱序现象

z-index：1；				其默认为0

z-index：9999；

则会以z-index的大小优先显示



position：absolute；可用来脱离文档流