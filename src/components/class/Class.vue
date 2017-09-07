<style scoped>
    .content{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .card_null{
      height: 350px;
      width: 300px;
      margin: 10px;
    }
    .card{
      height: 350px;
      width: 300px;
      background-color: #00c261;
      border-radius: 10px;
      box-shadow: 0 0 10px #666;
      margin: 10px;
      overflow: hidden;
    }
    .card .msg{
      width: 300px;
      height: 150px;
      background-color: pink;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: all 0.3s ease-in;
    }
    .card .msg .name{
      padding: 20px;
      font-size: 40px;
      text-align: center;
      line-height: 70px;
      transition: all 0.3s ease-in;
    }
    .card .msg .introduce{
      color: pink;
      font-size: 16px;
      padding: 10px;
      transition: all 0.3s ease-in;
    }
    .card .img{
      height: 200px;
      width: 300px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      -moz-background-size:300px 200px;
      background-size:300px 200px;
      transition: all 0.3s ease-in;
    }
    .card:hover .img{
      height: 150px;
    }
    .card:hover .msg{
      height: 200px;
    }
    .card:hover .msg .name{
      padding: 15px;
      font-size: 30px;
      text-align: left;
      line-height: 40px;
    }
    .card:hover .msg .introduce{
      color: #000;
    }
</style>


<template>
    <div class="content">
      <div class="card" @click="toClass(item.name)" v-for="item in date">
        <div class="img" :style="{ backgroundImage : 'url('+item.img+')' }"></div>
        <div class="msg">
          <div class="name">{{item.name}}</div>
          <div class="introduce">{{item.introduce}}</div>
        </div>
      </div>
      <div v-for="item in date_null " class="card_null"></div>
    </div>
</template>

<script>
  import PHP     from './../../assets/php.png'
  import Java    from './../../assets/java.png'
  import web     from './../../assets/web.png'
  import Android from './../../assets/android.png'
    export default {
        data() {
           return{
             date: [
               {name: 'PHP工程师', img: PHP, introduce: '此宝典从最基本的PHP语法基础开始，步步深入，一直到框架应用，都做出了详细的讲解，助你迈出重要一步。'},
               {name: '前端工程师', img: web, introduce: '该路径从基础知识到实战案例演练，一步步带您快速掌握如何搭建网站静态页面、开发网站交互特效，为您打开WEB前端工程师大门。还在等什么？快来学习吧!'},
               {name: 'Java工程师', img: Java, introduce: '本计划从最基本的Java语言基础、各种常用工具到Java Web基础以及框架应用，迈出成为优秀的Java工程师的重要一步。'},
               {name: 'Android工程师', img: Android, introduce:
                 '从最基本的Java语言基础，到各种Android应用案例，为你的求职做足准备，助你成为一名合格的Android开发工程师！'}
             ],
             date_null: []
           }
        },
        methods: {
          toClass: function (name) {
            console.log(name);
            document.cookie = "class_left="+name+"endclass_left;";
            var navpath = {
            	"PHP工程师": 'php',
            	"前端工程师": 'web',
            	"Java工程师": 'java',
            	"Android工程师": 'android',
            };
            this.$router.push({
              path: '/main/'+navpath[''+name+'']
            });
            console.log('/main/'+navpath[''+name+''])
          }
        },
        created: function() {
          var row = parseInt((window.innerWidth - 200)/320);//一行的个数
          var all = this.date.length;//总共的个数
          var add = row - (all % row);
          if(add !== row){
            for(var j = 0; j < add; j++){
              this.date_null.push({})
            }
          }
        }
    }
</script>


