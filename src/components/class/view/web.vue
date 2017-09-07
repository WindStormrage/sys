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
  <div class="web">
    <Breadcrumb class="bread">
      <Breadcrumb-item href="/main/class">学习路径</Breadcrumb-item>
      <Breadcrumb-item>web工程师</Breadcrumb-item>
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

          {'chapter': 'HTML和CSS基础',

            'prompt': [

              {'contentname': '前端开发工具技巧介绍—DW篇',
                'promptname': '前端工具',
                'promptcontent': '“工欲善其事，必先利其器”。本课主要以Dreamweaver CS6为例，讲授Dreamweaver的使用技巧和重要实用模块，将会覆盖实际开发过程中90%以上的功能，新手入门必备！',
                'url': 'http://www.imooc.com/learn/39'
              },
              {'contentname': '前端开发工具技巧介绍—Sublime篇',
                'promptname': '前端工具',
                'promptcontent': '本课程主要对Sublime Text这款前端开发工具中的非常优秀的特性进行介绍，命令模式、Goto anything、多行游标等这些能极大提高你的生产力，不愧是码农进阶必备神器。',
                'url': 'http://www.imooc.com/learn/40'
              },
              {'contentname': 'HTML+CSS基础课程',
                'promptname': 'HTML/CSS',
                'promptcontent': '本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。',
                'url': 'http://www.imooc.com/learn/9'
              },
              {'contentname': '如何用CSS进行网页布局',
                'promptname': 'HTML/CSS',
                'promptcontent': '如何用CSS进行网页布局？这可是前端工程师最最基本的技能，本课程教你怎么制作一列布局、二列布局、三列布局当然还有最通用的混合布局，而且你还可以选择让它固定还是自适应。用CSS重新规划你的网页，让你的网页从此更美观、更友好。',
                'url': 'http://www.imooc.com/learn/57'
              },
              {'contentname': '网页布局基础',
                'promptname': 'HTML/CSS',
                'promptcontent': '网页布局是进行网页制作的基础。本课程将讲解CSS中三种定位机制——标准文档流、浮动和绝对定位，并对标准文档流、盒子模型、float属性以及position属性等进行详细分析。从晦涩的理论讲解到编辑器环境的逐步验证，让你彻底掌握网页布局的相关知识。',
                'url': 'http://www.imooc.com/learn/95'
              },
              {'contentname': '网页简单布局之结构与表现原则',
                'promptname': 'HTML/CSS',
                'promptcontent': '在网页制作当中，结构与表现分离的思想，不仅仅是将html、css分别写在不同文件当中这么简单，要从更深层次上去进行理解。本课程通过3个案例，分别从不同角度，对结构和表现分离的思想进行了展示和分析。',
                'url': 'http://www.imooc.com/learn/20'
              },
              {'contentname': '导航条菜单的制作',
                'promptname': 'HTML/CSS',
                'promptcontent': '每个网站都包含导航菜单，它们形式多样。本课程将由浅到深的介绍各种常见的导航条菜单的制作方法，从垂直方向的到水平方向的，再到用CSS样式的圆角导航条，最后讲解动态交互功能且具有拉伸效果的导航条菜单，对比着学习以上内容让您的技术探索之路更高效！',
                'url': 'http://www.imooc.com/learn/6'
              },
            ]

          },

          {'chapter': 'JavaScript语言',

            'prompt': [

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
              {'contentname': 'DOM事件探秘',
                'promptname': '',
                'promptcontent': 'DOM事件是小伙伴们学习JS中较重要的一部分知识，所以学好JS事件可以为小伙伴们在JS的学习道路中更近一步。在此课程中Amy老师会通过通俗易懂的授课方式给大家进行讲解JS事件。最后Amy老师通过一个QQ面板实例来给小伙伴们讲解如何使用这些事件。',
                'url': 'http://www.imooc.com/learn/138'
              },
              {'contentname': 'JS动画效果',
                'promptname': '',
                'promptcontent': '通过本课程JS动画的学习，从简单动画开始，逐步深入缓冲动画、多物体动画、链式动画、多动画同时运动到完美运动框架的过程，每一个效果封装成一个小运动框架，逐渐培养和锻炼封装运动框架和编程的思想，让您的逻辑思维不断增强。',
                'url': 'http://www.imooc.com/learn/167'
              },
              {'contentname': '倒计时效果',
                'promptname': '',
                'promptcontent': '现今团购网、电商网、门户网等，常使用时间记录重要的时刻，如时间显示、倒计时差、限时抢购等，本课程分析不同倒计时效果的计算思路及方法，掌握日期对象Date，获取时间的方法,计算时差的方法，实现不同的倒时计效果。',
                'url': 'http://www.imooc.com/learn/59'
              },
              {'contentname': '信息滚动效果制作',
                'promptname': '',
                'promptcontent': '本课程简单介绍marquee标签制作简单滚动的方法，通过分析滚动原理，让您知道效果实现的思路，详细讲解如何复制元素、定时等知识的使用，运用JavaScript技术，让您掌握无缝滚动和歇间性滚动的制作方法。',
                'url': 'http://www.imooc.com/learn/17'
              },
              {'contentname': '商城分类导航效果',
                'promptname': '',
                'promptcontent': '亲爱的朋友们，你知道分类导航效果作为各大商城类网站常见的导航效果之一，是如何制作出来的吗？本课仿京东商城分类导航，详细分析并讲解制作过程，掌握运用CSS技巧及JavaScript动态改变CSS样式的两种实现方法，同时扩展讲解其它商城分类导航的不同及制作方法。',
                'url': 'http://www.imooc.com/learn/174'
              },
            ]

          },

          {'chapter': 'jQuery',

            'prompt': [

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
      {'contentname': 'jQuery插件——Validation Plugin',
        'promptname': '',
        'promptcontent': 'jQuery有很多有用的插件，其中Validation插件是最常用的插件之一。客户端表单验证是现代网站经常采用的方式，可以减少服务器压力，缩短用户等待时间和提升用户体验。jQuery Validation插件提供了很多的配置项目，还附带了很多验证方法及多语言提示。',
        'url': 'http://www.imooc.com/learn/385'
      },
      {'contentname': 'Ajax全接触',
        'promptname': '',
        'promptcontent': '本课程通过一个简单的例子，由浅入深，循序渐进的介绍了Ajax的相关概念、原理、实现方式和应用方法，包含HTTP请求的概念、PHP的简单语法、JSON数据格式、Ajax的原生和jQuery实现、跨域等知识点。',
        'url': 'http://www.imooc.com/learn/250'
      },
      {'contentname': '网页定位导航特效',
        'promptname': '',
        'promptcontent': '本课程我们将为大家介绍从静态布局到动态效果实现，从浅到深，循循渐进，讲解如何定位到所需位置，运用jQuery、JavaScript两种方式实现网页定位导航。赶快行动吧！',
        'url': 'http://www.imooc.com/learn/56'
      },
      {'contentname': '瀑布流布局',
        'promptname': '',
        'promptcontent': '瀑布流布局是网站比较流行的一种布局方式。本案例将深入讲解实现瀑布流布局的三大方式：JavaScript、jQuery和CSS3，你将学习到如何用JavaScript方法实现图片的定位及排序、两种不同的方式对图片进行持续加载，以及CSS3中多栏布局怎么实现瀑布流布局。',
        'url': 'http://www.imooc.com/learn/101'
      },
      {'contentname': '搜索框制作',
        'promptname': '',
        'promptcontent': '本课程中，我们将使用jQuery和JavaScript两种技术来实现搜索框效果功能,并对jQuery和JavaScript两种技术进行了对比，你将可以了解到JQ与JS实现Ajax技术的不同点。赶快行动吧！',
        'url': 'http://www.imooc.com/learn/21'
      },
    ]

    },

      {'chapter': '综合网站实践',

        'prompt': [

        {'contentname': '企业网站综合布局实战',
          'promptname': 'HTML/CSS',
          'promptcontent': '本课程重点介绍HTML/CSS实现常见企业网站布局的方法、布局中常用的基本盒子模型、三列布局、两列自适应高度及基于jQ的开源图片幻灯片切换效果插件的使用。让您快速掌握企业网站的基本布局方法，同时对HTML、CSS、JS、jQ等知识的综合运用和提升。',
          'url': 'http://www.imooc.com/learn/147'
        },
        {'contentname': '手把手教你实现电商网站开发',
          'promptname': 'HTML/CSS',
          'promptcontent': '本课程主要介绍电商网站基本制作流程，通过电商网站分步的教学让大家了解和掌握电商网站制作的流程和注意事项。并且运用网站内学习过的知识点，更加快速的掌握整站的开发过程，增加开发经验。',
          'url': 'http://www.imooc.com/learn/100'
        },
      ]

      },

      {'chapter': '优化及调试',

        'prompt': [

        {'contentname': 'SEO在网页制作中的应用',
          'promptname': 'HTML/CSS',
          'promptcontent': '本课程将通过对网页结构以及前端代码两个方面介绍前端SEO知识。作为前端工程师，可能你每天只关注怎样实现一个又一个的网页特效，怎样让自己的网站更酷更炫，但是本课程能教你怎样让更多的人来访问你的网站！',
          'url': 'http://www.imooc.com/learn/204'
        },
        {'contentname': 'Yahoo军规',
          'promptname': '',
          'promptcontent': '互联网高速发展当今,用户对快速访问网页需求越来越高，做为网站建设者，如何提高网站性能，成为炙手可热的问题，本课程让你清楚影响网站性能的原因，从而避免不利于网站性能的因素，借助Yslow工具快速找到问题所在，提高网站性能，让提高网站性能、快速访问网站不在是梦想。',
          'url': 'http://www.imooc.com/learn/50'
        },
        {'contentname': 'WEB调试工具---Firebug',
          'promptname': '前端工具',
          'promptcontent': 'Firebug是WEB调试工具之一，是网页浏览器 Firefox 下的一款开发类插件。它集HTML查看和编辑、JS控制台、网络状况监视器于一体，是开发JavaScript、CSS、HTML和Ajax的得力助手。掌握Firebug的使用，可从各个不同的角度剖析Web页面内部的细节，给Web开发带来极大的便利。',
          'url': 'http://www.imooc.com/learn/137'
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


