\# 方法一：直接

\# shell(工具)  python manage.py shell

\# 导入模型类   from books.models import BookInfo,PeopleInfo

\# 添加数据    book = BookInfo(name='python',pub_date='2021-10-20')

\# 保存      book.save()

\# 方法二：

\# 管理器类型的对象，是给模型类和数据库进行查询的接口   object = Manage()

\# 创建对象和保存:  create()

\# 添加数据并保存   BookInfo.objects.create(name='hello',pub_date='2021-10-20')



\# 查询    BookInfo.objects.get(name='hello')     get()查询单个数据  all()查询多个数据，反回列表  

\# filter(name='go')也可以查看是否存在       count() 查询结果数量

\# 修改1    books =BookInfo.objects.get(name='hello')    books.name = 'java'     books.save()   

\# 修改2    BookInfo.objects.filter(name='python').update('go')

\# 删除    delete()

\# 1、

\# books =BookInfo.objects.get(name='hello')

\# books.delete()

\# 2、

\# BookInfo.objects.filter(name='python').delete()



\# 过滤------------------------------------

\# 过滤的语法 = < > 

\# 属性名称__比较运算符 = 值

\# BookInfo.objects.filter(name__exact='python')     列表集合

\# BookInfo.objects.get(name__exact='python')       单个数据

\# exact 是等于运算符

\# gt     大于（greater then）

\# gte    大于等于（）

\# lt     小于（less then）

\# lte    小于等于

\# exclude  不等于    BookInfo.objects.exclude(id=3)  不等于3的数据

\# 模糊查询

\# % 天              Sql

\# contains=            是否包含()

\# startswith=           以()开头

\# endswith=            以()结尾

\# (name__isnull = True)      空查询

\# in=[1,3,5]           范围查询

\# BookInfo.objects.filter(name__in=[1,3,5])

\# 日期查询

\# BookInfo.objects.filter(pub_date__year=1980)

\# BookInfo.objects.filter(pub_date__gt='1990-10-10')



\# 对象

\# F对象

\# from django.db.models import F

\# filter(字段名__运算符=F('字段名'))

\# BookInfo.objects.filter(readcount__gt=F('commentcount'))

\# Q对象   or | 或   and | or   & 与

\# from django.db.models import Q

\# BookInfo.objects.filter(Q(readcount__gt=20)|Q(id__lt=3))



\# 聚合函数    （aggregate)   n  集合   adj

\# aggregate   不用filter   count()

\# from django.db.models import Count,Sum,Avg,Max,Min   

\# BookInfo.objects.aggregate(Sum('readcount'))      统计的是评论的总量

\# BookInfo.objects.aggregate(Count('readcount'))     统计的是数量



\# 排序

\# BookInfo.objects.all().order_by('readcount')    默认升  ('-readcount')  默认降



\# 关联查询

\# 1》》多

\# 先创建变量   books =BookInfo.objects.get(name='射雕英雄传')

\# 关联      books.peopleinfo_set.all()

\# 多》》1

\# person =PeopleInfo.objects.get(id=1)

\# person.book



\# 关联过滤查询    filter()   由多的查询1的

\# book = BookInfo.objects.filter(peopleinfo__name='郭靖')