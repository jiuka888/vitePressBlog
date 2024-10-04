---
outline: deep
lastUpdated: true
---
# 开源项目 

整理整理一些自己的javaWeb开源项目，本文档记录的网站样例为：若依移动端版。

- ruoyi移动端版本人演示地址：   http://8.138.177.13:83

- ruoyi移动端版官方H5页演示地址：http://h5.ruoyi.vip

- ruoyi移动端版官方文档地址：   [https://doc.ruoyi.vip/ruoyi-app/](https://doc.ruoyi.vip/ruoyi-app/)

- ruoyi移动端版代码下载地址：   [https://gitee.com/y_project/RuoYi-App](https://gitee.com/y_project/RuoYi-App)

- 小程序体验:
![ruoyi-app-0.jpeg](https://img.picgo.net/2024/09/25/ruoyi-app-011eaa9ba94f82ee3.jpeg)
## (ruoyi移动端版)若依框架搭建 🌐
### 运行
#### 本地环境
```
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.7.0 (推荐5.7版本)
Maven >= 3.0
Node >= 12
Redis >= 3
```
#### 准备工作
***如果使用`RuoYi-App`项目，在此基础上希望得到最大化的效率工具支持，那么`HBuilderX`是你的首选。***

1. 首先访问`HBuilderX`的官网网址：https://www.dcloud.io/hbuilderx.html

2. 打开上面的`HBuilderX`下载网址后点击页面上`download`，在弹出的对话框里选择适合自己电脑的`HBuilderX`版本下载。

3. 在`Windows10`环境下下载后的文件是一个压缩的`.zip`文件，解压后双击运行`HBuilderX.exe`即可启动编辑器。

#### 运行系统
::: tip 前置条件，需要先启动RuoYi-Vue后端。

如何启动`RuoYi-Vue`后端可以参考 [RuoYi-Vue后端启动流程](/work-item/ruoyi-vue-work-item.html#在本地环境运行后端)
:::
前往`Gitee`下载页面(https://gitee.com/y_project/RuoYi-App)下载解压到工作目录

1. 点击`HBuilderx`，菜单 `文件` -> `打开目录`，然后选择`RuoYi-App`项目，点击`选择文件夹`按钮，即可成功导入。
2. 点击`HBuilderx`，菜单 `运行` -> `运行到浏览器`，然后选择浏览器类型，即可在浏览器里面访问。
3. 运行成功可以通过(`http://localhost:9090`)访问，出现如下图页面表示成功运行。
![ruoyi-app-1.png](/img/ruoyi-app-1.png)

#### 必要配置

修改后端请求接口，编辑RuoYi-App目录下的config.js
```js{3}
 // 应用全局配置
module.exports = {
  baseUrl: 'http://localhost:8080',
  // 应用信息
  appInfo: {
    // 应用名称
    name: "ruoyi-app",
    // 应用版本
    version: "1.0.0",
    // 应用logo
    logo: "/static/logo.png",
    // 官方网站
    site_url: "http://ruoyi.vip",
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "https://ruoyi.vip/protocol.html"
      },
      {
        title: "用户服务协议",
        url: "https://ruoyi.vip/protocol.html"
      }
    ]
  }
}

```
### 部署系统
::: tip温馨提示

因为本项目是APP和后端完全分离的，所以需要将后端也部署好，才能进行访问。 可以参考 [RuoYi-Vue后端部署流程](/work-item/ruoyi-vue-work-item.html#在本地环境运行后端)
:::
当项目开发完毕，只需要点击`HBuilderx`，菜单 `发行` -> `网站-PC WEB或手机H5`，然后填好标题及域名，点击`发行`按钮，即可成功打包。

构建打包成功之后，会在根目录生成 `unpackage/dist/build/h5` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

通常情况下 `dist` 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 `index.html` 是后台服务的入口页面。

如果是`H5`部署，推荐通过`Nginx代理配置`。将`config.js`的`baseUrl`换成`/prod-api`。

::: tip 如何发布Android、IOS、小程序

也是一样的流程，发行的时候选择需要的方式。
小程序及APP`baseUrl`使用域名或IP方式访问。
:::
### Nginx代理配置
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
			root   /home/ruoyi/projects/ruoyi-h5;
			try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
		# 默认所有路径
        location /prod-api/ {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE_HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header X-NginX-Proxy true;
			
            # 反向代理配置
            proxy_pass http://localhost:8080/;
        }
		
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```