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
  <div class="php">
    <Breadcrumb class="bread">
      <Breadcrumb-item href="/main/class">学习路径</Breadcrumb-item>
      <Breadcrumb-item>PHP工程师</Breadcrumb-item>
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

          {'chapter': '入门必学',

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
              {'contentname': ' Linux达人养成计划 I',
                'promptname': '',
                'promptcontent': '本课程以通俗易懂的语言、风趣幽默的实例、清晰严谨的逻辑介绍了Linux的基础内容。课程以CentOS操作系统为例，为你带来Linux的简介、系统安装和常用命令等内容。让您在轻松的氛围中感受到Linux之美。',
                'url': 'http://www.imooc.com/learn/175'
              },
              {'contentname': 'PHP入门篇',
                'promptname': '',
                'promptcontent': '本教程带领大家轻松学习PHP基础知识，了解PHP中的变量、变量的类型、常量等概念，认识PHP中的运算符，通过本教程学习能够掌握PHP中顺序结构、条件结构、循环结构三种语言结构语句。',
                'url': 'http://www.imooc.com/learn/54'
              },
            ]

          },

          {'chapter': '数据库技术',

            'prompt': [

              {'contentname': '与MySQL的零距离接触',
                'promptname': '',
                'promptcontent': '本课程涵盖全部MySQL数据库的基础，主要学习MySQL数据库的基础知识、数据表的常用操作及各种约束的使用，以及综合的运用各种命令实现记录进行CURD等操作，本课程的目标就是“看得懂、学得会、做得出”，为后续的学习打下夯实的基础。',
                'url': 'http://www.imooc.com/learn/122'
              },
              {'contentname': 'PHP与MySQL关系大揭秘',
                'promptname': '',
                'promptcontent': '你听说过php吗？你听说过mysql吗？他俩结合几十年了你知道了吗？让我们一起走上探秘之旅，找寻php和mysql恋爱的真谛。GO！GO！GO！',
                'url': 'http://www.imooc.com/learn/116'
              },
              {'contentname': 'Duang~MySQLi扩展库来袭',
                'promptname': '',
                'promptcontent': '本课程从面向对象和面向过程两个方面，讲解了MySQLi的具体使用和注意事项，最后通过无刷新评论系统的实战演练，详细剖析实际开发中如何使用MySQLi完成对数据库的操作。',
                'url': 'http://www.imooc.com/learn/349'
              },
              {'contentname': 'PDO—数据库抽象层',
                'promptname': '',
                'promptcontent': 'PDO扩展为PHP访问数据库定义了一个轻量级的、一致性的接口，PDO解决了数据库连接不统一的问题，本课程以MySQL数据库为例，讲解了PDO的安装和配置方法，以及操作数据的函数，此外还介绍了PDO的事务处理相关知识，最后通过实战演练深入剖析PDO以加深理解。',
                'url': 'http://www.imooc.com/learn/164'
              },
            ]

          },

          {'chapter': 'PHP进阶',

            'prompt': [

              {'contentname': 'PHP进阶篇',
                'promptname': '',
                'promptcontent': '通过PHP学习的进阶篇的学习，你可以对PHP的理论知识由浅入深有更深一步的掌握，这些知识能够使您更加全面的掌握PHP，从而助您在实际工作中使用PHP快速开发网站程序。',
                'url': 'http://www.imooc.com/learn/26'
              },
              {'contentname': 'GD库实现图片水印与缩略图',
                'promptname': '',
                'promptcontent': '本课程将带领大家通过PHP中的GD库巧妙的实现图片水印与缩略图功能，大家可以轻松掌握案例的实现思路，同时课程中也讲解了如何将此过程封装成类，可以进一步加深对面向对象的理解。',
                'url': 'http://www.imooc.com/learn/329'
              },
              {'contentname': 'PHP实现验证码制作',
                'promptname': '',
                'promptcontent': '通过分析验证码实现原理，以基础的文字+字母验证码，分析讲解实现方法。并举一反三的讲解如何实现中文、图片、视频验证码。其中会穿插讲解实现过程中可能出现的技术难点、隐患。',
                'url': 'http://www.imooc.com/learn/115'
              },
              {'contentname': 'PHP实现文件上传与下载',
                'promptname': '',
                'promptcontent': '本课程讲解了文件上传的原理和配置，并带领大家使用面向对象和面向过程两种方式，完成了对单文件和多文件上传的处理，以及文件下载功能的实现，通过本课程的学习，能够掌握对文件上传和下载的处理办法，并加深对类与面向对象的封装的理解。',
                'url': 'http://www.imooc.com/learn/219'
              },
              {'contentname': 'jQuery基础 (一)—样式篇',
                'promptname': '',
                'promptcontent': 'jQuery基础课程总共分为4个部分，分别是样式篇、事件篇、动画篇、DOM篇。此为第一个部分—样式篇，本课程主要介绍jQuery的基础语法，选择器以及jQuery的一些属性和样式，通过本课程的学习，我们可以用最少的代码做更多的事，让我们一起出发学习吧！',
                'url': 'http://www.imooc.com/learn/418'
              },
              {'contentname': 'jQuery基础(二)—DOM篇',
                'promptname': '',
                'promptcontent': '教程总共分为4个部分，分别是样式篇、事件篇、动画篇、DOM篇。此为第二个部分—DOM篇。本教程主要讲解jQuery中节点的创建、插入、删除与替换，除此之外我们还可以了解到jQuery中丰富的遍历节点的方法。',
                'url': 'http://www.imooc.com/learn/530'
              },
              {'contentname': 'jQuery基础(三)—事件篇',
                'promptname': '',
                'promptcontent': 'jQuery基础课程总共分为4个部分，分别是样式篇、事件篇、动画篇、DOM篇。此为第三个部分—事件篇。此部分当中包含了，鼠标事件，表单事件，键盘事件，事件的绑定和解绑以及自定义事件。通过本课程的事件，我们能更快速的对页面进行交互的操作。',
                  'url': 'http://www.imooc.com/learn/429'
    },
      {'contentname': 'jQuery基础(四)—动画篇',
        'promptname': '',
        'promptcontent': 'jQuery基础课程总共分为4个部分，分别是样式篇、事件篇、动画篇、DOM篇。此为最后一个部分—动画篇。通过本课程的学习，我们可以制作出以下效果：隐藏和显示、上卷下来、淡入淡出。我们也可以通过自定义动画去完成一些我们想要的效果。',
        'url': 'http://www.imooc.com/learn/430'
      },
      {'contentname': '手把手教你实现电商网站开发',
        'promptname': 'HTML/CSS',
        'promptcontent': '本课程主要介绍电商网站基本制作流程，通过电商网站分步的教学让大家了解和掌握电商网站制作的流程和注意事项。并且运用网站内学习过的知识点，更加快速的掌握整站的开发过程，增加开发经验。',
        'url': 'http://www.imooc.com/learn/100'
      },
      {'contentname': '手把手教你实现电商网站后台开发',
        'promptname': '',
        'promptcontent': '本系统从慕课网电子商务系统的需求分析、数据表设计入手，从后台搭建，到后台模块实现，由浅入深教你如何搭建电子商务系统，包括前台数据的显示并详细讲解了电商系统开发流程以及开发过程中会遇到的问题及如何解决。',
        'url': 'http://www.imooc.com/learn/148'
      },
    ]

    },

      {'chapter': '框架技术',

        'prompt': [

        {'contentname': 'MVC架构模式分析与设计',
          'promptname': '',
          'promptcontent': '本课程前部分通过学习MVC理论知识，引入MVC设计简单的框架的方法，并带领学生掌握对框架MVC三层框架简化的方法。后半部分通过视图层的介绍引入smarty的概念，详细介绍smarty的语法，通过实例再次加深对smarty的理解，并演示smarty各个内置函数与php、自定义函数的用法。',
          'url': 'http://www.imooc.com/learn/69'
        },
        {'contentname': '快速入门ThinkPHP框架—理论篇',
          'promptname': '',
          'promptcontent': '通过对ThinkPHP框架基础知识的讲解，带领大家由浅入深轻松掌握ThinkPHP的理论基础，更加全面的掌握ThinkPHP框架运行机制，帮助大家在实际工作中使用ThinkPHP框架实现快速开发。',
          'url': 'http://www.imooc.com/learn/245'
        },
        {'contentname': '与《Yii框架》不得不说的故事—基础篇',
          'promptname': '',
          'promptcontent': 'YII是目前比较火的框架，框架里面使用了最新的技术和设计，可以说学习了YII就学习了最新的php技术，本课程主要学习YII的安装和mvc的基本使用方式，为后面学习YII的快速、安全、专业的特性打下基础。',
          'url': 'http://www.imooc.com/learn/404'
        },
        {'contentname': '与《Yii框架》不得不说的故事—高效篇',
          'promptname': '',
          'promptcontent': 'YII是目前比较火的框架，框架里面使用了最新的技术和设计，可以说学习了YII就学习了最新的php技术，本课程主要学习YII如何提升程序运行效率以及开发效率。',
          'url': 'http://www.imooc.com/learn/440'
        },
        {'contentname': '与《Yii框架》不得不说的故事—安全篇',
          'promptname': '',
          'promptcontent': 'YII是目前比较火的框架，框架里面使用了最新的技术和设计，可以说学习了YII就学习了最新的php技术，本课程主要学习XSS、CSRF、SQL注入、文件上传漏洞等攻击方式，以及YII框架对它们的防范和处理方式。',
          'url': 'http://www.imooc.com/learn/467'
        },
        {'contentname': '与《Yii框架》不得不说的故事—扩展篇',
          'promptname': '',
          'promptcontent': 'YII是目前比较火的框架，框架里面使用了最新的技术和设计，可以说学习了YII就学习了最新的php技术，本课程主要学习模块、事件机制、mixin以及依赖注入技术，可以让程序拥有更好的扩展性，更能够适应需求的变化。',
          'url': 'http://www.imooc.com/learn/491'
        },
        {'contentname': '与《Yii框架》不得不说的故事—工具篇',
          'promptname': '',
          'promptcontent': 'YII是目前比较火的框架，框架里面使用了最新的技术和设计，可以说学习了YII就学习了最新的php技术，本课程主要学习在开发项目中常用的一些工具，主要包括Composer、Debug和GII等，使用这些工具可以大大提高了我们的开发效率。',
          'url': 'http://www.imooc.com/learn/520'
        },
        {'contentname': '从零开始打造自己的PHP框架',
          'promptname': '',
          'promptcontent': '你觉得Thinkphp框架很不错？Laravel很优雅？Yii很稳定？CI很高效？哼哼，其实你自己开发的才是最最好用最最适合你的框架',
          'url': 'http://www.imooc.com/learn/696'
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


