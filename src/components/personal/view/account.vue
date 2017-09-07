<style scoped>
    .account .title{
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 20px;
        font-size: 20px;
        font-family: 'Microsoft Yahei';
    }
    .account .title .text{
        float: left;
    }
    .account .title .edit{
        float: right;
    }
    .account > .hr{
        clear: both;
        margin-left: 20px;
        margin-right: 20px;
        border: none;
        border-top: 1px solid #185598;
    }
    .content{
        margin-left: 50px;
        margin-right: 50px;
    }
    .content .list{
        display: flex;
        align-items: center;
        position: relative;
    }
    .content .list .icon{
        display: inline-block;
        height: 50px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content .list .name{
        display: inline-block;
        font-size: 20px;
        margin-left: 40px;
    }
    .content .list .btn{
        display: inline-block;
        font-size: 20px;
        height: 35px;
        width: 60px;
        border: 1px solid #666;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 40px;
        top: 7px;
    }
    .content .list .btn a:hover{
        color: #000;
        text-decoration:none;
    }
    .content .list .btn a{
        color: #000;
    }
    .content > .hr{
        clear: both;
        border: none;
        border-top: 1px solid #185598;
    }
    .from{
        padding-right: 50px;
        padding-left: 30px;
    }
    .modal-title{
        font-size: 20px;
    }
</style>
<template>
    <div class="account">
        <div class="title">
            <P class="text">个人信息</P>
            <a class="edit">有问题？</a>
        </div>
        <hr class="hr">
        <div class="content">
            <div class="list">
                <div class="icon">
                    <Icon size=50 type="email" />
                </div>
                <div class="name">
                    邮箱 695729033@qq.com 已绑定
                </div>
                <div class="btn">
                    <a>更改</a>
                </div>
            </div>
            <hr class="hr">
            <div class="list">
                <div class="icon">
                    <Icon size=50 type="iphone" />
                </div>
                <div class="name">
                    手机 695729033 已绑定
                </div>
                <div class="btn">
                    <a>更换</a>
                </div>
            </div>
            <hr class="hr">
            <div class="list">
                <div class="icon">
                    <Icon size=50 type="ios-gear" />
                </div>
                <div class="name">
                    密码 已设置
                </div>
                <div class="btn">
                    <a @click="modal_form = true">修改</a>
                </div>
            </div>
            <hr class="hr">
        </div>
        <Modal v-model="modal_form" width="400">
            <div class="modal-title">
                修改密码
            </div>
            <div class="footer" slot="footer">
            <Form class="from" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="90">
                <Form-item label="原始密码:" prop="Original">
                    <Input type="password" v-model="formCustom.Original" number></Input>
                </Form-item>
                <Form-item label="新密码:" prop="passwd">
                    <Input type="password" v-model="formCustom.passwd"></Input>
                </Form-item>
                <Form-item label="确认新密码:" prop="passwdCheck">
                    <Input type="password" v-model="formCustom.passwdCheck"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
name: 'account',
data () {
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 16){
            callback(new Error('请输入6-16位密码'));
        } else {
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
    const validateOriginal = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('密码不能为空'));
        }
    };
    return {
        modal_form: false,
        formCustom: {
            passwd: '',
            passwdCheck: '',
            Original: ''
        },
        ruleCustom: {
            passwd: [
                { validator: validatePass, trigger: 'blur' }
            ],
            passwdCheck: [
                { validator: validatePassCheck, trigger: 'blur' }
            ],
            Original: [
                { validator: validateOriginal, trigger: 'blur' }
            ]
        }
    }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>


