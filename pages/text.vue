<!--  -->
<template lang='pug'>
  div.clear_float
    div.goods_cell(v-for='i in 4')
        div
            img.img_goods(src='./01.jpg')
        div.text_goods 双宫茧桑蚕丝被
        div.goods_price 
           div.price_span 活动秒杀价
           div.price_num ￥ 499.0
        div.goods_seckill 
            div.seckill_left 仅剩
                span 23:59:00
            div.seckill_right 秒杀
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.clear_float {
  margin-bottom: 20px;

  .goods_cell {
    width: 47%;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-size: 13px;
    color: #333333;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  > .goods_cell:nth-of-type(2n + 1) {
    margin-left: 0;
  }

  .img_goods {
    width: 100px;
    height: 96px;
    display: block;
    margin: 0 auto;
  }

  .text_goods {
    margin: 10px 0;
    color: #333333;
    font-size: 13px;
  }

  .goods_price {
    font-size: 18px;
    color: #ff0845;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1px;

    .price_span {
      font-size: 8px;
      color: #fa5754;
      line-height: 8px;
    }

    .price_num {
      font-size: 16px;
      color: #fa5754;
      line-height: 18px;
    }
  }
  .goods_seckill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 15px;
    width: 100%;
    height: 15px;

    .seckill_left {
      width: 70%;
      padding: 2.5px 0;
      font-size: 10px;
      color: #2d2d2d;
      line-height: 10px;
      border: 1px solid #999999;
      border-right: 1px solid #ff0845;
      text-align: center;
    }

    .seckill_right {
      width: 30%;
      color: #ffffff;
      background-color: #ff0845;
      border: 1px solid #ff0845;
      font-size: 10px;
      line-height: 10px;
      padding: 2.5px 8px;
      text-align: center;
    }
  }
}
</style>
