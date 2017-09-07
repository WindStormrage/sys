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
          {name: '张鑫旭', introduce: '', url: 'http://www.zhangxinxu.com/wordpress/'},
          {name: '江清清', introduce: '', url: 'http://www.lcode.org/'},
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



