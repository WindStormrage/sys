import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('../../src/components/Hello.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: require('../../src/components/Home.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: require('../../src/components/main.vue'),
      children: [
        //个人信息
        {
          path: 'personal',
          component: require('../../src/components/personal/Personal.vue')
        },
        {
          path: 'information',
          component: require('../../src/components/personal/view/information.vue')
        },
        {
          path: 'account',
          component: require('../../src/components/personal/view/account.vue')
        },
        {
          path: 'myClass',
          component: require('../../src/components/personal/view/myClass.vue')
        },
        //路径
        {
          path: 'class',
          component: require('../../src/components/class/Class.vue')
        },
        {
          path: 'web',
          component: require('../../src/components/class/view/web.vue')
        },
        {
          path: 'java',
          component: require('../../src/components/class/view/java.vue')
        },
        {
          path: 'php',
          component: require('../../src/components/class/view/php.vue')
        },
        {
          path: 'android',
          component: require('../../src/components/class/view/android.vue')
        },
        //导航
        {
          path: 'navigation',
          component: require('../../src/components/navigation/navigation.vue')
        },
        {
          path: 'bolg',
          component: require('../../src/components/navigation/view/bolg.vue')
        },
        {
          path: 'boutique',
          component: require('../../src/components/navigation/view/boutique.vue')
        },
        {
          path: 'common',
          component: require('../../src/components/navigation/view/common.vue')
        },
        {
          path: 'other',
          component: require('../../src/components/navigation/view/other.vue')
        },
        {
          path: 'study',
          component: require('../../src/components/navigation/view/study.vue')
        },
        {
          path: 'tool',
          component: require('../../src/components/navigation/view/tool.vue')
        },
        //题库
        {
          path: 'question',
          component: require('../../src/components/question/question.vue')
        }
      ]
    },
  ]
})
