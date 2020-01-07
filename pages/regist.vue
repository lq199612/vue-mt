<!--  -->
<template lang='pug'>
    div
        header.header--mini
            div.wrapper
                a.site-logo(href='/')
                div.login-block
                    span.tip 已有美团账号？
                    a.btn.btn-small.login(href='/login') 登录
        div.content
            div.J-unitive-signup-form
                div.sheet
                    el-form(ref='from' label-width='100px' style='width:50%' :rules='rules' :model="editForm" )
                        el-form-item(label='昵称'  prop='name')
                            el-input(v-model='ruleForm.name')
                        el-form-item(label='邮箱'  prop='email')
                            el-input(v-model='ruleForm.email')
                            el-button(size='mini' round @click='sendMsg')  发送验证码
                            span.msg {{statusMsg}}
                        el-form-item(label='验证码'  v-if='isSend')
                            el-input(v-model='ruleForm.code' maxlength='4' )
                        el-form-item(label='密码'  prop='pwd')
                            el-input(v-model='ruleForm.pwd' type='password')
                        el-form-item(label='确认密码' prop='rpwd')
                            el-input(v-model='ruleForm.rPwd' type='password')  
                        el-form-item
                            el-button(type='primary' @click='regist') 同意以下协议并注册
                            div.error {{error}}
                        el-form-item
                            a.f1(href="https://rules-center.meituan.com/rules-detail/4" target="_blank") 《美团点评用户服务协议》
</template>

<script>
import axios from "axios";
// 对密码加密
import Crypto from "crypto-js";

export default {
  layout: "blank",
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        code: "",
        pwd: "",
        rpwd: ""
      },
      editForm: {
        selectSources: []
      },
      statusMsg: "",
      isSend: false,
      error: "",
      rules: {}
      //   rules: {
      //     name: [
      //       {
      //         required: true,
      //         type: "string",
      //         message: "请输入昵称",
      //         trigger: "blur"
      //       }
      //     ],
      //     email: [
      //       {
      //         required: true,
      //         type: "email",
      //         message: "请输入邮箱",
      //         trigger: "blur"
      //       }
      //     ],
      //     pwd: [{ required: true, message: "创建密码", trigger: "blur" }],
      //     rpwd: [
      //       { required: true, message: "确认密码", trigger: "blur" },
      //       {
      //         validator: (rule, value, callback) => {
      //           if (value === "") {
      //             callback(new Error("请再次输入密码"));
      //           } else if (value != this.ruleForm.pwd) {
      //             callback(new Error("与密码不一致"));
      //           } else {
      //             callback();
      //           }
      //         },
      //         trigger: "blur"
      //       }
      //     ]
      //   }
    };
  },
  methods: {
    sendMsg() {
      let namePass, emailPass;
      if (this.timeId) {
        return false;
      }
      this.$refs["from"].validateField("name", valid => {
        // valid有值表示错误
        namePass = valid;
      });
      this.statusMsg = "";
      if (namePass) {
        return false;
      }
      this.$refs["from"].validateField("email", valid => {
        emailPass = valid;
      });
      if (!emailPass && !emailPass) {
        // 在nuxt.config.js中的modules中已经导入了
        axios
          .post("/users/verify", {
            username: encodeURIComponent(this.ruleForm.name),
            email: this.ruleForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data.code === 0) {
              let count = 60;
              this.statusMsg = `验证码已发送,剩余${count--}秒`;
              /* 
              注意setInterval里的this指向问题，如果回调函数声明换成是function命名方式，this的指向不是vue示例，
              而是window对象，会有错误，要么先用self = this，要么使用箭头函数
              */
              this.timeId = setInterval(() => {
                this.statusMsg = `验证码已发送,剩余${count--}秒`;
                if (count === 0) {
                  this.statusMsg = "";
                  clearInterval(this.timeId);
                }
              }, 1000);
            } else {
              this.statusMsg = data.msg;
            }
          });
      }
      this.isSend = true;
    },
    regist() {
      this.$refs["from"].validate(valid => {
        if (valid) {
          axios
            .post("/users/signup", {
              username: encodeURIComponent(this.ruleForm.name),
              password: Crypto.MD5(this.ruleForm.pwd).toString(),
              email: this.ruleForm.email,
              code: this.ruleForm.code
            })
            .then(({status, data}) => {
              console.log(data);
              if (status == 200) {
                if (data.code == 0) {
                  location.href = "/login";
                } else {
                  this.error = data.msg;
                  return false;
                }
              } else {
                this.error = `服务器出错，错误码：${status}`;
              }
              setTimeout(() => {
                this.error = "";
              }, 5000);
            });
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
// @import '@/assets/css/register/index'
.msg {
  color: #ffd000;
  margin-left: 20px;
}
.el-form-item {
  width: 100%;
}
.el-form {
  margin: 0 auto;
}

.header--mini {
  font: 400 14px/1.5 "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma,
    sans-serif;
  display: block;
  border-bottom: 2px solid #d8d8d8;
  min-width: 980px;
  color: #666;
  height: 55px;

  .wrapper {
    margin: 0 auto;
    padding: 10px 0;
    width: 980px;
    zoom: 1;
    display: block;

    .site-logo {
      width: 128px;
      background: url(//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png)
        no-repeat;
      background-size: contain;
      height: 36px;
      text-indent: -1000px;
      overflow: hidden;
      float: left;
      color: #fe8c00;
      text-decoration: none;
      cursor: pointer;
    }

    .login-block {
      float: right;
      line-height: 36px;
      margin: 0;
      padding: 0;
      display: block;

      .tip {
        margin-right: 10px;
        vertical-align: sub;
      }
      .btn {
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        user-select: none;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.5;
        letter-spacing: 0.1em;
        text-align: center;
        text-decoration: none;
        border-style: solid;
        background-repeat: repeat-x;
        border-radius: 2px;
      }
      .btn-small {
        font-size: 12px;
        border-color: rgba(191, 105, 0, 0.15);
        font-weight: 400;
        -webkit-font-smoothing: initial;
      }
      .login {
        padding: 3px 10px;
      }
    }
  }
}
.content {
  margin: 0 auto 30px;
  padding-top: 30px;
  width: 980px;
  min-height: 300px;
  .J-unitive-signup-form {
    margin: 0;
    padding: 0;
    .sheet {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
