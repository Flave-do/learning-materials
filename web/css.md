

            属性   值	属性   值

选择器P     {color:red; font-size:14px}

              声明			声明

1,内联样式(Inline Style)

2.内部样式表(Internal Style Sheet)

3,外部样式表(External Style Sheet)

16px 属性值之间不能有空格16 px错误



通常,我们将CsS选择器分为以下五类

1基本选择器

通用选择器	

元素选择器	

类选择器									.类

id选择器									#id



2复合选择器

交集选择器 	元素选择器.类选择器|元素选择器#id选择器

并集选择器 	选择器1，选择器2，选择器3

后代选择器	选择器1 选择器2 选择器3		空格分隔

子元素选择器  选择器1>选择器2				匹配选择器1的直接子元素包含选择器2的元素

相邻元素选择器  选择器1+选择器2		匹配共同父元素的选择器1紧跟后面的选择器2的元素

通用兄弟选择器  选择器1~选择器2		无需紧挨着，同一个层级就可



3伪类选择器		

动态伪类选择器 :link, :visited, :hover, :active, :focus

​	链接未被访问的时候a:link	 {color: pink;****

​	链接被访问过的时候a:visited 	{color: red;****

​	鼠标是停在链接上方的时候a:hover	 {color: black;****

​	鼠标按下链接的那一刻a:active 	{color: green;****

先后顺序

伪类选择器 :enabled, :disabled, :checked, :required, :optional :default, :valid, :invalid, :in-range, :out-of-range, :read-only, :read-write, indeterminate.

​	设置表单元素的“可用”与“禁用”这两种状态的css样式  	       

​	:enabled, :disabled

​	设置表单元素被选中的css样式

​	:checked

​	设置必选和可选元素的css样式

​	 :required, :optional

​	设置默认元素的css样式

​	:default

​	合法，不合法

​	:valid, :invalid,

​	在范围内、超出范围

​	:in-range, :out-of-range

​	只读和可读可写

​	:read-only, :read-write

结构伪类选择器 :root, :nth-child(n), :nth-last-child(n), :nth-of-type(n):nth-last-of-type(n), :first-child, :last-child, :first-of-type :last-of-type, :only-child, :only-of-type, :empty

​	p:nth-child(n)	设置body第三个子元素----p

其他伪类选择器:target, :lang, :not

​	:target跳转。不过这个需要用到id属性进行配合:先在某个元素设置好id属性值,然后只需要将a元素的href指定为"井号(#)加上需要跳转的页面元素的id值"就可以实现页面内跳转了

​	:lang 语言

​	 :not 否定选择器，取反

4伪元素选择器

::first-line选择器		匹配文本块第一行内容，块级元素

​	p::first-line	仅对p元素生效

::before和::after

​	a::before	在a元素前面插入

​	a::after 		在后面插入

::selection选择器

​	设置用户选中的部分文本样式

5属性选择器

​	[class = "world"]	所有class=world的属性

​	[class^ = "world"]	所有world开头的属性

​	[class$ = "world"]	所有world结尾的属性

​	*字符串一部分

​	~整个，全部

​	|包含





px像素

em字符
