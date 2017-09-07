<template>
  <div class="hello">
     welcome to the question
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
/*  created: function (){
    this.$nextTick(function() {
      updateActiveName();
    })
    console.log("6222222222266")
  }*/


    /*created: function(){
//生成
        document.cookie="sessionID="+"126663"+"endSession;";

//获取
        var id = document.cookie;

        var way = id.indexOf("sessionID=");
        var end = id.indexOf("endSession");
        var sessionID = id.substring(way+10,end);

        alert(sessionID);

//删除
        document.cookie="sessionID="+""+"endSession;";

        var id = document.cookie;

        var way = id.indexOf("sessionID=");
        var end = id.indexOf("endSession");
        var sessionID = id.substring(way+10,end);

        alert(sessionID);

        if (sessionID == "") {
            alert(666999)
        };


    }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
