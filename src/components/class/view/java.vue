<style scoped>
  .bread{
    font-size: 15px;
    padding: 15px;
  }
  .time{
    margin-top: 50px;
    margin-left: 150px;
  }
  .chapter{
    font-size: 20px;
    margin-top: -5px;
  }
  .content-name{
    font-size: 15px;
    margin: 10px 15px;
  }
  .prompt{
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    width: 250px;
  }
  .prompt-name{
    font-size: 15px;
  }
</style>


<template>
  <div class="java">
    <Breadcrumb class="bread">
      <Breadcrumb-item href="/main/class">学习路径</Breadcrumb-item>
      <Breadcrumb-item>Java工程师</Breadcrumb-item>
    </Breadcrumb>


    <Timeline class="time">

      <Timeline-item color="green" v-for="(item,index) in date">
        <p class="chapter">{{item.chapter}}</p>
        <div class="content">

          <div v-for="item in date[index].prompt">
            <Poptip trigger="hover" placement="right" width="300">
              <div class="content-name"><a target="_blank" :href="item.url">{{item.contentname}}</a></div>
              <div slot="content" class="prompt">
                <p class="prompt-name">{{item.promptname}}</p>
                <div class="prompt-content">{{item.promptcontent}}</div>
              </div>
            </Poptip>
          </div>

        </div>
      </Timeline-item>

    </Timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        date: [

          {'chapter': ' 入门必学',

            'prompt': [

              {'contentname': 'Java入门第一季',
                'promptname': '',
                'promptcontent': '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
                'url': 'http://www.imooc.com/learn/85'
              },
              {'contentname': 'Java入门第二季',
                'promptname': '',
                'promptcontent': '本课程是程序猿质变课程，理解面向对象的思想，掌握面向对象的基本原则以及 Java 面向对象编程基本实现原理，熟练使用封装、继承、多态面向对象三大特性，带你进一步探索 Java 世界的奥秘！',
                  'url': 'http://www.imooc.com/learn/124'
    },
      {'contentname': 'Java入门第三季',
        'promptname': '',
        'promptcontent': '在本课程中，@陈码农 携手 @laurenyany 将带领小伙伴们进一步探索 Java 的奥秘，希望通过本次课程的学习，能够帮助小伙伴们快速掌握关于Java中的异常处理、集合框架、字符串的操作和常用类的使用。不容错过的精彩，快来加入吧！！',
        'url': 'http://www.imooc.com/learn/110'
      },
      {'contentname': '二进制基础',
        'promptname': '',
        'promptcontent': '二进制是计算机唯一能识别的语言，是学习计算机技术必须要懂的知识。本门课程将带您认识二进制的由来，如何进行不同进制间的转换，如二进制与十进制减的相互转换，以及位运算，最后介绍Java中的进制。',
        'url': 'http://www.imooc.com/learn/195'
      },
      {'contentname': '文件传输基础——Java IO流',
        'promptname': '',
        'promptcontent': '如何在Java中进行文件的读写，Java IO流是必备的知识。本门课程主要为您带来Java中的输入输出流的内容，包括文件编码、使用File类对文件和目录进行管理、字节流和字符流的基本操作，以及对象的序列化和反序列化的内容。',
        'url': 'http://www.imooc.com/learn/123'
      },
      {'contentname': 'Java眼中的XML---文件读取',
        'promptname': '',
        'promptcontent': '文件的形态是千变万化的，在 Internet 中，我们通常使用一种叫做 XML 的文件来传输或者存储数据。本次课程中，@Jessica Jiang 将会带领小伙伴们把这种 XML 文件应用与 Java 程序结合起来，教你如何应用 Java“解析 XML ”。',
        'url': 'http://www.imooc.com/learn/171'
      },
      {'contentname': 'Java眼中的XML  文件写入',
        'promptname': '',
        'promptcontent': 'XML 在数据传输及存储等方面非常流行，所以使用 JAVA 程序来生成相应用途的 XML 文件就变得非常重要，那么问题来了：如何使用 JAVA 程序生成一个 XML 文档呢？本节课将详细为你解答！',
        'url': 'http://www.imooc.com/learn/251'
      },
      {'contentname': 'Java Socket应用---通信是这样练成的',
        'promptname': '',
        'promptcontent': '网络无处不在，移动互联时代也早已到来，单机版程序慢慢的已没有生命力，所有的程序都要能够访问网络，比如 QQ 网络聊天程序、迅雷下载程序等，这些程序都要同网络打交道，本次将与各位小伙伴们分享的就是 Java 中的网络编程—— Socket 通信',
        'url': 'http://www.imooc.com/learn/161'
      },
      {'contentname': '深入浅出Java多线程',
        'promptname': '',
        'promptcontent': '多线程是日常开发中的常用知识，也是难用知识。通过本视频，你可以了解Java中多线程相关的基本概念，如何创建，启动和停止线程？什么是正确的多线程，怎样编写多线程程序。在掌握基础之后，将为你展望进阶路线，为进一步的学习提供方向。',
        'url': 'http://www.imooc.com/learn/202'
      },
      {'contentname': '与MySQL的零距离接触',
        'promptname': '',
        'promptcontent': '本课程涵盖全部MySQL数据库的基础，主要学习MySQL数据库的基础知识、数据表的常用操作及各种约束的使用，以及综合的运用各种命令实现记录进行CURD等操作，本课程的目标就是“看得懂、学得会、做得出”，为后续的学习打下夯实的基础。',
        'url': 'http://www.imooc.com/learn/122'
      },
      {'contentname': 'Oracle数据库开发必备利器之SQL基础',
        'promptname': '',
        'promptcontent': 'Oracle Database，又名Oracle RDBMS，或简称Oracle，是甲骨文公司的一款关系数据库管理系统。本课程主要介绍Oracle的SQL基础，包括表空间的概念，如何登录Oracle数据库，如何管理表及表中的数据，以及约束的应用。为后续课程的学习打下一个良好的基础。',
        'url': 'http://www.imooc.com/learn/337'
      },
      {'contentname': 'JDBC之 “ 对岸的女孩看过来”',
        'promptname': '',
        'promptcontent': 'JDBC 技术是Java开发必备的知识，并且是学习 Hibernate 和 Mybatis 的基础，本视频通过实例贯穿的方式，给大家一点一点的剖析 JDBC 技术，使大家由浅入深的了解 JDBC 技术的全貌，什么是 JDBC ，怎么使用 JDBC ，为进一步学习集成框架打下良好的基础。',
        'url': 'http://www.imooc.com/learn/157'
      },
    ]

    },

      {'chapter': ' Web初识',

        'prompt': [

        {'contentname': 'HTML+CSS基础课程',
          'promptname': 'HTML/CSS',
          'promptcontent': '本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。',
          'url': 'http://www.imooc.com/learn/9'
        },
        {'contentname': 'JavaScript入门篇',
          'promptname': '',
          'promptcontent': '本教程让您快速认识JavaScript，熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作，学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式，本JavaScript教程分为四个章节，能够让您快速入门，为JavaScript深入学习打下基础。',
          'url': 'http://www.imooc.com/learn/36'
        },
        {'contentname': 'JavaScript进阶篇',
          'promptname': '',
          'promptcontent': '做为WEB攻城师必备技术JavaScript，本课程从如何插入JS代码开始，学习JS基础语法、语法、函数、方法等，让你掌握JS编程思路、知识的使用等，实现运用JS语言为网页增加动态效果，达到与用户交互的目的。',
          'url': 'http://www.imooc.com/learn/10'
        },
        {'contentname': 'JAVA遇见HTML——JSP篇',
          'promptname': '',
          'promptcontent': '亲，这里有资深讲师为初学者量身打造的Java Web入门级课程JSP，讲师将通过大量的案例向您展示JavaWeb开发环境搭建、工具使用和JSP的基本语法，深入理解Java Web开发思想，最终使您能独立开发简单的Java Web应用。',
          'url': 'http://www.imooc.com/learn/166'
        },
        {'contentname': 'Java Web开发技术应用——过滤器',
          'promptname': '',
          'promptcontent': '本课程主要是从实际生活当中的过滤器入手,详细讲解了Java Web过滤器的概念、工作原理、生命周期以及过滤器的API。然后从一个过滤器引入多个过滤器链的相关知识，同时课程还详细介绍了过滤器的分类。最后以两个实际项目当中的案例诠释了过滤器的应用。',
          'url': 'http://www.imooc.com/learn/213'
        },
        {'contentname': 'JAVA遇见HTML——Servlet篇',
          'promptname': '',
          'promptcontent': 'Servlet是JAVA Web开发的核心基础，在项目中的应用非常广泛。本门课程在JSP课程的基础上，深入介绍Servlet的基础知识。包括Servlet的执行流程和生命周期，Tomcat对Servlet的装载情况，如何获取表单数据以及Servlet路径跳转。最后会带大家使用流行的MVC架构进行项目开发。',
          'url': 'http://www.imooc.com/learn/269'
        },
        {'contentname': 'JAVA Web开发技术应用——监听器',
          'promptname': '',
          'promptcontent': '本课程从Java Web中的监听器的概念和用途入手，紧接着讲解监听器的第一个实例，然后由浅到深地从启动顺序到分类、从Servelt2.5到 Servlet3.0，重点讲解了两种分类，包括按监听的对象划分和按监听的事件划分，最后以一个实际项目中统计在线人数的案例进行讲解。',
            'url': 'http://www.imooc.com/learn/271'
      },
        {'contentname': '使用JSP+Servlet技术生成报表',
          'promptname': '',
          'promptcontent': '报表就是用表格、图表等格式来动态显示数据。本课程是Java Web的案例课程，主要关注于用表格形式来显示数据。主要内容包括报表的基础知识，报表实现原理和核心技术，以及如何使用JSP+Servlet技术来生成报表。',
          'url': 'http://www.imooc.com/learn/375'
        },
        {'contentname': 'Java实现验证码制作',
          'promptname': '',
          'promptcontent': '验证码的应用十分普遍，我们经常会在网上看到数字字母组合的验证码、包含中文的验证码、以及算式形式的验证码等等。本门课程就会带大家使用Java Web中的servlet以及Jcaptcha、Kaptcha两种开源组件来实现各式各样的验证码。',
          'url': 'http://www.imooc.com/learn/283'
        },
      ]

      },

      {'chapter': '框架与工具',

        'prompt': [

        {'contentname': '反射——Java高级开发必须懂的',
          'promptname': '',
          'promptcontent': '反射是Java开发中一个非常重要的概念，掌握了反射的知识，才能更好的学习Java高级课程，因此必须要学习——你懂的！本门课程主要介绍Class类的使用，方法和成员变量的反射，以及通过反射了解集合泛型的本质等知识。',
          'url': 'http://www.imooc.com/learn/199'
        },
        {'contentname': '全面解析Java注解',
          'promptname': '',
          'promptcontent': '在项目开发中，注解的使用无处不在。注解的使用简化了代码，减少了程序员的工作量。本课程带领小伙伴们全面认识Java的注解，包括为什么使用注解、Java中的常见注解、注解的分类和如何自定义注解，最后通过一个实战案例来演示注解在实际项目中的应用。',
          'url': 'http://www.imooc.com/learn/456'
        },
        {'contentname': 'Hibernate初探之单表映射',
          'promptname': '',
          'promptcontent': 'Hibernate是一个著名的对象关系映射框架，使得Java程序员可以随心所欲的使用对象编程思维来操纵数据库。本门课程是Hibernate的入门课程，主要介绍ORM和hibernate的概念，如何在eclipse中创建hibernate实例及相关配置文件的详解说明。',
          'url': 'http://www.imooc.com/learn/396'
        },
        {'contentname': 'Hibernate初探之一对多映射',
          'promptname': '',
          'promptcontent': '现实世界中的对象很少有孤立存在的，例如学生，往往与所在班级和授课老师之间存在关联关系。在本次课程中，@laurenyang将带领小伙伴们一起学习Hibernate中的关联映射——一对多映射，会依次向大家介绍单向一对多和单向多对一的配置，以及cascade和inverse属性的作用。',
          'url': 'http://www.imooc.com/learn/334'
        },
        {'contentname': 'HQL数据查询基础',
          'promptname': '',
          'promptcontent': '本次课程是Hibernate的进阶课程，将帮助小伙伴们，在掌握了使用Hibernate进行数据表管理之后，进一步认识什么是HQL，HQL常用的语句格式以及在Hibernate框架中如何执行HQL查询获取我们需要的数据。',
          'url': 'http://www.imooc.com/learn/410'
        },
        {'contentname': '通过自动回复机器人学Mybatis---基础版',
          'promptname': '',
          'promptcontent': '各位小伙伴们，你是否还在为使用Java中原始 JDBC 的开发方式的繁琐而苦恼呢？ Mybatis可以帮你解决这个难题，在本次课程中，让我们通过基础教程加案例实战开发的学习方式，逐步学习Mybatis的下载与配置以及基本功能应用。源生活老师实战课程《Java SSM定制大众点评后台》：http://coding.imooc.com/class/105.html也已上线，Mybatis结合复杂SQL，尽在其中。',
        'url': 'http://www.imooc.com/learn/154'
      },
        {'contentname': '通过自动回复机器人学Mybatis---加强版',
          'promptname': '',
          'promptcontent': '你是愿意停留在仅仅会使用 Mybatis 的层次上，还是愿意与我一起揭开 Mybatis 面纱，看看背后的故事？本课程将继续上一课程中的案例来介绍Java中 Mybatis 的功能，与上一课程不同的是：本课程在介绍功能的同时，尽可能多的介绍 Mybatis 源码。源生活老师实战课程《Java SSM定制大众点评后台》：http://coding.imooc.com/class/105.html也已上线，Mybatis结合复杂SQL，尽在其中。',
          'url': 'http://www.imooc.com/learn/260'
        },
        {'contentname': 'Struts2入门',
          'promptname': '',
          'promptcontent': 'Struts2是当前流行的Java Web框架！本门课程首先介绍Strust2的基本概念和发展历史，然后从一个案例入手，带领小伙伴们对Struts2有一个全面的了解。接着有对Struts2进行了更深入的讲解。相信通过本课程的学习，小伙伴们一定能够有所收获。',
          'url': 'http://www.imooc.com/learn/464'
        },
        {'contentname': 'Struts2拦截器浅析',
          'promptname': '',
          'promptcontent': 'Struts2大多数核心功能是通过拦截器实现的，每个拦截器完成某项功能，比如，params拦截器负责解析HTTP请求的参数，并设置Action的属性。本次将与各位小伙伴们分享的就是Struts2中的拦截器。',
          'url': 'http://www.imooc.com/learn/450'
        },
        {'contentname': 'Spring入门篇',
          'promptname': '',
          'promptcontent': 'Spring是为解决企业应用程序开发复杂性而创建的一个Java开源框架，应用非常广泛。业内非常流行的SSH架构中的其中一个"S"指的就是Spring。本门课程作为Spring的入门级课程，将结合实例为您带来依赖注入、IOC和AOP的基本概念及用法，为后续高级课程的学习打下基础。',
          'url': 'http://www.imooc.com/learn/196'
        },
        {'contentname': 'Spring事务管理',
          'promptname': '',
          'promptcontent': '事务管理是Spring中的一个非常重要的知识。本门课程首先介绍Spring的基本概念，然后以银行转账为例，介绍Spring的编程式事务管理和声明式事务管理的应用场景和实现方式！希望通过本门课程的学习，使得小伙伴们可以在开发中灵活地应用事务。',
          'url': 'http://www.imooc.com/learn/478'
        },
        {'contentname': 'Spring MVC起步',
          'promptname': '',
          'promptcontent': 'Spring MVC为我们提供了一个基于组件和松耦合的MVC实现框架。在使用Java中其它MVC框架多年之后，面对Spring MVC有一种相见恨晚的感觉。Spring MVC是如此的优雅，轻盈与简洁， 让人从其它框架的桎梏解脱出来。本课程将带你步入Spring MVC。',
          'url': 'http://www.imooc.com/learn/47'
        },
        {'contentname': 'Spring MVC拦截器',
          'promptname': '',
          'promptcontent': '拦截器是Spring MVC中一个十分重要且应用广泛的内容。本课程通过乱码问题的解决引入Spring MVC拦截器的使用，介绍了拦截器的工作原理、实现方法和使用场景，最后介绍了拦截器与过滤器的区别。',
          'url': 'http://www.imooc.com/learn/498'
        },
        {'contentname': '版本管理工具介绍---SVN篇',
          'promptname': '',
          'promptcontent': '多人协作开发是程序猿不可避免的话题，版本控制工具不可或缺，学会 SVN ，让初入公司的你与他人的合作不再尴尬！本课程主要介绍版本控制工具之一 SVN 的安装、结合Java代码的简单操作及常见问题解决。版本控制的环境下才能共创程序猿梦想，大家代码都好才是真的好！',
          'url': 'http://www.imooc.com/learn/109'
        },
        {'contentname': 'JUnit—Java单元测试必备工具',
          'promptname': '',
          'promptcontent': '如何加快项目进度，提升Java代码质量？如何未雨绸缪，从此维护代码不再苦逼？学会使用junit对代码进行单元测试，从此腰不酸了腿不疼了陪女朋友逛街也更有劲了。这么好的东东，赶快来看看吧。',
          'url': 'http://www.imooc.com/learn/356'
        },
        {'contentname': '项目管理利器——maven',
          'promptname': '',
          'promptcontent': 'maven是优秀的项目管理和构建工具，能让我们更为方便的来管理和构建项目，从最基础的环境配置，到maven核心知识点的应用，本套视频将带领大家进行一段轻松的maven之旅。让我们一起使用maven来构建和管理Java项目吧！',
          'url': 'http://www.imooc.com/learn/443'
        },
      ]

      },

      {'chapter': '项目实战',

        'prompt': [

        {'contentname': 'Java中的文件上传下载',
          'promptname': '',
          'promptcontent': '现实 Java Web 开发过程当中经常会遇到文件上传、下载的场景。如何实现轻松、快捷的文件上传下载功能呢？本节课程由简入深，从 Jsp + Servlet 开始逐步分析、实现文件上传下载功能及相关框架的使用。',
          'url': 'http://www.imooc.com/learn/265'
        },
        {'contentname': 'Java 分页原理与实践（上）',
          'promptname': '',
          'promptcontent': '    分页功能是系统和应用最基本的组成部分。本课程通过总结常见的分页样式以及分析对比分页原理以及实现方式，通过代码实例，让你轻松学会分页功能的开发。通过学习本课程，你也能轻松的实现facebook，QQ空间，京东商城等分页的效果。',
        'url': 'http://www.imooc.com/learn/180'
      },
        {'contentname': '使用Struts2+Hibernate开发学生信息管理功能',
          'promptname': '',
          'promptcontent': '本课程通过学生信息管理功能的开发，来介绍Struts2和Hibernate的整合。主要内容包括：Struts2和Hibernate整合，用户登录模块和学生信息管理模块的设计和实现。通过本课程的学习，一定会使小伙伴们的Java Web开发技能更上一层楼。',
          'url': 'http://www.imooc.com/learn/466'
        },
      ]

      },

    ]

      }
    },
    created: function() {
    }
  }
</script>


