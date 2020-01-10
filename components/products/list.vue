<!--  -->
<template lang='pug'>
  div.m-product-list
    div
        dl
            dd(@click='navSelect' :class='[item.name,item.active? "s-nav-active":""]' v-for='item in sortData') {{item.txt}}
    ul
        Item
</template>

<script>
import Item from './item'
export default {
    components:{
        Item
    },
    data(){
        return{
            sortData:[
                {name:'s-default',txt:'智能排序',active:true},
                {name:'s-price',txt:'价格最低',active:false},
                {name:'s-visit',txt:'人气最高',active:false},
                {name:'s-comment',txt:'评价最高',active:false},
            ]
        }
    }
  }
</script>

<style lang='scss' scoped>
.m-product-list{
    box-sizing: border-box;
    margin-top: 10px;
    background: white;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 20px;
}
</style>
