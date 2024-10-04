---
layout: doc
outline: deep
---
# linux命令

​		好记性不如烂笔头，记录一些之前工作常用的Linux命令。很多linux命令在紧急时刻会有关键作用。

  参考文章
- https://github.com/jaywcjlove/linux-command
- https://wangchujiang.com/linux-command/
## 常用的Linux命令
### 显示或管理执行中的程序
```sh
top
```
### 显示历史
```sh
history
```
### 切换用户当前工作目录
```sh
cd
```
### 在指定目录下查找文件
```sh
find
```
### 显示当前的工作目录
```sh
pwd
```
### 显示所有文件包括隐藏文件
```sh
ls -a 
```
### 显示文件的详细信息
```sh
ls -l 
```
### 命令zip压缩文件
```sh
zip linuxcast.zip(压缩后的文件名) 要压缩的文件
```
### 命令unzip解压包
```sh
unzip linuxcast.zip(压缩后的文件名)
```
### 命令tar解压/压缩文件
```sh
tar -xvf /home/linuxcast.tar.gz(压缩后的文件名)
tar -cvf /home/linuxcast.tar.gz(压缩后的文件名) 要压缩的文件
```
### 文本编辑 vim
i:进入编辑模式保存，退出操作
esc+

：wq 保存退出
：q 退出
：q！强制退出不保存修改

保存退出文本命令
需要注意的是，"w!" 和 "wq!" 等类似的指令，通常用于对文件没有写权限的时候（显示 readonly，如图 12 所示），但如果你是文件的所有者或者 root 用户，就可以强制执行！
|命令	  |功能描述|
| ------- | :---- |
|:wq	  |保存并退出 Vim 编辑器|
|:wq!	  |保存并强制退出 Vim 编辑器|
|:q	    |不保存就退出 Vim 编辑器|
|:q!	  |不保存，且强制退出 Vim 编辑器|
|:w	    |保存但是不退出 Vim 编辑器|
|:w!	  |强制保存文本|
|:!   	|强制退出|
|:w     |filename	另存到 filename 文件|
|x！	  |保存文本，并退出 Vim 编辑器，更通用的一个 vim 命令|
|ZZ	    |直接退出 Vim 编辑器|
|:e!	  |放弃所有修改，从上次保存文件开始再编辑|
### 删除文件夹
```sh
rm -r 文件夹名称
```
### 删除文件
```sh
rm 文件名
```
### 删除文件移动
将usr目录下的jdk文件cut到usr文件的local文件夹下面
```sh
 mv /usr/jdk1.7.0_79 /usr/local
```
### 显示文本文件的内容
```sh
cat 文件名
cat  access.log | grep '关键字'  -A 500 -B 500  这种用法是查找关键字上下文500行
```
### 复制文件或目录
用于复制文件或目录。例如，将文件 file1.txt 复制到目录 backup 中：
```sh
cp file1.txt backup/
```
### 在本地主机和远程主机之间安全地复制文件
用于在本地主机和远程主机之间安全地复制文件。例如，将本地文件 file1.txt 复制到远程服务器 example.com 的 /tmp 目录下：
```sh
scp file1.txt username@example.com:/tmp/
```
### 本地或远程主机之间同步文件和目录
用于在本地或远程主机之间同步文件和目录。例如，将本地目录 source_dir 同步到远程服务器 example.com 的 /destination_dir 目录下：
```sh
rsync -avz source_dir/ username@example.com:/destination_dir/
```