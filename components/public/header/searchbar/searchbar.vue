<!--  -->
<template lang='pug'>
  div.search-panel
    el-row.m-header-searchbar
      el-col.left(:span=5)
        img(alt='美团' src='https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png') 
      el-col.center(:span=15)
        div.wrapper
          el-input(placeholder='搜索商家或地点' v-model='inputValue' @focus='isFocus=true' @blur='handleBlur') 
          button.el-button.el-button--primary
            i.el-icon-search
          dl.hotPlace(v-show='isFocus && !inputValue')
            dt 热门搜索
            dd(v-for='item,idx in hotPlaces' :key=idx) {{item}}
          dl.searchList(v-show='isFocus && inputValue')
            dd 火锅
            dd 火锅
            dd 火锅
        p.suggest
            a(v-for='item,idx in hotPlaces' :key=idx) {{item}}
        ul.nav
          li
            nuxt-link.takeout(to='/') 美团外卖
          li
            nuxt-link.takeout(to='/movie') 猫眼电影
          li
            nuxt-link.takeout(to='/hotel') 美团酒店
          li
            nuxt-link.takeout(to='/apartment') 民宿/公寓
          li
            nuxt-link.takeout(to='/business') 商家入驻
      el-col.right(:span=6)
        ul.security
          li
            i.refund
              p.txt 随时退
          li
            i.single
              p.txt 不满意免单
          li  
            i.overdue
              p.txt 过期退
          


</template>

<script>
export default {
  data(){
    return {
      isFocus:false,
      inputValue:'',
      hotPlaces:['火锅','火锅','火锅'],
      searchLists:['火锅','火锅','火锅','火锅']
    }
  },
  watch:{
    //- inputValue(){
    //-   console.log(this.inputValue.length)
    //-   console.log('hotPlace',this.isFocus && !this.inputValue.length)
    //-   console.log('searchList',this.isFocus && this.inputValue.length)
    //- }
  },
  methods:{
    handleBlur(){
      setTimeout(()=>this.isFocus=false,200)
    }
  }
};
</script>

<style lang='scss' scoped>
.m-header-searchbar {
  height: 157px;
  padding: 20px 20px;
  background: #fff;
  align-items: start;
  box-sizing: border-box;
  .left {
    width: 280px;
    padding-top: 15px;
    img {
      width: 126px;
      height: 46px;
    }
  }
}
.center {
  flex: 1;
  width: auto;
  .wrapper {
    margin-top: 16px;
    border: 1px solid #13d1be;
    border-radius: 4px;
    width: 552px;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    .el-input {
      width: 462px;
    }
    input {
      border: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .el-button {
      width: 88px;
      border: none;
      background: #13d1be;
      font-size: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      vertical-align: -1px;
      i {
        font-weight: bold;
      }
    }
    .hotPlace,
    .searchList {
      position: absolute;
      top: 41px;
      left: 0;
      background: #fff;
      padding: 10px;
      font-size: 12px;
      width: 462px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-top: none;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      dt {
        color: #999;
        font-weight: bold;
      }

      dd {
        display: inline-block;
        color: #666;
        margin-right: 10px;
        margin-bottom: 3px;
        margin-top: 5px;
        cursor: pointer;

        &:hover {
          background: #f8f8f8;
          color: #31bbac;
        }
      }

      &.searchList {
        padding: 0;
        margin: 0;
        dd {
          margin: 0;
          padding: 3px 10px;
          display: block;
          line-height: 1.6;
        }
      }
    }
  }

  .suggest {
    width: 552px;
    overflow: hidden;
    padding-left: 16px;
    line-height: 1;
    margin-top: 8px;
    height: 18px;

    a {
      color: #999;
      margin-right: 10px;
      margin-bottom: 3px;
      display: inline-block;
      font-size: 12px;

      &:hover {
        color: #31bbac;
      }
    }
  }

  .nav {
    list-style: none;
    display: flex;
    margin-top: 18px;

    li {
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
      position: relative;

      a {
        color: #222;

        &:hover {
          color: #f04d4e;
        }

        &.takeout:hover {
          color: #fbc700;
        }

        &.apartment:hover {
          color: #fdc411;
        }

        &.business:hover {
          color: #31bbac;
        }
      }
    }
  }
}

.right {
  text-align: right;
  padding-top: 15px;

  .security {
    li {
      display: inline-block;
      text-align: center;
      padding: 0 5px;
    }

    i {
      font-style: normal;

      &:after {
        font-family: iconfont;
        font-size: 36px;
        color: #13d1be;
      }
    }

    .refund {
      &:after {
        content: "\e65f";
      }
    }

    .single {
      &:after {
        content: "\e652";
      }
    }

    .overdue {
      &:after {
        content: "\e65e";
      }
    }

    .txt {
      color: #999;
      font-size: 12px;
      line-height: 1;
      margin: 0;
      text-align: center;
    }
  }
}
</style>
