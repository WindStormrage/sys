<template>
  <div class="hello">
    <center>
         welcome to the home
         <br>
         <a @click="change('question')">题库</a>
         <br>
         <a @click="change('navigation')">导航</a>
         <br>
         <a @click="change('class')">学习路径</a>
         <br>
    </center>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        nav: {
            'question': {path: '/main/question'},
            'class': {path: '/main/class'},
            'navigation': {path: '/main/navigation'}
        },
    }
  },
  methods: {
    change: function (name) {
        //路由的选择
        this.$router.push({
            path: this.nav['' + name + ''].path+'?text='+name
        });
        document.cookie="menu_now="+name+"endmenu;";
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 100px;
}
</style>
