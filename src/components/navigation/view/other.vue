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
          {name: '减压网站', introduce: '', url: 'https://www.calm.com'},
          {name: '注意颈椎', introduce: '', url: 'http://zhidao.baidu.com/s/daily/2013-11-24/1387540950.html   '},
          {name: '别忘锻炼', introduce: '', url: 'http://www.muscles.com.cn                                    '},
          {name: 'linux命令大全', introduce: '', url: 'http://www.php100.com/html/webkaifa/Linux/2009/1106/3485.html'},
          {name: 'Coding', introduce: '', url: 'https://coding.net/'},
          {name: '有吧设计', introduce: '', url: 'http://www.ubuuk.com/'},
          {name: '友盟', introduce: '', url: 'http://www.umeng.com/'},
          {name: 'ShareSdk', introduce: '', url: 'http://www.mob.com/'},
          {name: '微信开发平台', introduce: '', url: 'https://open.weixin.qq.com/'},
          {name: '高德地图API', introduce: '', url: 'http://lbs.amap.com/'},
          {name: '百度地图API', introduce: '', url: 'http://lbsyun.baidu.com/'},
          {name: '程序员小游戏', introduce: '', url: 'http://lines.frvr.com/'},
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



