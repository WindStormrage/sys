<style scoped>

.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
}

.card{
    width: 350px;
    height: 140px;
    border-radius: 8px;
    box-shadow: 0 0 10px #666;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
}
.card .logo{
    height: 70px;
    width: 70px;
    background-color: pink;
    border-radius: 55px;
}
.card .msg{
    width: 200px;
}
.card .msg .name{
  font-size: 20px;
  font-family: "黑体";
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card .msg .introduce{
  font-size: 15px;
  font-family: "Microsoft YaHei";
  max-height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card_null{
  width: 350px;
  height: 140px;
  margin: 10px;
}

</style>


<template>
    <div class="content">
        <div v-for="item in date " class="card">
          <div class="logo"></div>
          <div class="msg">
            <div class="name">{{item.name}}</div>
            <div class="introduce">{{item.introduce}}</div>
          </div>
        </div>
        <div v-for="item in date_null " class="card_null"></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                date: [
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'},
                    {name: '百度一下', introduce: '为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。'}
                  ],
                date_null: []
            }

        },
        created: function() {
            var row = parseInt((window.innerWidth - 200)/370);//一行的个数
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


