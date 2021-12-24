DATABASES = {

  'default': {

​    \# 'ENGINE': 'django.db.backends.sqlite3',     # 配置关系型数据库的

​    \# 'NAME': BASE_DIR / 'db.sqlite3',

​    'ENGINE': 'django.db.backends.mysql',  # 改为mysql     

​    'HOST': '127.0.0.1',           # mysql指定IP

​    'PORT': '3306',             # 指定端口号     show global variables like'port';

​    'USER': 'root',             # 用户名

​    \# 修改密码

​    \# 1、use mysql

​    \# 2、ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

​    'PASSWORD': '123456',          # 密码       

​    'NAME': 'dj09' ,             # 指定数据库    

​    \# 登录      mysql -uroot -p123456 

​    \# 数据库操作   RENAME TABLE pepleinfo TO peopleinfo;  重命名

​    \# 数据库迁移   python manage.py makemigrations;   python manage.py migrate

​    \# 数据库查看   show databases;   show tables;   desc bookinfo;   select *from bookinfo;