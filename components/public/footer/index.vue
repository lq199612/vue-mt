<!--  -->
<template lang='pug'>
  div.footerHeader
    div.header
    el-row
      el-col(v-for='item,idx in list' :key='idx' :span='4')
        dl.dl(v-for='{title,data},key in item' :key='key') 
          dt.dt {{title}}
          dd.dd(v-for='text in data') 
            a(href='#') {{text}}
 




</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          1: {
            title: "用户帮助",
            data: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告",
              "消费者权益保障"
            ]
          },
          2: {
            title: "美团服务",
            data: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "美团民宿",
              "无人配送"
            ]
          }
        },
        {
          1: {
            title: "用户帮助",
            data: [
              "美团餐饮商户中心",
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "美团民宿房东商家入驻",
              "商家开票申请",
              "美团点评智能收银机"
            ]
          }
        },
        {
          1: {
            title: "代理商加盟",
            data: [
              "美团外卖代理商招募",
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募",
              "美团收单渠道代理商招募"
            ]
          },
          2: { title: "美团规则", data: ["规则中心", "规则目录", "规则评议院"] }
        },
        {
          1: { title: "关注美团", data: ["美团新浪微博"] },
          2: {
            title: "公司信息",
            data: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "商户诚信公约及管理办法",
              "保险经纪资质"
            ]
          },
          3: { title: "廉政举报", data: ["廉政邮箱"] },
          4: { title: "知识产权", data: ["知识产权维权平台"] }
        },
        {
          1: {
            title: "消费者服务热线",
            data: [
              "外卖消费者：10109777",
              "猫眼消费者：10105335",
              "其他消费者：10107888"
            ]
          },
          2: {
            title: "商家服务热线",
            data: [
              "外卖&餐饮商家：10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、",
              "亲子、家装等商家：10100107"
            ]
          },
          3: {
            title: "投诉热线",
            data: [
              "违法和不良信息举报电话：",
              "4006018900",
              "举报邮箱：",
              "tousujubao@meituan.com"
            ]
          },
          4: { title: "商家自助入驻美团入口", data: [] },
          5: { title: "供应商注册入口", data: [] }
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.header{
  background: white;
  border-top: 1px #E5E5E5 solid;
  margin-bottom: 30px;
}
.footerHeader {
  background: white;
  .dl {
    margin-bottom: 20px;
    .dt {
      color: #333;
      size: 14px;
      margin-bottom: 10px;
    }
    .dd {
      color: #666;
      size: 12px;
      margin-bottom: 8px;
    }
  }
}
</style>
