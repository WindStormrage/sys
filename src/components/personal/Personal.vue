<style scoped>
    .personal{
        width: 100%;
    }
    .banner{
        width: 100%;
    }
    .portrait{
        max-height: 150px;
        max-width: 150px;
        border-radius: 100px;
        overflow: hidden;
        float: left;
        margin-top: 30px;
        margin-left: 90px;
    }
    .img-banner{
        background-image: url(./../../assets/banner.jpg);
        height: 200px;
        width: 100%;
    }

    .msg{
        float: left;
        margin-left: 40px;
        margin-top: 40px;
    }
    .banner .msg .name{
        font-size: 40px;
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
</style>


<template>
    <div class="personal">
        <Modal v-model="modal_form" width="400">
            <div class="modal-title">
                编辑个人信息
            </div>
            <div class="footer" slot="footer">
                <div class="change" @click="">
                    <img src="./../../assets/portrait.jpg" height="190" width="190" class="img-responsive">
                    <div class="hover"><button>点击更换</button></div>
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
                        <Input v-model="formItem.emil" placeholder="请输入邮箱"></Input>
                    </Form-item>
                    <Form-item label="签 名:">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入个性签名..."></Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px">取消</Button>
                    </Form-item>
                </Form>
            </div>
        </Modal>

        <div class="banner">
            <div class="img-banner">
                <div class="portrait">
                    <img src="./../../assets/portrait.jpg" height="190" width="190" class="img-responsive">
                </div>
                <div class="msg">
                    <p class="name">xiedashuaige</p>
                    <P class="autograph">这位同学很懒，木有签名的说～</P>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">
                <P class="text">个人信息</P>
                <a class="edit" @click="modal_form = true">编辑</a>
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
                    msg: {
                        name: "xiedashuaige",
                        sex: "男",
                        mail: "695729033@qq.com",
                        signature: "这位同学很懒，木有签名的说～"
                    },
                    modal_form: false,
                    formItem: {
                        name: '',
                        emil: '',
                        radio: 'male',
                        textarea: ''
                    }
                }
            }
    }
</script>


