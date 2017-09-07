<style scoped>
    .main{
        font-size: 52.6%;
    }
    .nav li{
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .layout-user, .btn{
        font-size: 11px;
        display: inline-block;
        margin-left: 80px;
        margin-right: 80px;
    }
    .layout-user{
        height: 41px;
        width: 41px;
        background-color: pink;
        border: 1px solid pink;
        border-radius: 25px;
        margin-top: 2px;
        margin-bottom: 0px;
        overflow: hidden;
    }
    .layout-user img{
        height: 41px;
        width: 41px;
    }
    .layout-search{
        width: 200px;
        height: 30px;
        margin-left: 200px;
        background-color: #265190;
        border: #3879D9 1px solid;
        border-radius: 5px;
        padding: 5px;
        color: #fff;
    }
    .nav .active a{
      /*padding-right: 0px;*/
      width: 100%;
    }
    .nav > li > a{
        display: block;
    }
    .navbar{
        margin-bottom: 0px;
        border-radius: 0px;
    }
    .glyphicon{
        margin-left: -27px;
    }
    .navbar-inverse{
        background-color: #255090;
        border-color: #255090;
    }
    .navbar-inverse .navbar-nav > .active > a{
        background-color: #4380DB;
    }
    .navbar-inverse .navbar-nav > .active > a:hover{
        background-color: #3B74C9;
    }
    .login{
        margin-top: 30px;
        text-align: center;
    }
    .login-btn{
        width: 166px;
    }
    .forget{
        margin-left: 100px;
        margin-bottom: 10px;
        margin-top: -10px;
    }
    .register{
        margin-top: 30px;
        text-align: center;
    }
    .ivu-form .ivu-form-item-label{
        text-align: right;
    }
    .input{
        margin-left: 30px;
        padding-right: 30px;
    }
    .reguster-btn{
        margin-left: -30px;
    }

    .api{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .MyMsg{
        margin-top: 20px;
        margin-bottom: 20px;
        display: block;
    }
    .unlgoin{
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .name{
        margin-top: 20px;
        font-size: 18px;
        font-family: "Arial";
        color: #1296db;
    }

    .content{
        width: 100%;
        /* background-color: #EDF2FA; */
        display: flex;
    }
    .right{
        width: 100%;
    }

    .menu{
        font-size: 20px;
        white-space: nowrap;/* 文本不换行 */
        margin-left: 10px;
    }
    .menu-title{
        font-size: 23px;
        margin-top: -20px;
        margin-bottom: 20px;
        text-align: center;
    }
    .foot{
        margin-top: 5rem;
        width: 100%;
        text-align: center;
    }
</style>


<template>
  <div class="main">
<!--上面导航栏-->
    <nav class="navbar navbar-inverse" role="navigation">
        <a v-show="window_width>767" class="navbar-brand" href="#">菜鸟教程{{window_width}}</a>
        <input maxlength=12 v-show="window_width>991" class="navbar-btn layout-search" type="text" placeholder="search...">
        <span v-show="window_width>991" class="glyphicon glyphicon-search"></span>
        <ul class="nav navbar-nav navbar-right">
            <li :class="{active: isQuestions}">
                <a @click="isClass = false, isQuestions = true, isNavigation = false,select('question')">题库</a>
            </li>
            <li :class="{active: isClass}">
                <a @click="isClass = true, isQuestions = false, isNavigation = false,select('class')">学习路径</a>
            </li>
            <li :class="{active: isNavigation}">
                <a @click="isClass = false, isQuestions = false, isNavigation = true,select('navigation')">导航</a>
            </li>
            <li>
                <button v-if="login"  @click="modal_login = true" type="button" class="navbar-btn btn btn-info navbar-right">登 陆</button>
                <div v-else class="bottom">
                    <Poptip trigger="hover" placement="bottom" width="150">
                        <div type="ghost" class="layout-user navbar-right"><img :src="head_url"></div>
                        <div class="api" slot="content">
                            <div class="name">{{nickname}}</div>
                            <Button class="MyMsg" @click="isClass = false, isQuestions = false, isNavigation = false, select('personal')" type="info">我的信息</Button>
                            <Button class="unlogin" @click="logout()" type="warning">退出登陆</Button>
                        </div>
                    </Poptip>
                </div>
            </li>
        </ul>
    </nav>
<!--登陆注册-->
    <Modal v-model="modal_login" width="400">
        <Menu  mode="horizontal" theme="light" active-name="1">
            <Menu-item name="1">
                <div @click="state = true" >
                登 陆
                </div>
            </Menu-item>
            <Menu-item name="2">
                <div @click="state = false" >
                注 册
                </div>
            </Menu-item>
        </Menu>
        <!-- 登陆 -->
        <div v-show="state">
            <Form class="login" ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <br>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <div class="forget">
                    忘记密码？
                </div>
                <Form-item>
                    <Button class="login-btn" type="primary" @click="SubmitLogin('formInline')">登录</Button>
                </Form-item>
            </Form>
        </div>
        <!-- 注册 -->
        <div v-show="!state">
            <Form class="register" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                <Form-item label="用 户 名:" class="input" prop="user">
                    <Input type="text" v-model="formCustom.user" number></Input>
                </Form-item>
                <Form-item label="密 码:" class="input" prop="passwd">
                    <Input type="password" v-model="formCustom.passwd"></Input>
                </Form-item>
                <Form-item label="确认密码:" class="input" prop="passwdCheck">
                    <Input type="password" v-model="formCustom.passwdCheck"></Input>
                </Form-item>
                <Form class="reguster-btn">
                    <Button type="primary" @click="SubmitRegister('formCustom')">提交</Button>
                    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                </Form>
            </Form>
        </div>
        <div slot="footer">
            <!-- <Button v-if="state">登 陆</Button>
            <Button v-if="!state">注 册</Button> -->
        </div>
    </Modal>
<!-- 左边的导航栏 -->
    <div class="content">
        <div class="left">
            <Menu width= 200px @on-select="selectMenu" mode="vertical" :active-name="left_now">
                <Menu-group>
                    <div class="menu-title">{{ menu[menu_now].name }}</div>
                    <Menu-item :key="item.id" class="menu" :name="item" v-for="(item,index) in menu[menu_now].table">
                        <Icon type="document-text"></Icon>
                        {{item}}
                    </Menu-item>
                </Menu-group>
            </Menu>
        </div>
        <div class="right">
            <router-view>

            </router-view>
        </div>
    </div>
<!--底部信息-->
    <footer class="foot">
      @ccsu 长沙学院网络信息实验室
    </footer>
  </div>
</template>

<script>

import personal from './personal/Personal.vue'
import navigation from './navigation/navigation.vue'
import Class from './class/Class.vue'
import question from './question/question.vue'
import information from './personal/view/information.vue'
import iView from 'iview'
export default {
    name: 'main',
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }else if(value.length < 6){
                callback(new Error('密码长度不能小于6位'));
            }else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        const validateUser = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('账号不能为空'));
            }
            // 模拟异步验证效果"^[A-Za-z0-9]+$"
            setTimeout(() => {
                var patt=new RegExp("^[A-Za-z0-9]+$");
                if (!patt.test(value)) {
                    callback(new Error('用户名为字母加数字组成'));
                } else {
                    if (value.length < 18) {
                        callback(new Error('用户名为18个字符以内'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        return {
        	  nickname: "快去取个名",
            head_url: "http://lb.xhxblog.cn/static/img/init.jpg",
            login: false,//是否登陆
            window_width: window.innerWidth,//页面宽度
            modal_login: false,//登陆注册弹出框
            state: true,//登陆还是注册
            isQuestions: false,//导航栏的
            isClass: false,
            isNavigation: false,
            formCustom: {
                passwd: '',
                passwdCheck: '',
                user: ''
            },
            formInline: {
                user: '',
                password: '',
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ],
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ]
            },
            nav: {
                'class': {
                    path: 'class'
                },
                '前端工程师': {
                    path: 'web'
                },
                'Java工程师': {
                    path: 'java'
                },
                'PHP工程师': {
                    path: 'php'
                },
                'Android工程师': {
                    path: 'android'
                },
                'navigation': {
                    path: 'common'
                },
                '常用网站': {
                    path: 'common'
                },
                '工具大全': {
                    path: 'tool'
                },
                '经典博客': {
                    path: 'bolg'
                },
                '学习资源': {
                    path: 'study'
                },
                '精品网站': {
                    path: 'boutique'
                },
                '其他网站': {
                    path: 'other'
                },
                'personal': {
                    path: 'information'
                },
                '个人信息': {
                    path: 'information'
                },
                '我的路径': {
                    path: 'myClass'
                },
                '账号管理': {
                    path: 'account'
                },
                'question': {
                    path: 'question'
                },
            },
            menu: {
                'personal': {
                    name: '个人空间',
                    table: ['个人信息', '我的路径', '账号管理']
                },
                'navigation': {
                    name: '导航',
                    table: ['常用网站', '工具大全', '经典博客', '学习资源', '精品网站', '其他网站']
                },
                'class': {
                    name: '学习路径',
                    table: ['前端工程师', 'Java工程师', 'PHP工程师', 'Android工程师']
                },
                'question': {
                    name: '题库',
                    table: ['题库1', '题库2', '题库3']
                }
            },
            //当前的页面
            menu_now: "navigation",
            //左边的导航的高亮部位
            left_now: "1"
        }
    },
    //组件登记处
    components: {
        personal,Class
    },
    methods: {
        //vue-router
        //左边
        selectMenu: function(name) {
            console.log(name+"9999");
            this.$router.push({
                path: this.nav['' + name + ''].path
            });
            document.cookie = "class_left="+name+"endclass_left;";
        },
        //上边
        select: function(name) {
            //路由的选择
            this.$router.push({
                path: this.nav['' + name + ''].path
            });
            //更改左边导航的cookie
            document.cookie="menu_now="+name+"endmenu;";

            //更改左边的主标题
            this.menu_now = name;
            //更改左边状态
            this.left_now = name;
            console.log(this.left_now)
            document.cookie = "class_left="+name+"endclass_left;";
        },
        //vue-resource
        //注册
        sendRegister: function() {
            const msg = this.$Message.loading('拼了命的注册中...', 0);
            setTimeout(msg, 3000);
            var that = this;
            var url = "http://lb.xhxblog.cn/register/submit";
            var msg_register = {
                username: that.formCustom.user,
                password: that.formCustom.passwd
            };
            that.$http.post(url, msg_register).then(function(response){
                //成功
                console.log("成功");
                console.log(response);
                this.$Message.destroy();
                if(response.body.state === 10001){
                    const msg_error = that.$Message.error('注册失败...账号重复...', 0);
                    setTimeout(msg_error, 3000);
                }else if(response.body.state === 10002){
                    const msg_error = that.$Message.error('注册失败...服务器错误...请稍后再试...', 0);
                    setTimeout(msg_error, 3000);
                }else{
                    that.modal_login = false;
                    that.login = false;
                    const msg_error = that.$Message.success('注册成功...欢迎入坑...', 0);
                    setTimeout(msg_error, 3000);
                    //创建cookie
                    document.cookie="state="+msg_register.username+"endstate;";
                    //更改头像和昵称
                    if(response.body.users.NickName === ""){
                        that.nickname = "快去取个名";
                    }else{
                        that.nickname = response.body.users.NickName;
                    }
                    that.head_url = response.body.users.Avatar;
                    //储存头像和昵称
                    document.cookie="nickname="+that.nickname+"endnickname;";
                    document.cookie="head="+that.head_url+"endhead;";
                }
            },function(response){
                //失败
                console.log("失败");
                this.$Message.destroy();
                const msg = this.$Message.error('注册失败...请求服务器出错...', 0);
                setTimeout(msg, 3000);
            })
        },
        //登陆
        sendLogin: function() {
            const msg = this.$Message.loading('作死的登陆中...', 0);
            setTimeout(msg, 3000);
            var that = this;
            var url = "http://lb.xhxblog.cn/login/submit";
            var msg_login = {
                username: that.formInline.user,
                password: that.formInline.password
            };
            that.$http.post(url, msg_login).then(function(response){
                //成功
                console.log("成功");
                console.log(response);
                that.$Message.destroy();
                if(response.body.status === 10001){
                    const msg_error = that.$Message.error('登陆失败...账号或密码错误...', 0);
                    setTimeout(msg_error, 3000);
                }else{
                    that.modal_login = false;
                    that.login = false;
                    const msg_error = that.$Message.success('登陆成功...欢迎归来...', 0);
                    setTimeout(msg_error, 3000);
                    //创建cookie
                    document.cookie="state="+msg_login.username+"endstate;";
                    //更改头像和昵称
                    if(response.body.users.NickName === ""){
                    	  that.nickname = "快去取个名";
                    }else{
                        that.nickname = response.body.users.NickName;
                    }
                    that.head_url = response.body.users.Avatar;
                    //储存头像和昵称
                    document.cookie="nickname="+that.nickname+"endnickname;";
                    document.cookie="head="+that.head_url+"endhead;";
                }
            },function(response){
                //失败
                console.log("失败");
                that.$Message.destroy();
                const msg = that.$Message.error('登陆失败...请求服务器出错...', 0);
                setTimeout(msg, 3000);
            })
        },
        //退出登陆
        logout: function () {
            const msg = this.$Message.loading('不要急，在退出了...', 0);
            setTimeout(msg, 3000);
            var that = this;
            var url = "http://lb.xhxblog.cn/logout";
            var cook = document.cookie;
            var name_begin = cook.indexOf("state=");
            var name_end = cook.indexOf("endstate");
            var name = cook.substring(name_begin+6,name_end);
            var msg_out = {
                username : name
            };
            that.$http.post(url, msg_out).then(function (response) {
                //成功
                console.log("成功");
                console.log(response);
                that.$Message.destroy();
                if(response.body.status === 10001){
                    const msg_error = that.$Message.error('注销失败...服务器错误', 0);
                    setTimeout(msg_error, 3000);
                }else{
                    that.login = true;
                    const msg_error = that.$Message.success('注销成功...慢走不送...', 0);
                    setTimeout(msg_error, 3000);
                    //删除cookie
                    document.cookie="state="+""+"endstate;";
                    document.cookie="nickname="+""+"endnickname;";
                    document.cookie="head="+""+"endhead;";
                    //到时候还是给她丢到主页去
                    that.$router.push({
                        path: "/home"
                    });
                }
            },function (respose) {
                //失败
                console.log("失败");
                that.$Message.destroy();
                const msg = that.$Message.error('注销失败...请求服务器出错...', 0);
                setTimeout(msg, 3000);
            })
        },
        //处理登陆注册信息
        SubmitLogin(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.sendLogin();
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        SubmitRegister(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.sendRegister();
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    },
    created: function () {
    	  //判断当前的上导航的高亮
        var menu = document.cookie;
        var way = menu.indexOf("menu_now=");
        var end = menu.indexOf("endmenu");
        var menu = menu.substring(way+9,end);
        //console.log(menu);
        this.menu_now = menu;
        if(menu === 'navigation'){
            this.isClass = false;
            this.isQuestions = false;
            this.isNavigation = true;
        }else if(menu === 'class'){
            this.isClass = true;
            this.isQuestions = false;
            this.isNavigation = false;
        }else if(menu === 'question'){
            this.isClass = false;
            this.isQuestions = true;
            this.isNavigation = false;
        }
        //判断是否登陆
        var cook = document.cookie;
        var name_begin = cook.indexOf("state=");
        var name_end = cook.indexOf("endstate");
        if(name_begin === -1 || name_begin === -1){
            this.login = true;
        }else{
            var name = cook.substring(name_begin+6,name_end);
            if(name === ""){
                this.login = true;
            }else{
                this.login = false;
                //已经登陆了，加载一下他的头像名字.
                var nickname_begin = cook.indexOf("nickname=");
                var nickname_end = cook.indexOf("endnickname");
                this.nickname = cook.substring(nickname_begin+9,nickname_end);
                var head_begin = cook.indexOf("head=");
                var head_end = cook.indexOf("endhead");
                this.head_url = cook.substring(head_begin+5,head_end);
            }
        }
        //判断左导航的高亮
        cook = document.cookie;
        var class_begin = cook.indexOf("class_left=");
        var class_end = cook.indexOf("endclass_left");
        this.left_now = cook.substring(class_begin+11,class_end);
        console.log(this.left_now+"666")

    },
}

</script>


<!--手机端的就用这样子的看看
                 <Menu :theme="theme3" active-name="1">
                    <Menu-group title="内容管理">
                        <Menu-item name="1">
                            <Icon type="document-text"></Icon>
                            文章管理
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="chatbubbles"></Icon>
                            评论管理
                        </Menu-item>
                    </Menu-group>
                    <Menu-group title="统计分析">
                        <Menu-item name="3">
                            <Icon type="heart"></Icon>
                            用户留存
                        </Menu-item>
                        <Menu-item name="4">
                            <Icon type="heart-broken"></Icon>
                            流失用户
                        </Menu-item>
                    </Menu-group>
                </Menu> -->
<!--
邮箱的修改暂时还没写
页面过期后
-->
