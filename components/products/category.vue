<!--  -->
<template lang='pug'>
  div.m-product-categroy 
    dl.class
      dt 区域
      dt 全部
      dd(v-for='area in areas' :key='area["type"]')
        div.m-product-select
          dl.tab
            dt {{area['type']}}
              i.el-icon-arrow-down.el-icon--right
            dd
              h3 {{area['type']}}
              span(v-for='item in area["module"]') {{item}}
    dl.class
      dt 分类
      dt 全部
      dd()    
</template>

<script>
export default {
    props:{
      areas:{
        type:Array,
        required:true
      },
      types:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style lang='scss' scoped>
.m-product-categroy {
  padding:15px 20px 0;
  background: #fff;
  border:1px solid #E5E5E5;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.class{
  display: flex;
  padding-bottom: 10px;
  >dt{
    width: 80px;
    &:nth-child(2){
      border-radius: 100px;
      background: #13D1BE;
      color:#fff;
      height:22px;
      line-height: 22px;
      width: 40px;
      box-sizing: border-box;
      margin-right: 40px;
      text-align: center;
    }
  }
  &:nth-child(1){
    dd{
      border-bottom: 1px solid #dddddd;
    }
  }
}
.m-product-select{
  padding-bottom: 5px;
  min-width: 120px;
  .tab{
    position: relative;
    dt{
      font-size: 14px;
      line-height: 24px;
    }
    dd{
      display: none;
      top: 24px;
      width: 510px;
      background: white;
      position: absolute;
      cursor: auto;
      user-select: text;
      white-space: normal;
      font-size: 12px;
      text-align: left;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      padding: 19px 15px 9px;

      &::before{
        content: ' ';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent transparent #E5E5E5;
        border-style: solid;
        border-width: 5px;
        top: -11px;
      }
      &::after{
        content: ' ';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent transparent #E5E5E5;
        border-style: solid;
        top: -8px;
        left:16px;
      }
      span{
        display: inline-block;
        min-width: 120px;
        line-height: 1.5;
        font-weight: 500
      }
      h3{
        color: #ccc;
        font-size: 16px;
        margin-bottom: 11px;
      }
    }
    &:hover{
      dd{
        display: block;
        z-index: 999;
      }
    }
  }
}
</style>
