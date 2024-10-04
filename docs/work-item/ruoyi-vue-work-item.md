---
outline: deep
lastUpdated: true
---
# 开源项目 

整理整理一些自己的javaWeb开源项目，本文档记录的网站样例为：若依分离版。

ruoyi-vue分离版本人演示地址：http://8.138.177.13:81

ruoyi-vue分离版官方演示地址：http://vue.ruoyi.vip

ruoyi-vue分离版官方文档地址：[https://doc.ruoyi.vip/ruoyi-vue/](https://doc.ruoyi.vip/ruoyi-vue/)

ruoyi-vue分离版代码下载地址：[https://gitee.com/y_project/RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue)
## (ruoyi-vue分离版)若依框架搭建 🌐
### 运行
#### 本地环境
```
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.7.0 (推荐5.7版本)
Redis >= 3.0
Maven >= 3.0
Node >= 12
```
因为本项目是前后端完全分离的，所以需要前后端都单独启动好，才能进行访问。
#### 在本地环境运行后端
1. 导入到`Eclipse`，菜单 `File` -> `Import`，然后选择 `Maven` -> `Existing Maven Projects`，点击 `Next`> 按钮，选择工作目录，然后点击 `Finish` 按钮，即可成功导入。
`Eclipse`会自动加载`Maven`依赖包，初次加载会比较慢（根据自身网络情况而定）
2. 创建数据库`ry-vue`并导入数据脚本`ry_2024xxxx.sql`，`quartz.sql`
```sql
# 导入数据
mysql> CREATE DATABASE `ry-vue` CHARACTER SET utf8;
mysql> use ry-vue;
mysql> source /home/ry-vue/sql/ry_20240629.sql;
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
后端运行成功可以通过(`http://localhost:8080` (opens new window))访问，但是不会出现静态页面，可以继续参考下面步骤部署ruoyi-ui前端，然后通过前端地址来访问。
:::
#### 在本地环境运行前端
```sh
# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npmmirror.com

# 本地开发 启动项目
npm run dev
```
::: tip 提示
前端运行成功可以通过(`http://localhost:80` (opens new window)) 默认账户/密码 admin/admin123）
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
  # 服务器的HTTP端口，默认为8080
  port: 端口
  servlet:
    # 应用的访问路径
    context-path: /
```
修改前端配置，编辑`ruoyi-ui`目录下的`vue.config.js`
```js{5,10}
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    # 前端的HTTP端口，默认为80
    port: 端口,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        # 反向代理后端的HTTP端口,默认为8080
        target: http://localhost:8080,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
  },
```


### 部署
::: tip 提示
因为本项目是前后端完全分离的，所以需要前后端都单独部署好，才能进行访问。
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
#### 安装Redis
在Ubuntu22.04上安装Redis，以下是使用Redis的安装步骤：
1. 使用apt安装Redis
```sh
apt install redis-server
```
2. 验证Redis是否正常运行
```sh
#查看当前Redis的运行状态
systemctl status redis
#查看redis版本信息
redis-cli --version
```
3. 配置Redis远程设置`这里可以跳过`

```sh
#打开/etc/redis/redis.conf 文件
sudo nano /etc/redis/redis.conf 
```
在该文件中修改配置信息：
取消注释requirepass 启动密码认证，并设置访问密码
requirepass your-pass-word
注释掉绑定地址#bind 127.0.0.1，让Redis可远程访问
bind 127.0.0.1 ::1
以守护进程运行Redis 
daemonize yes
配置完成后，保存并关闭文件。然后重启Redis：
```sh
systemctl restart redis-server
```
4. （可选）设置redis在系统启动时自动启动：
```sh
#先修改Service配置文件中的进程行为：Type=notify改为Type=forking
vi /etc/systemd/system/redis.service
#再设置自启
systemctl enable redis 或者 systemctl enable redis-server.service
```
**到此Ubuntu系统安装redis就完成了。**
#### 安装tomcat 9
ubuntu 22.04 安装tomcat 9，以下是使用tomcat的安装步骤：
1. 使用apt方式在线安装tomcat:
```sh
apt install tomcat9 tomcat9-admin
```
2. 查看tomcat9服务状态:
```sh
systemctl status tomcat9
```
3. 在Tomcat服务器中为Web应用程序管理器创建一个管理员用户（重要步骤）：
```sh
# ①分别在以下两个文件内添加配置：
        sudo vi /usr/share/tomcat9/etc/tomcat-users.xml

        sudo vi /etc/tomcat9/tomcat-users.xml
                <!-- 添加配置 -->
        <role rolename="admin-gui"/>

        <role rolename="manager-gui"/>

        <user username="tomcat001" password="123456" roles="admin-gui,manager-gui"/>
#  ②在以下两个文件中，分别将Valve这句注释掉：
        sudo vi /usr/share/tomcat9-admin/host-manager/META-INF/context.xml

        sudo vi /usr/share/tomcat9-admin/manager/META-INF/context.xml
# ③最后重启tomcat9服务，使配置生效

        sudo systemctl restart tomcat9
```
补充：使用apt方式安装Tomcat ，其配置文件路径主要有2个:
```sh
Tomcat home directory : /usr/share/tomcat9

Tomcat base directory : /var/lib/tomcat9
```
4. 配置防火墙（UFW），允许对8080的默认Web端口进行公共访问：
```sh
#关闭防火墙端口8080
sudo ufw allow 8080/tcp
#重载防火墙配置
sudo ufw reload
#开启防火墙
sudo ufw enable
```
5. （可选）设置redis在系统启动时自动启动：
```sh
#设置自启
systemctl enable tomcat9 
#撤销自启
systemctl disable tomcat9 
```
**到此Ubuntu系统安装tomcat就完成了。**
#### 安装ActiveMQ
1. 安装方法一:在Ubuntu 22.04上使用APT安装ActiveMQ的步骤如下：
使用APT安装ActiveMQ：
```sh
sudo apt install activemq
```
```sh
#安装完成后，启动ActiveMQ服务：
sudo systemctl start activemq
#（可选）设置ActiveMQ在系统启动时自动启动：
sudo systemctl enable activemq
#检查ActiveMQ服务的状态：
sudo systemctl status activemq
```
如果你需要进一步配置ActiveMQ，你可以编辑其配置文件，通常位于/etc/activemq/../activemq.xml

2. 安装方法二:在Ubuntu 22.04上在线下载ActiveMQ安装包，来安装ActiveMQ的步骤如下：
```sh
#下载ActiveMQ二进制文件：
wget https://dlcdn.apache.org/activemq/5.16.3/apache-activemq-5.16.3-bin.tar.gz
#解压缩下载的文件：
tar -xzf apache-activemq-5.16.3-bin.tar.gz
#移动解压后的文件夹到合适的位置（例如：/opt）：
sudo mv apache-activemq-5.16.3 /opt/activemq
#启动ActiveMQ服务：
/opt/activemq/bin/activemq start
#（六选一）验证ActiveMQ是否正在运行：
ps -ef | grep activemq
netstat -anp | grep 61616
netstat -plnt | grep java
lsof -i： 61616
service activemq status
systemctl status activemq
#启动ActiveMQ：
service activemq start
#查看activemq状态：
service activemq status
#关闭activemq服务：
service activemq stop
```
你应该能看到ActiveMQ监听的端口（默认为61616）。
访问ActiveMQ的管理界面：
打开Web浏览器，输入 http://your-server-ip:8161/  ,并使用用户名和密码（默认都是admin）登录。
以上步骤安装了ActiveMQ并启动了它。如果你想让ActiveMQ在系统启动时自动运行，你可以设置一个系统服务。
ActiveMQ控制台之队列：
1. Number Of Pending Messages：等待消费的消息，这个是未出队列的数量，公式=总接收数-总出队列数。
2. Number Of Consumers：消费者数量，消费者端的消费者数量。
3. Messages Enqueued：进队消息数，进队列的总消息量，包括出队列的。这个数只增不减。
4. Messages Dequeued：出队消息数，可以理解为是消费者消费掉的数量。
**到此Ubuntu系统安装ActiveMQ就完成了。**

#### 安装nginx
在Ubuntu 22.04上使用APT安装nginx的命令如下：
1. 使用apt方式在线安装nginx:
```sh
apt install nginx
```
2. 确认nginx正常运行:
```sh
#启动nginx
systemctl start nginx
#查看nginx状态：
systemctl status nginx
#（可选）设置nginx在系统启动时自动启动：
sudo systemctl enable nginx
```
#### 后端部署
1. 打包工程文件
在`ruoyi`项目的`bin`目录下执行`package.bat`打包`Web`工程，生成`war/jar`包文件。
然后会在项目下生成`target`文件夹包含`war`或`jar`
::: tip 提示
多模块版本会生成在`ruoyi/ruoyi-admin`模块下`target`文件夹
::: 
2. 部署工程文件
1、jar部署方式
使用命令行执行：`java –jar ruoyi.jar` 或者执行脚本：`ruoyi/ry.sh`

2、war部署方式
`ruoyi/pom.xml`中的`packaging`修改为`war`，放入`tomcat`服务器`webapps`

#### 前端部署
1. 打包工程文件
```sh
# 打包正式环境
npm run build:prod

# 打包预发布环境
npm run build:stage
```
构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

2. 部署工程文件
通常情况下 `dist` 文件夹的静态文件发布到你的 `nginx` 或者静态服务器即可，其中的 `index.html` 是后台服务的入口页面。

#### 中间件配置(可选)
1. Tomcat配置
修改`server.xml`，`Host`节点下添加
::: details Server.xml 配置
在`Tomcat`的`server.xml`中配置前端路径，通常是指设置一个连接器（Connector），它定义了`Tomcat`监听的端口和协议。以下是一个配置HTTP连接器的例子：
```xml
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />
```
在这个例子中，`Tomcat`会监听8080端口以接收HTTP 1.1请求。如果请求是HTTPS的，则会被重定向到8443端口。

如果你需要配置前端路径来使用特定的Context路径，你可以在`server.xml`中定义一个`<Context>`元素，如下所示：
```xml
<Context path="/myapp" docBase="/path/to/myapp" />
```
在这个例子中，任何指向http://your-domain:8080/myapp  的请求都会被映射到文件系统中的/path/to/myapp目录。
请注意，`server.xml`的配置直接影响`Tomcat`服务器的行为，所以在编辑之后需要重启`Tomcat`以使配置生效。同时，对于生产环境，可能更倾向于使用`Tomcat`管理界面或者自动部署的方式来管理应用上下文（Context）。
:::

```xml
<Context docBase="" path="/" reloadable="true" source=""/>
```
`dist`目录的文件夹下新建`WEB-INF`文件夹，并在里面添加`web.xml`文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
        http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
        version="3.1" metadata-complete="true">
     <display-name>Router for Tomcat</display-name>
     <error-page>
        <error-code>404</error-code>
        <location>/index.html</location>
    </error-page>
</web-app>
```
2. Nginx配置
```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
		charset utf-8;

		location / {
            root   /home/ruoyi/projects/ruoyi-ui;
			try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
		location /prod-api/ {
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://localhost:8080/;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

## 集成docker实现一键部署若依 🌐
`Docker`是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，最终只需要一个命令即可打包发布应用到任意平台中。

1. 安装docker
```sh
yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce
curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
2. 检查docker和docker-compose是否安装成功
```sh
docker version
docker-compose --version
```
3. 文件授权
```sh
chmod +x /usr/local/bin/docker-compose
```
4. 下载若依docker插件，上传到自己的服务器目录

插件相关脚本实现`ruoyi-vue/集成docker实现一键部署.zip`

链接: https://pan.baidu.com/s/1y1g8NkelRT_pS0fIbmyP8g 提取码: mjs7

其中`db目录`存放`ruoyi数据库脚本`
其中`jar目录`存放打包好的`jar应用文件`
其中`conf目录`存放`redis.conf`和`nginx.conf`配置
其中`html\dist目录`存放打包好的静态页面文件
数据库`mysql`地址需要修改成`ruoyi-mysql`
缓存`redis`地址需要修改成`ruoyi-redis`
数据库脚本头部需要添加`SET NAMES 'utf8';`（防止乱码）
5、启动docker
```sh
systemctl start docker
```
6、构建docker服务
```sh
docker-compose build
```
7、启动docker容器
```sh
docker-compose up -d
```
8、访问应用地址

打开浏览器，输入：(`http://localhost:80` (opens new window))，若能正确展示页面，则表明环境搭建成功。

启动服务的容器`docker-compose up ruoyi-mysql ruoyi-server ruoyi-nginx ruoyi-redis`

停止服务的容器`docker-compose stop ruoyi-mysql ruoyi-server ruoyi-nginx ruoyi-redis`

::: warning 时区设置
如果服务器的时区不正确，可以在`dockerfile`文件中添加`ENV TZ=Asia/Shanghai`
:::

## 集成k8s实现一键部署若依
若依平台是基于`Spring Boot`的快速开发平台，可以通过`Kubernetes（K8s）`的`Deployment`资源和`Service`资源来实现一键部署。以下是一个简单的示例：

创建`Dockerfile`来构建基于`Java`的`Docker`镜像：
```Dockerfile
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```
构建`Docker`镜像并推送到镜像仓库：
```sh
docker build -t your-repo/your-ruoyi-app .
docker push your-repo/your-ruoyi-app
```
创建`Kubernetes Deployment`配置文件 `deployment.yaml`：
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ruoyi-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ruoyi
  template:
    metadata:
      labels:
        app: ruoyi
    spec:
      containers:
      - name: ruoyi
        image: your-repo/your-ruoyi-app
        ports:
        - containerPort: 8080
```
创建`Kubernetes Service`配置文件 `service.yaml` 以暴露服务：
```yaml
apiVersion: v1
kind: Service
metadata:
  name: ruoyi-service
spec:
  selector:
    app: ruoyi
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
```
应用这些配置到`Kubernetes`集群：
```sh
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
完成以上步骤后，若依平台的应用将会在`Kubernetes`集群中部署，并通过`LoadBalancer`暴露服务。你可以通过`Kubernetes Dashboard`、`kubectl` 或其他`Kubernetes`管理工具来管理你的部署。