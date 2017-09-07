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
          {name: '翻译', introduce: '', url: 'http://fanyi.baidu.com'},
          {name: 'Bejson', introduce: '', url: 'http://www.bejson.com'},
          {name: '颜色转换', introduce: '', url: 'http://rgb.phpddt.com '},
          {name: '正则匹配', introduce: '', url: 'http://tool.lu/regex '},
          {name: 'Base64编码', introduce: '', url: 'http://tool.lu/base64image '},
          {name: '进制转换', introduce: '', url: 'http://tool.oschina.net/hexconvert'},
          {name: '时间转换', introduce: '', url: 'http://tool.chinaz.com/Tools/unixtime.aspx'},
          {name: 'sql语句', introduce: '', url: 'http://tool.lu/sql '},
          {name: 'IP查询', introduce: '', url: 'http://www.ip138.com '},
          {name: 'Html5测试', introduce: '', url: 'http://html5test.com'},
          {name: 'js在线调试', introduce: '', url: 'https://jsfiddle.net'},
          {name: 'sass在线编辑', introduce: '', url: 'http://www.sassmeister.com '},
          {name: '在线api', introduce: '', url: 'http://devdocs.io'},
          {name: 'px转em', introduce: '', url: 'http://pxtoem.com'},
          {name: 'js在线', introduce: '', url: 'http://runjs.cn'},
          {name: 'css3代码生成', introduce: '', url: 'http://www.cnblogs.com/lhb25/archive/2012/09/27/10-css3-online-generator-tools.html'},
          {name: '腾讯企业邮', introduce: '', url: 'http://exmail.qq.com/login'},
          {name: '谷歌邮箱', introduce: '', url: 'https://mail.google.com/mail'},
          {name: '网易邮箱', introduce: '', url: 'http://mail.163.com '},
          {name: 'GIF录制', introduce: '', url: 'http://www.cockos.com/licecap'},
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



