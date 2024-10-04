---
outline: deep
lastUpdated: true
---
# 开源项目 

整理整理一些自己的javaWeb开源项目，本文档记录的网站样例为：若依不分离版。

ruoyi不分离版本人演示地址：<s>http://8.138.177.13:82</s>

ruoyi不分离版官方演示地址：http://demo.ruoyi.vip

ruoyi不分离版官方文档地址：[https://doc.ruoyi.vip/ruoyi/](https://doc.ruoyi.vip/ruoyi/)

ruoyi不分离版代码下载地址：[https://gitee.com/y_project/RuoYi](https://gitee.com/y_project/RuoYi)
## (ruoyi不分离版)若依框架搭建 🌐
### 运行
#### 本地环境
```
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.7.0 (推荐5.7版本)
Maven >= 3.0
```
因为本项目是前后端不分离的，所以后端单独启动好，就能进行访问。
#### 在本地环境运行后端
1. 导入到`Eclipse`，菜单 `File` -> `Import`，然后选择 `Maven` -> `Existing Maven Projects`，点击 `Next`> 按钮，选择工作目录，然后点击 `Finish` 按钮，即可成功导入。
`Eclipse`会自动加载`Maven`依赖包，初次加载会比较慢（根据自身网络情况而定）
2. 创建数据库`ry`并导入数据脚本`ry_2024xxxx.sql`，`quartz.sql`
```sql
# 导入数据
mysql> CREATE DATABASE `ry` CHARACTER SET utf8;
mysql> use ry;
mysql> source /home/ry/sql/ry_20240629.sql;
```
导出数据和表结构：
```sh
mysqldump -u用户名 -p密码 数据库名 > 数据库名.sql
```
3. 打开项目运行`com.ruoyi.RuoYiApplication.java`，出现如下图表示启动成功。
```
(♥◠‿◠)ﾉﾞ  若依启动成功   ლ(´ڡ`ლ)ﾞ  
 .-------.       ____     __        
 |  _ _   \      \   \   /  /    
 | ( ' )  |       \  _. /  '       
 |(_ o _) /        _( )_ .'         
 | (_,_).' __  ___(_ o _)'          
 |  |\ \  |  ||   |(_,_)'         
 |  | \ `'   /|   `-'  /           
 |  |  \    /  \      /           
 ''-'   `'-'    `-..-'    
```
::: tip 提示
后端运行成功可以通过(`http://localhost:80` (opens new window))访问。默认账户/密码 admin/admin123）
若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功。
:::

#### 必要配置
修改数据库连接，编辑`resources`目录下的`application-druid.yml`
```js{9-11}
# 数据源配置
spring:
    datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        driverClassName: com.mysql.cj.jdbc.Driver
        druid:
            # 主库数据源
            master:
                url: 数据库地址
                username: 数据库账号
                password: 数据库密码
```
修改服务器配置，编辑`resources`目录下的`application.yml`
```js{4}
# 开发环境配置
server:
  # 服务器的HTTP端口，默认为80
  port: 端口
  servlet:
    # 应用的访问路径
    context-path: /
```

### 部署
::: tip 提示
因为本项目是前后端不分离的，所以需要后端单独部署好，就能进行访问。
::: 
#### 安装jdk8
在Ubuntu 22.04上安装Java Development Kit (JDK)，你可以使用OpenJDK或者Oracle JDK。以下是使用OpenJDK的安装步骤：
1. 打开终端。
2. 更新包列表：
```sh
sudo apt update
```
3. 使用apt安装OpenJDK版本8
```sh
apt install openjdk-8-jdk
```
4. 验证安装是否成功：查看java版本信息，如果显示版本信息就算是安装成功了
```sh
java -version
```
**到此Ubuntu系统安装jdk8就完成了。**
#### 安装MySQL8
在Ubuntu 22.04上安装MySQL 8.0.**，以下是使用MySQL的安装步骤：
1. 安装MySQL：
```sh
#使用apt安装MySQL服务器
apt-get install -y mysql-server
#MySQL服务启动
systemctl start mysql
#确保MySQL服务开机自启：
systemctl enable mysql
#验证MySQL是否成功运行
systemctl status mysql
#登录MySQL,第一次登陆，默认密码为123456
mysql -u root -p
#如果登录成功就算是安装成功了
```
2. 修改数据库用户信息
```sql
#输入密码正常进入mysql后
mysql> use mysql;
#查看用户权限
mysql> select user,host from mysql.user;
#修改用户的mysql连接方式
mysql> update mysql.user set host='%' where user='root';
#修改root用户密码为123456
mysql> ALTER USER 'root'@'%' identified with mysql_native_password BY '123456';
#刷新权限
mysql> flush privileges;
```
3. 修改配置文件，让MySQL连接外网
```sh
#修改mysql配置文件
vi /etc/mysql/mysql.conf.d/mysqld.cnf
#找到bind-address = 127.0.0.1,把127.0.0.1修改成0.0.0.0
#重启mysql
systemctl restart mysql
```
4. 解决Navicat连接不上mysql的问题,`这里可以跳过`

问题一：在ubuntu里，mysql会设置root的plugin为auth_socket，表明它会被当前系统用户证书(system user credentials)所加密验证，显然使用远程ip连接数据库是无法通过这个验证的。（navicat err1698）
```sql
mysql>UPDATE user SET plugin='caching_sha2_password' WHERE user ='root';
mysql>flush privileges;
#再修改root密码
mysql> use mysql;
mysql> ALTER USER 'root'@'%' IDENTIFIED BY '123456';
mysql> flush privileges;
```
问题二：关闭防火墙端口3306的三种方式
```sh
ptables -A INPUT -p tcp --dport 3306 -j ACCEPT
```
```sh
firewall-cmd --zone=public --add-port=3306/tcp --permanent
```
```sh
ufw allow 3306
```
**到此Ubuntu系统安装mysql就完成了。**

#### 后端部署
1. 打包工程文件
在`ruoyi`项目的`bin`目录下执行`package.bat`打包`Web`工程，生成`war/jar`包文件。
然后会在项目下生成`target`文件夹包含`war`或`jar`
::: tip 提示
多模块版本会生成在`ruoyi/ruoyi-admin`模块下`target`文件夹
::: 
2. 部署工程文件
1、jar部署方式
使用命令行执行：`java –jar ruoyi-admin.jar` 或者执行脚本：`ruoyi/ry.sh`

2、war部署方式
`ruoyi/pom.xml`中的`packaging`修改为`war`，放入`tomcat`服务器`webapps`
