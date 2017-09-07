<style scoped>
    .personal{
        width: 100%;
    }
    .banner{
        width: 100%;
    }
    .portrait{
        height: 100px;
        width: 100px;
        border-radius: 100px;
        overflow: hidden;
        float: left;
        margin-top: 20px;
        margin-left: 80px;
    }
    .img-responsive{
        height: 100px;
        width: 100px;
    }
    .img-banner{
        background-image: url(./../../../assets/banner.jpg);
        height: 150px;
        width: 100%;
    }

    .msg{
        float: left;
        margin-left: 40px;
        margin-top: 20px;
    }
    .banner .msg .name{
        font-size: 35px;
    }
    .autograph{
        margin-top: 10px;
        margin-left: 10px;
        font-size: 20px;
    }
    .content .title{
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 20px;
        font-size: 20px;
        font-family: 'Microsoft Yahei';
    }
    .content .title .text{
        float: left;
    }
    .content .title .edit{
        float: right;
    }
    .content .hr{
        clear: both;
        margin-left: 20px;
        margin-right: 20px;
        border: none;
        border-top: 1px solid #185598;
    }
    .detailed{
        margin-left: 100px;
        margin-top: 40px;
    }
    .detailed hr{
        margin-right: 40px;
        border: none;
        border-top: 1px solid #DADCDE;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .detailed .tr .th{
        font-size: 20px;
        display: inline-block;
        height: 60px;
        width: 120px;
        background-color: #F3F5F7;
        text-align: center;
        line-height: 60px;

    }
    .detailed .tr .td{
        font-size: 20px;
        display: inline-block;
        margin-left: 50px;
    }

    .modal-title{
        font-size: 20px;
    }
    .footer{
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ivu-form-item-label{
        text-align: left;
        width: 10px;
    }
    .form{
        clear: both;
    }
    .change{
        max-height: 100px;
        max-width: 100px;
        border-radius: 50px;
        overflow: hidden;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .change:hover .hover{
        margin-top: -31px;
    }
    .hover{
        transition: all .3s linear .1s;
        height: 31px;
        width: 100px;
        text-align: center;
    }
    .hover button{
        height: 32px;
        width: 96px;
        border-height: 0;
    }
    .change-img{
      height:100px;
      width:100px;
      border:1px solid #666;
      border-radius:50%;
      overflow: hidden;
    }
</style>


<template>
    <div class="personal">
        <Modal v-model="modal_form" width="400">
            <div class="modal-title">
                编辑个人信息
            </div>
            <div class="footer" slot="footer">
                <div class="change" @click="">
                    <!--<img src="./../../../assets/portrait.jpg" height="190" width="190" class="img-responsive">-->
                    <VueImgInputer @onChange="sendImg()" accept="image/png, image/jpeg"
                                   class="change-img"
                                   bottomText="点击更改"
                                   theme="light"
                                   :imgSrc="change_head" v-model="picValue"></VueImgInputer>
                    <!--<div class="hover"><button>点击更换</button></div>-->
                </div>
                <Form class="form" :model="formItem" :label-width="80">
                    <Form-item label="昵 称:">
                        <Input v-model="formItem.name" placeholder="请输入昵称"></Input>
                    </Form-item>
                    <Form-item label="性 别:">
                        <Radio-group v-model="formItem.radio">
                          <Radio label="secrecy">保密</Radio>
                          <Radio label="male">男</Radio>
                          <Radio label="female">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="邮 箱:">
                        <Input v-model="formItem.mail" placeholder="请输入邮箱"></Input>
                    </Form-item>
                    <Form-item label="签 名:">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入个性签名..."></Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="submit()">提交</Button>
                        <Button type="ghost" style="margin-left: 8px" @click="modal_form=false">取消</Button>
                    </Form-item>
                </Form>
            </div>
        </Modal>

        <div class="banner">
            <div class="img-banner">
                <div class="portrait">
                    <img :src="head_url" height="190" width="190" class="img-responsive">
                </div>
                <div class="msg">
                    <p class="name">{{name}}</p>
                    <P class="autograph">{{autograph}}</P>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="title">
                <P class="text">个人信息</P>
                <a class="edit" @click="modal_form = true, warning()">编辑</a>
            </div>
            <hr class="hr">
            <div class="detailed">
                <div class="tr">
                    <div class="th">
                        昵称
                    </div>
                    <div class="td">
                        {{msg.name}}
                    </div>
                </div>
                <hr>
                <div class="tr">
                    <div class="th">
                        性别
                    </div>
                    <div class="td">
                        {{msg.sex}}
                    </div>
                </div>
                <hr>
                <div class="tr">
                    <div class="th">
                        邮箱
                    </div>
                    <div class="td">
                        {{msg.mail}}
                    </div>
                </div>
                <hr>
                <div class="tr">
                    <div class="th">
                        个性签名
                    </div>
                    <div class="td">
                        {{msg.signature}}
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                change_head: "http://lb.xhxblog.cn/static/img/init.jpg",
                autograph: "这位同学很懒，木有签名～",
                name: "快去取个名",
            	  head_url: "http://lb.xhxblog.cn/static/img/init.jpg",
                picValue: "",
                msg: {
                    name: "快去取个名",
                    sex: "保密",
                    mail: "快去填写个邮箱吧",
                    signature: "这位同学很懒，木有签名～",
                },
                modal_form: false,
                formItem: {
                    name: '快去取个名66',
                    mail: '快去填写个邮箱吧',
                    radio: 'secrecy',
                    textarea: '这位同学很懒，木有签名～',
                    url: 'http://lb.xhxblog.cn/static/img/init.jpg'
                }
            }
        },
        methods: {
            warning () {
                this.$Message.warning('头像大小在512kb以内，形状为正方形',3);
            },
            sendImg(){
                var that = this;
                var url = "http://lb.xhxblog.cn/user/avatar/upload";
                let postData = new FormData();
                postData.append('file', that.picValue); // 绑定的图片值
                const msg = this.$Message.loading('上传图片中...', 0);
                setTimeout(msg, 3000);
                that.$http.post(url, postData, {"Content-Type": "Multipart/form-data"}).then(function (res) {
                    //成功
                    that.$Message.destroy();
                    console.log("成功");
                    console.log(res);
                    if(res.body.status === 10001 || res.body.status === 10002){
                        const msg_error = that.$Message.error('上传图片失败...服务器错误', 0);
                        setTimeout(msg_error, 3000);
                    }else{
                        that.formItem.url = res.body.url;
                    }
                },function (res) {
                    console.log("error");
                    console.log(res);
                    that.$Message.destroy();
                    const msg = that.$Message.error('上传图片失败...请求服务器出错...', 0);
                    setTimeout(msg, 3000);
                })
            },
          //修改资料
            submit () {
              const msg = this.$Message.loading('不要急，正在提交...', 0);
              setTimeout(msg, 3000);
              var that = this;
              var url = "http://lb.xhxblog.cn/user/profile/change";
              var cook = document.cookie;
              var name_begin = cook.indexOf("state=");
              var name_end = cook.indexOf("endstate");
              var name = cook.substring(name_begin+6,name_end);
              var msg_submit = {
                  avatar: that.formItem.url,
                  nickname: that.formItem.name,
                  email: that.formItem.mail,
                  signature: that.formItem.textarea,
                  sex: 0,
                  username: name
              };
              if (that.formItem.radio === "secrecy") msg_submit.sex = 2;
              if (that.formItem.radio === "male") msg_submit.sex = 0;
              if (that.formItem.radio === "female") msg_submit.sex = 1;
              that.$http.post(url, msg_submit).then(function (res) {
                //成功
                console.log("成功");
                console.log(res);
                that.$Message.destroy();
                if(res.body.status === 10001){
                  const msg_error = that.$Message.error('提交失败...服务器错误', 0);
                  setTimeout(msg_error, 3000);
                }else{
                  that.modal_form = true;
                  const msg_error = that.$Message.success('提交成功...', 0);
                  setTimeout(msg_error, 3000);
                  console.log(msg_submit);
                  //储存头像和昵称
                  document.cookie="nickname="+msg_submit.nickname+"endnickname;";
                  document.cookie="head="+msg_submit.avatar+"endhead;";
                  that.$router.go(0);
                }
              },function (res) {
                //失败
                console.log("失败");
                that.$Message.destroy();
                const msg = that.$Message.error('提交失败...请求服务器出错...', 0);
                setTimeout(msg, 3000);
              })
            }
        },
        created() {
            const msg = this.$Message.loading('页面加载中...', 0);
            setTimeout(msg, 3000);
        	  var that = this;
        	  var url = "http://lb.xhxblog.cn/user/profile";
            var cook = document.cookie;
            var name_begin = cook.indexOf("state=");
            var name_end = cook.indexOf("endstate");
            var name = cook.substring(name_begin+6,name_end);
            var msg_create = {
                username : name
            };
            that.$http.post(url, msg_create).then(function (res) {
                console.log("success");
                console.log(res);
                that.$Message.destroy();
                if(res.body.status === 10001){
                    const msg = that.$Message.error('加载失败...信息获取错误...', 0);
                    setTimeout(msg, 3000);
                    //登陆信息过期
                    //删除cookie
                    document.cookie="state="+""+"endstate;";
                    document.cookie="nickname="+""+"endnickname;";
                    document.cookie="head="+""+"endhead;";
                    //返回主页
                    that.$router.push({
                        path: "/home"
                    });
                }else{
                    //加载数据
                    var Jname = res.body.profile.nickname;
                    var Jsex = res.body.profile.sex;
                    var Jmail = res.body.profile.email;
                    var Jsignature = res.body.profile.signature;
                    if(Jname === ""){
                        that.msg.name = "快去取个名";
                    }else{
                        that.msg.name = Jname;
                    }
                    if(Jmail === ""){
                        that.msg.mail = "快去填写个邮箱吧";
                    }else{
                        that.msg.mail = Jmail;
                    }
                    if(Jsignature === ""){
                        that.msg.signature = "这位同学很懒，木有签名～";
                    }else{
                        that.msg.signature = Jsignature;
                    }
                    if(Jsex === 1){
                        that.msg.sex = "女";
                    }else if(Jsex === 0){
                        that.msg.sex = "男";
                    }else{
                        that.msg.sex = "保密";
                    }
                    //banner里面数据
                    var Javatar = res.body.profile.avatar;
                    that.name = that.msg.name;
                    that.autograph = that.msg.signature;
                    if(Javatar === ""){
                        that.head_url = "http://lb.xhxblog.cn/user/profile";
                    }else{
                        that.head_url = Javatar;
                    }
                    //弹出框里面数据
                    that.formItem.name = that.msg.name;
                    that.formItem.mail = that.msg.mail;
                    that.formItem.textarea = that.msg.signature;
                    that.formItem.url = that.head_url;
                    that.change_head = that.head_url;
                    if(Jsex === 1){
                        that.formItem.radio = "female";
                    }else if(Jsex === 0){
                        that.formItem.radio = "male";
                    }else{
                        that.formItem.radio = "secrecy";
                    }
                }
            },function (res) {
                console.log("失败");
                that.$Message.destroy();
                const msg = that.$Message.error('加载失败...请求服务器出错...', 0);
                setTimeout(msg, 3000);
                //返回主页
                that.$router.push({
                    path: "/home"
                });
            })
        }
    }
</script>





































