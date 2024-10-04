---
outline: deep
lastUpdated: true
---
# 开源项目 

整理整理一些自己的javaWeb开源项目，本文档记录的网站样例为：若依spring-Cloud版。

ruoyi-vue分离版本人演示地址：http://8.138.177.13:81

ruoyi-cloud微服务版官方演示地址：http://cloud.ruoyi.vip

ruoyi-cloud微服务版官方文档地址：[https://doc.ruoyi.vip/ruoyi-cloud/](https://doc.ruoyi.vip/ruoyi-cloud/)

ruoyi-cloud微服务版代码下载地址：[https://gitee.com/y_project/RuoYi-Cloud](https://gitee.com/y_project/RuoYi-Cloud)
## 若依微服务版架构图
![ruoyi-cloud-framework.png](https://img.picgo.net/2024/09/22/ruoyi-cloud-frameworkec294d136475284c.png)
::: tip 提示
架构图 [RuoYi-Cloud-Processon](https://www.processon.com/view/5ec290195653bb6f2a18504e)分享地址。
:::

## (ruoyi-vue微服务版)若依框架搭建 🌐
### 运行
#### 本地环境
```
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.7.0 (推荐5.7版本)
Redis >= 3.0
Maven >= 3.0
Node >= 12
nacos >= 2.0.4 (ruoyi-cloud < 3.0 需要下载nacos >= 1.4.x版本)
sentinel >= 1.6.0
```
因为本项目是微服务的，所以需要前后端都单独启动好，才能进行访问。同时后端需要启动多个模块。

#### Nacos安装(在window系统下)
- 下载nacos对应GitHub的链接：[https://github.com/alibaba/nacos/tags](https://github.com/alibaba/nacos/tags)
- 进入链接后，选择所需版本并点击zip格式下载
- 下载完成后解压可以看到如下目录：
```
nacos
├─ bin       //启动脚本目录
├─ conf      //配置文件目录
├─ data      //源代码目录
├─ plugin    //日志目录
├─ plugin    //插件目录
├─ target    //编译后的输出目录
├─ LICENSE   
└─ NOTICE    
```
- 我们可以通过修改config目录下的 application.properties 文件修改nacos配置。比如端口号，其默认值为8848，是一个非常成功人士的端口，一般情况下无需修改。
- 完成上述操作后我们可以试着启动nacos,首先进入bin目录下，路径栏输入cmd 进入命令行窗口，输入：
```sh
./startup.cmd -m standalone    
```
::: details nacos配置详情
即可启动nacos。成功界面如下
```txt no-line-numbers
"nacos is starting with standalone"

         ,--.
       ,--.'|
   ,--,:  : |                                           Nacos 2.4.2
,`--.'`|  ' :                       ,---.               Running in stand alone mode, All function modules
|   :  :  | |                      '   ,'\   .--.--.    Port: 8848
:   |   \ | :  ,--.--.     ,---.  /   /   | /  /    '   Pid: 16796
|   : '  '; | /       \   /     \.   ; ,. :|  :  /`./   Console: http://127.0.0.1:8848/nacos/index.html
'   ' ;.    ;.--.  .-. | /    / ''   | |: :|  :  ;_
|   | | \   | \__\/: . ..    ' / '   | .; : \  \    `.      https://nacos.io
'   : |  ; .' ," .--.; |'   ; :__|   :    |  `----.   \
|   | '`--'  /  /  ,.  |'   | '.'|\   \  /  /  /`--'  /
'   : |     ;  :   .'   \   :    : `----'  '--'.     /
;   |.'     |  ,     .-./\   \  /            `--'---'
'---'        `--`---'     `----'

2024-09-22 22:25:40,708 INFO Tomcat initialized with port(s): 8848 (http)
2024-09-22 22:25:40,941 INFO Root WebApplicationContext: initialization completed in 2483 ms
2024-09-22 22:25:44,967 INFO Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@65a4798f, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@773f7880, org.springframework.security.web.context.SecurityContextPersistenceFilter@20b5f2ac, org.springframework.security.web.header.HeaderWriterFilter@36676c1a, org.springframework.security.web.csrf.CsrfFilter@4763c727, org.springframework.security.web.authentication.logout.LogoutFilter@2e54db99, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@7e3060d8, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@2692b61e, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@878452d, org.springframework.security.web.session.SessionManagementFilter@4d098f9b, org.springframework.security.web.access.ExceptionTranslationFilter@51e8e6e6]
2024-09-22 22:25:45,208 INFO Adding welcome page: class path resource [static/index.html]
2024-09-22 22:25:45,564 INFO Exposing 1 endpoint(s) beneath base path '/actuator'
2024-09-22 22:25:45,575 WARN You are asking Spring Security to ignore Ant [pattern='/**']. This is not recommended -- please use permitAll via HttpSecurity#authorizeHttpRequests instead.
2024-09-22 22:25:45,576 INFO Will not secure Ant [pattern='/**']
2024-09-22 22:25:45,576 WARN You are asking Spring Security to ignore Mvc [pattern='/prometheus']. This is not recommended -- please use permitAll via HttpSecurity#authorizeHttpRequests instead.
2024-09-22 22:25:45,576 INFO Will not secure Mvc [pattern='/prometheus']
2024-09-22 22:25:45,577 WARN You are asking Spring Security to ignore Mvc [pattern='/prometheus/namespaceId/{namespaceId}']. This is not recommended -- please use permitAll via HttpSecurity#authorizeHttpRequests instead.
2024-09-22 22:25:45,578 INFO Will not secure Mvc [pattern='/prometheus/namespaceId/{namespaceId}']
2024-09-22 22:25:45,578 WARN You are asking Spring Security to ignore Mvc [pattern='/prometheus/namespaceId/{namespaceId}/service/{service}']. This is not recommended -- please use permitAll via HttpSecurity#authorizeHttpRequests instead.
2024-09-22 22:25:45,578 INFO Will not secure Mvc [pattern='/prometheus/namespaceId/{namespaceId}/service/{service}']
2024-09-22 22:25:45,610 INFO Tomcat started on port(s): 8848 (http) with context path '/nacos'
2024-09-22 22:25:45,610 INFO No TaskScheduler/ScheduledExecutorService bean found for scheduled processing
2024-09-22 22:25:45,626 INFO Nacos started successfully in stand alone mode. use external storage
```

- 启动`nacos`后，运行成功可以通过(`localhost:8848`)访问,图形界面工具。


***nacos的服务注册***

- 现在我们就来将我们的服务注册进nacos,首先我们引入nacos服务发现依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```
- 其次在配置文件(yaml格式)进行如下简单nacos配置
```yaml
spring:
  application:
    name: orderserver #注册的服务名称
  cloud:
    nacos:
      server-addr: localhost:8848 #nacos地址
      discovery:
        cluster-name: HZ #设置集群名称
```
- 现在我们启动该服务，即可在nacos图形界面的服务列表中找到我们的服务
![nacoa-1.png](/img/nacoa-1.png)
- 现在我们的服务就已经注册完成了
***利用图形化界面配置服务***
- 现在我们在注册user服务并实现热更新式配置,首先引入nacos配置依赖
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```
- 然后在user服务资源文件夹下创建 bootstrap.yml（优先于application.yml文件读取，以提前获得nacos地址用于读取存放在nacos的远程配置，） 文件，并写入如下代码
```yml
spring:
  application:
    name: userservice #服务名称
  profiles:
    active: dev #服务所处环境，dev表示开发环境
  cloud:
    nacos:
      server-addr: localhost:8848 #nacos地址
      config:
        file-extension: yaml #nacos远程配置格式
```
- 启动服务
- 现在我们来到图形化界面，打开配置管理>>配置列表，点击创建配置打开如下界面:
![nacoa-2.png](/img/nacoa-2.png)
- 其中dataid的格式是固定的： “服务名”+ “-”+“环境名” .格式名，分别对应bootstrap.yml文件中的userservice , dev,  yaml。 所以我的dataid就是： userservice-dev.yaml
- 描述按情况写
- 选择格式为yaml
- 配置内容我就以日期格式化的模板为例，结果如下:
![nacoa-3.png](/img/nacoa-3.png)
- 点击发布，我们就完成了远程配置
- 值得注意的是，如果不指定服务环境，即可命名为：userservice.yaml。它将对所有环境的用户服务生效。如果同一个配置同时存在上述两种配置和代码中的本地配置则： userservice-dev.yaml  >  userservice.yaml > 本地配置
- 最后一步，回到我们的代码上，如下声明一个类：
```java
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
 
@ConfigurationProperties(prefix = "pattern") //这里的prefix用来指明前缀
@Data
@Component
public class Pattern {
    private String dateformat; //这里变量名必须是配置的名称
}
```
- 现在这个类已经在spring容器中了，我们就可以直接通过自动装配在服务的其他地方用Pattern对象获取字符串：yyyy/MM/dd HH:mm:ss 了
```java
  @Autowired
    private Pattern dateformat;
    @GetMapping("/now")
    public String getNow(){
        log.info("dataformat: {}", dateformat);
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateformat.getDateformat()));
    }
```
- ok，现在我们启动服务，输入http://localhost:端口号/user/now 就可以获得格式化后的日期了

- 注意：我们这样实现的热更新配置在更改nacos管理的远程配置时，无须重启即可生效
- 以上就是nacos的入门介绍,原文链接：https://blog.csdn.net/qq_62859700/article/details/136278303

:::

#### 在本地环境运行后端
1. 导入到`Eclipse`，菜单 `File` -> `Import`，然后选择 `Maven` -> `Existing Maven Projects`，点击 `Next`> 按钮，选择工作目录，然后点击 `Finish` 按钮，即可成功导入。
`Eclipse`会自动加载`Maven`依赖包，初次加载会比较慢（根据自身网络情况而定）
2. 创建数据库`ry-cloud`并导入数据脚本`ry_2021xxxx.sql`（必须），`quartz.sql`（可选）
3. 创建数据库`ry-config`并导入数据脚本`ry_config_2021xxxx.sql`（必须）
```sql
# 导入数据
mysql> CREATE DATABASE `ry-cloud` CHARACTER SET utf8;
mysql> use ry-cloud;
mysql> source /home/ry-cloud/sql/ry_20240629.sql;
```
导出数据和表结构：
```sh
mysqldump -u用户名 -p密码 数据库名 > 数据库名.sql
```
4. 配置`nacos`持久化，修改`conf/application.properties`文件，增加支持`mysql`数据源配置
```
# db mysql
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://localhost:3306/ry-config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user=root
db.password=password
```

::: tip 提示
配置文件`application.properties`是在下载的`nacos-server`包`conf`目录下。
最新`RuoYi-Cloud`版本`>=3.0.0`需要下载的`nacos-server`必须`>=2.x.x`版本。
默认配置单机模式，`nacos`集群/多集群部署模式参考 [`Nacos`支持三种部署模式](https://nacos.io/zh-cn/docs/deployment.html)
:::

5. 打开运行基础模块（启动没有先后顺序）

|模块名	  |备注|
| ------- | :---- |
|RuoYiGatewayApplication	    |网关模块 （必须）|
|RuoYiAuthApplication	        |认证模块 （必须）|
|RuoYiSystemApplication	      |系统模块 （必须）|
|RuoYiMonitorApplication	    |监控中心 （可选）|
|RuoYiGenApplication	        |代码生成 （可选）|
|RuoYiJobApplication	        |定时任务 （可选）|
|RuoYFileApplication	        |文件服务 （可选）|

打开项目运行`com.ruoyi.system.RuoYiSystemApplication.java`，出现如下图表示启动成功。
```
(♥◠‿◠)ﾉﾞ  系统模块启动成功   ლ(´ڡ`ლ)ﾞ  
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
运行前需要先启动`nacos`，运行成功可以通过(`localhost:8080`)访问，但是不会出现静态页面，可以继续参考下面步骤部署`ruoyi-ui`前端，然后通过前端地址来访问。
:::

6. 集成seata分布式事务（可选配置，默认不启用）

创建数据库`ry-seata`并导入数据脚本`ry_seata_2021xxxx.sql`
[参考集成nacos配置中心](https://doc.ruoyi.vip/ruoyi-cloud/cloud/seata.html#%E9%9B%86%E6%88%90nacos%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83)

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
前端运行成功可以通过(`localhost:80`) 默认账户/密码 admin/admin123）
若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功。
:::
前端配置
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
        target: http ://localhost:8080,
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
因为本项目是微服务的，所以部署方式有多种。
::: 
#### 微服务部署的主要方式‌
微服务的部署方式主要有以下几种：
|部署方式	  |备注|
| ------- | :---- |
|单机多进程             |在单台机器上运行多个微服务进程，每个服务监听不同的端口并通过环回接口进行通信。|
|多台机器多进程	        |在多台机器上运行多个微服务进程，提供更高的可扩展性和可用性。|
|容器	                 |将微服务封装在容器中，通过容器编排工具进行部署和管理。|
|‌编排器	              |使用‌Kubernetes或‌Nomad等编排器，自动化和管理微服务的部署。|
|无服务器	             |在云环境中直接运行代码，无需关心进程和服务器。|
|单主机多服务实例模式	  |在单台主机上运行多个服务实例，共享服务器资源。|

每种部署方式的详细描述和优缺点：

|部署方式	  |优点|缺点|
| ------- | :---- | :---- |
|‌单机多进程	    |轻量级、方便、容易排除故障、固定计费。|没有可扩展性、单点故障、资源限制。|
|‌多台机器多进程	        |高可扩展性、高可用性。|成本较高、管理复杂。|
|‌容器       |轻量级、灵活、易于管理。|学习曲线、资源隔离问题。|
|编排器	    |自动化、高可用性、可扩展性。|复杂度高、成本较高。|
|‌无服务器	        |无需关心服务器和进程、成本低。|适用范围有限、功能限制。|
|‌单主机多服务实例模式	        |资源利用高效、部署快速。|服务实例间隔离差、运维复杂。|

#### 线上环境
```
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.7.0 (推荐5.7版本)
Redis >= 3.0
Maven >= 3.0
Node >= 12
nacos >= 2.0.4 (ruoyi-cloud < 3.0 需要下载nacos >= 1.4.x版本)
sentinel >= 1.6.0
```
[部分安装方法可以见若依前后端分离版的部署方法](/work-item/ruoyi-vue-work-item.md#部署)

[sentinel部署方法](https://sentinelguard.io/zh-cn/docs/quick-start.html)
```sh
java -jar sentinel-dashboard-1.8.8.jar --server.port=8718
```
::: details nacos部署方法
Nacos 是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。以下是部署 Nacos 的基本步骤：

下载 Nacos: 访问 Nacos 的 GitHub 仓库 (https://github.com/alibaba/nacos/releases) 下载最新的 Nacos 二进制包。

解压 Nacos: 将下载的 Nacos 包解压到指定目录。

运行 Nacos: 进入 Nacos 的 bin 目录，根据操作系统运行对应的启动脚本。

对于单机模式（开发或测试环境），可以直接运行以下命令：
```sh
# 进入 Nacos 的 bin 目录
cd nacos/bin
# 启动 Nacos 服务
./startup.sh -m standalone
对于集群模式，您需要准备至少三个 Nacos 实例以构建一个三节点集群。在此模式下，确保数据库（如 MySQL）被正确配置，并且每个 Nacos 实例都能连接到这个数据库。
```
以下是集群部署的基本步骤：

配置 Nacos 集群配置文件: 在 nacos/conf 目录中，编辑 cluster.conf 文件，添加所有集群节点的 IP 和端口信息。

配置数据库: 修改 nacos/conf/application.properties 文件，配置数据库连接信息。

启动 Nacos 实例: 分别在每个节点上运行 Nacos，使用相同的配置文件。
```sh
# 进入 Nacos 的 bin 目录
cd nacos/bin
# 启动 Nacos 服务
./startup.sh
确保防火墙和网络设置允许相应的端口（默认为 8848）上的流量。
```
以上步骤是部署 Nacos 的基本步骤，具体细节可能因环境和需求有所不同。
:::