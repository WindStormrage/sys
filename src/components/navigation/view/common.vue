<style scoped>

  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }

  .card{
    width: 150px;
    height: 50px;
    border-radius: 8px;
    box-shadow: 0 0 10px #666;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
  }
  .card .msg{
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 50px;
  }
  .card_null{
    width: 150px;
    height: 50px;
    margin: 10px;
  }

</style>


<template>
  <div class="content">
    <div v-for="item in date " class="card">
      <div class="msg"><a :href="item.url" target="_blank">{{item.name}}</a></div>
    </div>
    <div v-for="item in date_null " class="card_null"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        date: [
          {name: 'Google', introduce: '', url: 'https://www.google.com'},
          {name: '百度', introduce: '', url: 'https://www.baidu.com'},
          {name: 'Github', introduce: '', url: 'http://www.github.com'},
          {name: 'Stackoverflow', introduce: '', url: 'http://stackoverflow.com'},
          {name: 'Segmentfault', introduce: '', url: 'https://segmentfault.com'},
          {name: '开源中国', introduce: '', url: 'http://www.oschina.net'},
          {name: 'Csdn', introduce: '', url: 'http://www.csdn.net'},
          {name: '掘金', introduce: '', url: 'https://juejin.im'},
          {name: '简书', introduce: '', url: 'http://www.jianshu.com'},
          {name: 'ReactNative', introduce: '', url: 'http://reactnative.cn'},
          {name: '前端收藏夹', introduce: '', url: 'http://collect.w3ctrain.com'},
          {name: '前端开发手册', introduce: '', url: 'https://dwqs.gitbooks.io/frontenddevhandbook/content'},
          {name: 'W3school', introduce: '', url: 'http://w3school.com.cn'},
          {name: 'css参考手册', introduce: '', url: 'http://css.doyoe.com'},
          {name: '网易开源NEC', introduce: '', url: 'http://nec.netease.com'},
          {name: '每天发现好网站', introduce: '', url: 'https://admire.so'},
          {name: '9秒社团', introduce: '', url: 'http://www.9miao.com/forum.php'},
          {name: '前端知识', introduce: '', url: 'http://html5ify.com/fks'},
          {name: '前端观察', introduce: '', url: 'https://www.qianduan.net'},
          {name: 'html5-js', introduce: '', url: 'http://www.html-js.com'},
          {name: 'node.js', introduce: '', url: 'https://cnodejs.org'},
          {name: '大前端', introduce: '', url: 'http://www.daqianduan.com'},
          {name: '前端框架库', introduce: '', url: 'https://www.javascripting.com'},
          {name: '国外前端站', introduce: '', url: 'http://mobdevgroup.com/platform/html5/resources'},
        ],
        date_null: []
      }

    },
    created: function() {
      var row = parseInt((window.innerWidth - 200)/170);//一行的个数
      var all = this.date.length;//总共的个数
      var add = row - (all % row);
//            console.log(row)
//            console.log(all)
//            console.log(add)
      if(add !== row){
        for(var j = 0; j < add; j++){
          this.date_null.push({})
        }
      }
//            console.log(this.date_null)
    }
  }
</script>



