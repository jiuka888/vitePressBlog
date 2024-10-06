import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig ({
  title: "学习笔记",
  description: "A VitePress Site",
  //文档最后更新时间
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),    
    aside:true,// 打开右侧侧边栏
    // 右侧侧边栏顶部名称
    outline: {
      label: '页面导航'
    },
    sidebar: {
      '/work-item/': { base: '/work-item/', items: sidebarWorkItem() },
      '/basics/': { base: '/basics/', items: sidebarBasics() },
      '/examples/': { base: '/examples/', items: sidebarExamples() },
      '/java/': { base: '/java/', items: sidebarJava() },        
             },//侧边栏菜单
           
    
    socialLinks: [
      // {
      //   icon: {
      //     svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>',
      //   },
      //   link: "https://space.bilibili.com/61394231",
      // },
      { icon: 'github', link: 'https://github.com/jiuka888' }
    ],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    //首页页脚
    footer:{
      copyright:"Copyright@ 2024 JianRong Yin",
    },
    //文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    //文档最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    lastUpdatedText: "最后更新",
    returnToTopLabel: '回到顶部',
    // sidebarMenuLabel: '菜单',
    // darkModeSwitchLabel: '主题',
    // lightModeSwitchTitle: '切换到浅色模式',
    // darkModeSwitchTitle: '切换到深色模式'

  },
  markdown: {
    //代码块里展示行号
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
      
    }
  }
})

//顶部的导航栏
function nav(){
  return [
    // { text: 'Home', link: '/' },
    { text: '开源项目',
      items: [
        { text: '若依不分离版', link: '/work-item/ruoyi-work-item' },
        { text: '若依分离版', link: '/work-item/ruoyi-vue-work-item' },
        { text: '若依移动端版', link: '/work-item/ruoyi-app-work-item' },
        { text: '若依微服务版', link: '/work-item/ruoyi-cloud-work-item' }
      ] 
    },
    { text: '基础笔记',
      items: [
        { text: 'java', link: '/java/JavaBasics/1_数据类型' },
        { text: 'linux命令', link: '/basics/linux-command' },
        { text: 'python', link: '/basics/python-base' },
        { text: 'React', link: '/basics/react-base' },
      ] 
    },
    { text: '参考',
      items: [
        { text: '建站原因', link: '/examples/reason' },
        { text: '官方实例', link: '/examples/markdown-examples' }
      ] 
    }
  ]
}

//侧边栏菜单/work-item
function sidebarWorkItem(){
  return [
    {
      text: '开源项目',
      collapsed: false,
      items: [
        { text: '若依不分离版', link: 'ruoyi-work-item' },
        { text: '若依分离版', link: 'ruoyi-vue-work-item' },
        { text: '若依移动端版', link: 'ruoyi-app-work-item' },
        { text: '若依微服务版', link: 'ruoyi-cloud-work-item' }
      ],
    }
  ]
}
//侧边栏菜单/basics
function sidebarBasics(){
  return [
    {
      text: '基础笔记',
      collapsed: false,
      items: [
        { text: 'linux命令', link: 'linux-command' },
        { text: 'python', link: 'python-base' },
        { text: 'React', link: 'react-base' },
        
      ],
    }
  ]
}
//侧边栏菜单/examples
function sidebarExamples(){
  return [
    {
      text: '建站原因',
      collapsed: false,
      items: [
        { text: '建站原因', link: 'reason' }
      ]
    },
    {
      text: '官方实例',
      collapsed: false,
      items: [
        { text: 'Markdown Examples', link: 'markdown-examples' },
        { text: 'Runtime API Examples', link: 'api-examples' }
      ]
    }
  ]
}
//侧边栏菜单/java
function sidebarJava(){
  return [
    {
      text: '9天学习Java',
      collapsed: false,
      items: [
        { text: 'Java_day01', link: 'JavaDay9/1_day_java' },
        { text: 'Java_day02', link: 'JavaDay9/2_day_java' },
        { text: 'Java_day03', link: 'JavaDay9/3_day_java' },
        { text: 'Java_day04', link: 'JavaDay9/4_day_java' },
        { text: 'Java_day05', link: 'JavaDay9/5_day_java' },
      ]
    },
    {
      text: 'Java',
      collapsed: true,
      items: [
        {
          text: 'Java基础',
          collapsed: true,
          items: [
            { text: '数据类型', link: 'JavaBasics/1_数据类型' },
            { text: '正则表达式', link: 'JavaBasics/2_正则表达式' },
            { text: '运算', link: 'JavaBasics/3_运算' },
            { text: 'Object通用方法', link: 'JavaBasics/4_Object通用方法' },
            { text: '关键字', link: 'JavaBasics/5_关键字' },
            { text: '反射', link: 'JavaBasics/6_反射' },
            { text: 'JDK8新特性', link: 'JavaBasics/7_JDK8新特性' },
            { text: '泛型', link: 'JavaBasics/8_泛型' },
            { text: 'Java常见对象', link: 'JavaBasics/9_Java常见对象' },
            { text: 'Java常见对象_2', link: 'JavaBasics/10_Java常见对象_2' },
          ]
        },
        {
          text: 'Java容器',
          collapsed: true,
          items: [
            { text: '容器概览', link: 'JavaContainer/1_容器概览' },
            { text: '容器中的设计模式', link: 'JavaContainer/2_容器中的设计模式' },
            { text: '容器源码分析 - List', link: 'JavaContainer/3_容器源码分析_List' },
            { text: '容器源码分析 - Map', link: 'JavaContainer/4_容器源码分析_Map' },
            { text: '容器源码分析 - 并发容器', link: 'JavaContainer/5_容器源码分析_并发容器' },
          ]
        },
        {
          text: 'Java 虚拟机',
          collapsed: true,
          items: [
            { text: 'Java内存区域', link: 'JVM/1_Java内存区域' },
            { text: '垃圾收集', link: 'JVM/2_垃圾收集' },
            { text: '内存分配与回收策略', link: 'JVM/3_内存分配与回收策略' },
            { text: 'JVM调优', link: 'JVM/4_JVM调优' },
            { text: '类文件结构', link: 'JVM/5_类文件结构' },
            { text: '类加载机制', link: 'JVM/6_类加载机制' },
            { text: 'Java程序编译和运行过程', link: 'JVM/7_Java程序编译和运行过程' },
          ]
        },
        {
          text: 'Java 并发',
          collapsed: true,
          items: [
            { text: '进程和线程', link: 'Java_Concurrency/1_基础知识' },
            { text: '并发理论', link: 'Java_Concurrency/2_并发理论' },
            { text: '并发关键字', link: 'Java_Concurrency/3_并发关键字' },
            { text: 'Lock 体系', link: 'Java_Concurrency/4_Lock%20体系' },
            { text: '原子操作类', link: 'Java_Concurrency/5_原子操作类' },
            { text: '并发容器', link: 'Java_Concurrency/6_并发容器' },
            { text: '并发工具', link: 'Java_Concurrency/7_并发工具' },
            { text: '线程池', link: 'Java_Concurrency/8_线程池' },
            { text: '并发实践', link: 'Java_Concurrency/9_并发实践' },
          ]
        },
        {
          text: 'Java I/O',
          collapsed: true,
          items: [
            { text: 'Java I/O 概览', link: 'JavaIO/1_概览' },
            { text: '磁盘操作', link: 'JavaIO/2_磁盘操作' },
            { text: '字节操作', link: 'JavaIO/3_字节操作' },
            { text: '字符操作', link: 'JavaIO/4_字符操作' },
            { text: '对象操作', link: 'JavaIO/5_对象操作' },
            { text: '网络操作', link: 'JavaIO/6_网络操作' },
            { text: 'NIO & AIO', link: 'JavaIO/7_NIO' },
            { text: 'Java I/O 方式', link: 'JavaIO/8_JavaIO方式' },
          ]
        },
        {
          text: 'Java数据结构',
          collapsed: true,
          items: [
            { text: '概述', link: 'data_structure/1_概述' },
            { text: '线性表', link: 'data_structure/2_线性表' },
            { text: '栈和队列', link: 'data_structure/3_栈和队列' },
            { text: '树', link: 'data_structure/4_树' },
            { text: '图', link: 'data_structure/5_图' },
            { text: '集合和映射', link: 'data_structure/6_集合和映射' },
            { text: '并查集', link: 'data_structure/7_并查集' },
            { text: '优先队列和堆', link: 'data_structure/8_优先队列和堆' },
            { text: '哈希表', link: 'data_structure/9_哈希表' },
            { text: '排序', link: 'data_structure/10_排序' },
            { text: '线段树', link: 'data_structure/11_线段树' },
            { text: 'Trie树', link: 'data_structure/12_Trie树' },
            { text: 'AVL', link: 'data_structure/13_AVL' },
            { text: '红黑树', link: 'data_structure/14_红黑树' },
          ]
        },
      ]
    },
    {
      text: '面向对象',
      collapsed: true,
      items: [
        {
          text: '设计模式',
          collapsed: true,
          items: [
            { text: '概述', link: 'OO/1_概述' },
            { text: '创建型', link: 'OO/2_创建型' },
            { text: '行为型', link: 'OO/3_行为型' },
            { text: '结构型', link: 'OO/4_结构型' },
          ]
        },
        {
          text: '面向对象思想',
          collapsed: true,
          items: [
            { text: '面向对象三大特性', link: 'OO/5_面向对象三大特性' },
            { text: '关系类图', link: 'OO/6_关系类图' },
            { text: '面向对象设计原则', link: 'OO/7_面向对象设计原则' },
          ]
        },
      ]
    },
    {
      text: '编程题',
      collapsed: true,
      items: [
        {
          text: '数据结构系列',
          collapsed: true,
          items: [
            { text: '数组 & 矩阵', link: 'AimForOffer/数据结构相关/1_数组和矩阵' },
            { text: '字符串', link: 'AimForOffer/数据结构相关/2_字符串' },
            { text: '链表', link: 'AimForOffer/数据结构相关/3_链表' },
            { text: '树', link: 'AimForOffer/数据结构相关/4_树' },
            { text: '栈', link: 'AimForOffer/数据结构相关/5_栈' },
            { text: '队列', link: 'AimForOffer/数据结构相关/6_队列' },
            { text: '堆', link: 'AimForOffer/数据结构相关/7_堆' },
            { text: '哈希表', link: 'AimForOffer/数据结构相关/8_哈希' },
          ]
        },
        {
          text: '算法思维系列',
          collapsed: true,
          items: [
            { text: '查找', link: 'AimForOffer/算法思想相关/1_查找' },
            { text: '排序', link: 'AimForOffer/算法思想相关/2_排序' },
            { text: '动态规划', link: 'AimForOffer/算法思想相关/3_动态规划' },
            { text: '搜索', link: 'AimForOffer/算法思想相关/4_搜索' },
            { text: '排列组合', link: 'AimForOffer/算法思想相关/5_排列组合' },
            { text: '贪心', link: 'AimForOffer/算法思想相关/6_贪心' },
            { text: '数学运算', link: 'AimForOffer/算法思想相关/7_数学运算' },
            { text: '其他', link: 'AimForOffer/算法思想相关/8_其他' },
          ]
        },
      ]
    },
    {
      text: '数据库',
      collapsed: true,
      items: [
        {
          text: '数据库理论',
          collapsed: true,
          items: [
            { text: '数据库系统原理', link: 'DataBase/1_数据库系统原理' },
            { text: '关系数据库设计理论', link: 'DataBase/2_关系数据库设计理论' },
            { text: '如何设计关系型数据库', link: 'DataBase/3_设计关系型数据库' },
            { text: 'LeetCode SQL 练习', link: 'DataBase/5_LeetCode_Database题解' },
          ]
        },
        {
          text: 'MySQL',
          collapsed: true,
          items: [
            { text: '锁机制', link: 'MySQL/1_锁机制' },
            { text: '事务隔离级别实现', link: 'MySQL/2_事务隔离级别实现' },
            { text: '索引', link: 'MySQL/3_索引' },
            { text: 'MySQL架构', link: 'MySQL/4_MySQL架构' },
            { text: 'MySQL优化', link: 'MySQL/5_MySQL优化' },
            { text: 'MySQL数据类型', link: 'MySQL/6_MySQL数据类型' },
            { text: '切分 & 复制问题', link: 'MySQL/切分复制问题' },
            { text: '补充知识', link: 'MySQL/6_补充知识' },
          ]
        },
        {
          text: 'Redis',
          collapsed: true,
          items: [
            { text: 'Redis 概述', link: 'Redis/1_概述' },
            { text: 'Redis 数据类型', link: 'Redis/2_数据类型' },
            { text: 'Redis 单线程模型', link: 'Redis/3_单线程模型' },
            { text: '键的过期时间 & 内存淘汰机制', link: 'Redis/4_键的过期时间和内存淘汰机制' },
            { text: 'Redis 持久化机制', link: 'Redis/5_持久化机制' },
            { text: 'Redis 事务', link: 'Redis/6_事务' },
            { text: 'Redis 缓存问题', link: 'Redis/7_缓存问题' },
            { text: 'Redis 部署方式', link: 'Redis/8_部署方式' },
            { text: 'Redis 实战', link: 'Redis/9_实战' },
          ]
        },
      ]
    },
    {
      text: '系统设计',
      collapsed: true,
      items: [
        {
          text: '系统设计基础',
          collapsed: true,
          items: [
            { text: '系统设计基础', link: '1_基础' },
          ]
        },
        {
          text: '安全性',
          collapsed: true,
          items: [
            { text: 'Cookie & Session &Token', link: 'Safety/Cookie_Session_Token' },
            { text: '常见攻击技术及防御', link: 'Safety/常见攻击技术及防御' },
          ]
        },
        {
          text: '分布式',
          collapsed: true,
          items: [
            { text: '分布式系统基本概念', link: 'distribution/1_分布式系统设计理念' },
            { text: 'CAP 理论 & BASE 理论', link: 'distribution/2_CAP理论' },
            { text: '分布式锁', link: 'distribution/3_分布式锁' },
            { text: '分布式事务', link: 'distribution/4_分布式事务' },
            { text: 'Paxos 算法 & Raft 算法', link: 'distribution/5_Paxos算法' },
          ]
        },
        {
          text: '集群',
          collapsed: true,
          items: [
            { text: '负载均衡', link: 'cluster/1_负载均衡' },
            { text: '集群下的 Session 管理', link: 'cluster/2_集群下的Session管理' },
          ]
        },
        {
          text: '缓存',
          collapsed: true,
          items: [
            { text: '缓存需要考虑的问题', link: 'cache/1_缓存需要考虑的问题' },
            { text: '缓存常见问题', link: 'cache/2_缓存常见问题' },
            { text: '数据分布', link: 'cache/3_数据分布' },
          ]
        },
        {
          text: '消息队列',
          collapsed: true,
          items: [
            { text: '消息队列', link: '1_消息队列' },
            { text: 'Kafka 原理及应用', link: 'Kafka&RabbitMQ/Kafka' },
            { text: 'RabbitMQ 原理及应用', link: 'Kafka&RabbitMQ/RabbitMQ' },
            { text: 'Kafka & RabbitMQ 比较', link: 'Kafka&RabbitMQ/Kafka_RabbitMQ' },
          ]
        },
      ]
    },
    {
      text: '常用框架',
      collapsed: true,
      items: [
        {
          text: 'Spring',
          collapsed: true,
          items: [
            
            { text: 'Spring 概述', link: 'Spring/1_Spring概述' },
            { text: 'Spring IoC 原理', link: 'Spring/2_SpringIoC原理' },
            { text: 'SpringAOP原理', link: 'Spring/3_SpringAOP原理' },
            { text: 'SpringMVC原理', link: 'Spring/4_SpringMVC原理' },
            { text: 'Spring事务管理', link: 'Spring/5_Spring事务管理' },
            { text: 'Spring中用到的设计模式', link: 'Spring/6_Spring中用到的设计模式' },
            { text: 'MyBatis', link: 'Spring/7_MyBatis' },

          ]
        },
        {
          text: 'SpringBoot',
          collapsed: true,
          items: [
            
            { text: 'SpringBoot概述', link: 'SpringBoot/1_SpringBoot概述' },
            { text: '配置文件', link: 'SpringBoot/2_配置文件' },
            { text: '常用注解', link: 'SpringBoot/3_常用注解' },
            { text: '请求参数校验', link: 'SpringBoot/4_请求参数校验' },
            { text: '全局异常处理', link: 'SpringBoot/5_全局异常处理' },
            { text: '实现定时任务', link: 'SpringBoot/6_实现定时任务' },

          ]
        },
        {
          text: 'Zookeeper',
          collapsed: true,
          items: [
            
            { text: 'Zookeeper 概述', link: 'Zookeeper/1_概述' },
            { text: 'Zookeeper 数据模型', link: 'Zookeeper/2_数据模型' },
            { text: 'Zookeeper 的原理', link: 'Zookeeper/3_原理' },
            { text: 'Zookeeper 的应用', link: 'Zookeeper/4_应用' },

          ]
        },
      ]
    },
    {
      text: '工具',
      collapsed: true,
      items: [
        {
          text: 'Git',
          collapsed: true,
          items: [
            
            { text: 'Git工具', link: '1_Tool' },

          ]
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            
            { text: 'Docker', link: '1_Tool' },

          ]
        },
      ]
    },
    {
      text: '参考资料',
      collapsed: true,
      items: [
        {
          text: '参考仓库',
          collapsed: true,
          items: [
            
            { text: 'Java 基础知识', link: 'reference/Java基础_1' },
            { text: 'Java 进阶知识', link: 'reference/Java进阶_1' },
            { text: '编程题', link: 'reference/编程题_1' },

          ]
        },
        {
          text: '参考书籍',
          collapsed: true,
          items: [
            
            { text: 'Java 基础', link: 'reference/Java基础_2' },
            { text: '编程题', link: 'reference/编程题_2' },
            { text: '数据库', link: 'reference/数据库' },
            { text: '常用框架', link: 'reference/常用框架' },

          ]
        },
        // {
        //   text: '小专栏',
        //   collapsed: true,
        //   items: [
            
        //     { text: '后端面试进阶指南', link: '1_Tip' },
        //     { text: 'Java 面试进阶指南', link: '1_Tip' },

        //   ]
        // },
      ]
    },
  ]
}
