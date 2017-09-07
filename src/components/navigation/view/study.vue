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
          {name: '慕课网', introduce: '', url: 'http://www.imooc.com/course/list?c=html'},
          {name: '极客学院', introduce: '', url: 'http://www.jikexueyuan.com/course/html/'},
          {name: '腾讯课堂', introduce: '', url: 'https://ke.qq.com/course/list?mt=1001&st=2004'},
          {name: '网易云课堂', introduce: '', url: 'http://study.163.com/find.htm#/courselist?ct=8'},
          {name: 'mocc学院', introduce: '', url: 'http://mooc.guokr.com/career/?dept_id=73&order=hot'},
          {name: '麦子学院', introduce: '', url: 'http://www.maiziedu.com/course/web-px/'},
          {name: 'Git学习', introduce: '', url: 'http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/'},
          {name: 'markdown用法', introduce: '', url: 'http://www.jianshu.com/p/1e402922ee32'},
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



