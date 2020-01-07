<!--  -->
<template lang='pug'>
  div
    el-header
        a.site-logo
    el-main
        el-row
            el-col(:span='12')
                div.img
                    img(src='https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg')
            el-col(:span='12')
                div
                    el-form(label-position='right' label-width='80px' :model='{}')
                        el-form-item()
                            h3 登录
                        el-form-item
                            el-input(v-model='username')
                        el-form-item
                            el-input(v-model='password' type='password')   
                        el-form-item   
                            el-button(round size='medium' @click='login') 登录 
                            span.statusMsg {{statueMsg}}                       

</template>

<script>
import axio from "axios";
import crypto from 'crypto-js'

export default {
  layout: "blank",
  data() {
    return {
      username: "",
      password: "",
      statueMsg: ""
    };
  },
  methods: {
    login() {
        console.log(this.username,'',crypto.MD5(this.password).toString());
      axio
        .post("/users/signin", {
          username: encodeURIComponent(this.username),
          password: crypto.MD5(this.password).toString(),
        })
        .then(({ status, data }) => {
          if (status == 200) {
            if (data.code == 0) {
              location.href = "/";
            } else {
              this.statueMsg = data.msg;
              setTimeout(() => {
                this.statueMsg = "";
              }, 5000);
            }
          } else {
            this.statueMsg = data.msg;
            setTimeout(() => {
              this.statueMsg = "";
            }, 5000);
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.statusMsg{
    margin-left: 20px;
    color: red
}
.el-header,
.el-main {
  width: 70%;
  background: white;
  margin: 50px auto;
}
.site-logo {
  width: 128px;
  background: url(//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png)
    no-repeat;
  background-size: contain;
  height: 36px;
  float: left;
  cursor: pointer;
}
.img {
  width: 480px;
  height: 370px;
  margin: 0 115px 0 0;
  img {
    height: 100%;
    width: 100%;
  }
}
.el-form-item {
  width: 60%;
}
</style>
