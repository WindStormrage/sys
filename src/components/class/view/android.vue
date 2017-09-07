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
  <div class="android">
    <Breadcrumb class="bread">
      <Breadcrumb-item href="/main/class">学习路径</Breadcrumb-item>
      <Breadcrumb-item>Android工程师</Breadcrumb-item>
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

          {'chapter': '敲门砖',

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
    ]

    },

      {'chapter': '初级认知',

        'prompt': [

        {'contentname': 'Android攻城狮的第一门课（入门篇）',
          'promptname': '',
          'promptcontent': '本课程涵盖全部Android应用开发的基础，根据技能点的作用分为5个篇章，包括环境篇、控件篇、布局篇、组件篇和通用篇，本课程的目标就是“看得懂、学得会、做得出”，为后续的学习打下夯实的基础。',
          'url': 'http://www.imooc.com/learn/96'
        },
      ]

      },

      {'chapter': '核心知识',

        'prompt': [

        {'contentname': 'Android攻城狮的第二门课（第1季）',
          'promptname': '',
          'promptcontent': '本课程由浅入深地带您学会Android的常用控件的开发和使用，以知识概念为主导，实例代码为驱动，带您走入一个神奇的移动开发世界。',
          'url': 'http://www.imooc.com/learn/107'
        },
        {'contentname': 'Android必学-BaseAdapter的使用与优化',
          'promptname': '',
          'promptcontent': '本次课程将带领大家了解Android中BaseAdapter的使用，以及我们如何写出高效、文艺的BaseAdapter。',
          'url': 'http://www.imooc.com/learn/365'
        },
        {'contentname': 'Android必学-AsyncTask基础',
          'promptname': '',
          'promptcontent': '本次课程将带领大家了解Android中AsyncTask，体会如何在Android中进行异步操作进行各种网络请求，熟练掌握异步线程的使用。',
          'url': 'http://www.imooc.com/learn/377'
        },
        {'contentname': 'Android必学-异步加载',
          'promptname': '',
          'promptcontent': '重量级的课程来了：Android必须系列。本系列课程中的内容为Android开发中用处最多，面试问的最多的知识点。本次课程将带领大家了解Android中异步加载的一般处理方法     ',
          'url': 'http://www.imooc.com/learn/406'
        },
        {'contentname': 'Android攻城狮的第二门课（第3季）',
          'promptname': '',
          'promptcontent': '本课程深入的讲解了Android中的手势识别原理、数据存储方式、对组件的详细剖析以及对Service的深度讲解，每一个知识点都对应有实际案例。本课程内容不仅使您牢牢掌握之前的基础知识点，学完之后也会有新的收获、新的体会。',
          'url': 'http://www.imooc.com/learn/179'
        },
        {'contentname': 'Android面试常客Handler详解',
          'promptname': '',
          'promptcontent': '本课程将深入理解Android的Handler机制，并结合源码实例，讲解Looper、MessageqQueue、Handler之间的关系，同时介绍HandlerThread的原理和使用，并分析Handler在开发中遇到的异常的原因，最后从源码的角度分析一下Handler更新UI的流程',
          'url': 'http://www.imooc.com/learn/267'
        },
        {'contentname': 'Android中的Http通信',
          'promptname': '',
          'promptcontent': '本次课程将带领大家android当中网络交互处理，例如常见的post、get请求以及相关知识的应用。',
          'url': 'http://www.imooc.com/learn/304'
        },
      ]

      },

      {'chapter': '浅学详解',

        'prompt': [

        {'contentname': 'Android攻城狮的第二门课（第2季）',
          'promptname': '',
          'promptcontent': '本课程讲带你熟悉Android开发中常用的调试方式，各种对话框，各种提示菜单，各种动画效果等，来进一步充实你的Android知识',
          'url': 'http://www.imooc.com/learn/142'
        },
        {'contentname': '浅谈Android动画',
          'promptname': '',
          'promptcontent': '通过各式各样的案例，实现各种Android各种炫酷的动画效果，增加用户对Android系统的喜爱，同时也可以培养同学们的学习兴趣。',
          'url': 'http://www.imooc.com/learn/379'
        },
        {'contentname': 'Android属性动画赏析',
          'promptname': '',
          'promptcontent': '动画几乎是一个好的App所不可缺少的一部分，它体现了一种更友好的交互方式，在iOS、Android L中动画的使用越来越多，特别是后者更是着重强调设计更好的动画。从3.0开始，Android就提供了一种更为强大的属性动画框架。本次课程，将向你介绍如何使用属性动画做出更好的动画',
          'url': 'http://www.imooc.com/learn/263'
        },
      ]

      },

      {'chapter': '面试加分',

        'prompt': [

        {'contentname': '千变万化的ViewPager切换动画',
          'promptname': '',
          'promptcontent': '本课程将带领大家实现个性的ViewPager切换动画，首先介绍通过PageTransformer结合ViewPager.setPageTransformer来实现动画效果，然后教大家如何让其兼容到3.0以后，其中会涉及到属性动画等知识点；最后将介绍通过自定义ViewPager的方式来实现动画切换效果',
          'url': 'http://www.imooc.com/learn/226'
        },
        {'contentname': '高仿微信5.2.1主界面及消息提醒',
          'promptname': '',
          'promptcontent': '本课程将带领大家从无到有的实现微信的整体界面和ViewPager指示器跟随手指拖动的动画效果。课���包含ViewPager与FragmentPagerAdapter的使用，通过分析OnPageChangeListener手动控制指示器的动画效果，以及如何将BadgeView作为消息通知用于我们的项目之中',
          'url': 'http://www.imooc.com/learn/198'
        },
        {'contentname': '多种多样的App主界面Tab实现方法',
          'promptname': '',
          'promptcontent': 'Tab选项卡几乎成为了App必备的一个功能，它的实现方法也是多种多样，本课程就将讲解迄今为止最主流的4种实现Tab的方法，包括ViewPager、Fragment、FragmentPagerAdapter和ViewPagerIndicator',
          'url': 'http://www.imooc.com/learn/264'
        },
        {'contentname': '与Android Studio的第一次亲密接触',
          'promptname': '',
          'promptcontent': 'Android Studio是Google在I/O大会上发布的一个新的集成开发环境，可以让Android开发变的更简单。本课程会详细的向您介绍Android Studio的安装配置、使用技巧以及相对于Eclipse开发的优势，并通过实际的操作让大家快速熟悉Android Studio的使用，让您体验更强大的开发工具',
          'url': 'http://www.imooc.com/learn/206'
        },
        {'contentname': '超快的Android模拟器Genymotion',
          'promptname': '',
          'promptcontent': '本课程将介绍Android平台下的一款最快的、最流行的Android模拟器，以及如何安装Genymotion模拟器，并对eclipse和Intellij等开发工具进行配置',
          'url': 'http://www.imooc.com/learn/241'
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


