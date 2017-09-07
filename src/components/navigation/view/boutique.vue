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
          {name: 'w3cschool', introduce: '', url: 'http://www.w3cschool.cn/         '},
          {name: '极牛', introduce: '',       url: 'http://geekniu.com/              '},
          {name: '聚合接口', introduce: '',   url: 'https://www.juhe.cn/             '},
          {name: '缘创派', introduce: '', url: 'http://www.ycpai.com/default.html'},
          {name: '创业邦', introduce: '', url: 'http://www.cyzone.cn/            '},
          {name: '互联网一些事', introduce: '', url: 'http://www.yixieshi.com/         '},
          {name: '码市', introduce: '', url: 'https://mart.coding.net/projects '},
          {name: '实现', introduce: '', url: 'http://shixian.com/              '},
          {name: '百度贴吧', introduce: '', url: 'http://tieba.baidu.com/          '},
          {name: '天涯', introduce: '', url: 'http://www.tianya.cn/            '},
          {name: '知乎', introduce: '', url: 'http://www.zhihu.com/            '},
          {name: '果壳', introduce: '', url: 'http://www.guokr.com/            '},
          {name: 'infoQ', introduce: '', url: 'http://www.infoq.com/            '},
          {name: 'i黑马', introduce: '', url: 'http://www.iheima.com/           '},
          {name: '36kr', introduce: '', url: 'http://36kr.com/                 '},
          {name: '大学生创业网', introduce: '', url: 'http://cy.ncss.org.cn/           '},
          {name: 'it桔子', introduce: '', url: 'https://www.itjuzi.com/          '},
          {name: '亿欧网', introduce: '', url: 'http://www.iyiou.com/            '},
          {name: '极客公园', introduce: '', url: 'http://www.geekpark.net          '},
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



