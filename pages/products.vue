<!--  -->
<template lang='pug'>
  div.productHeader
    el-row
      el-col(:span='18')
        Crumbs(:keyWord='keyword')
        Category(:areas='areas' :types='types')
        List
      el-col(:span='6')
        Map
</template>

<script>
import Crumbs from "../components/products/crumbs";
import Category from "../components/products/category";
import List from "../components/products/list";
import Map from "../components/public/map";
import Axios from "axios";

export default {
  layout: "default",
  components: {
    Crumbs,
    Category,
    List,
    Map
  },
  data() {},
  //   async mounted() {
  //     let city = encodeURIComponent(ctx.store.state.geo.position.city);

  //     let {
  //       status,
  //       data: { areas, types }
  //     } = await Axios.get("/products/crumbs", {
  //       params: {
  //         city
  //       }
  //     });
  //   },
  async asyncData(ctx) {
    let HOST = "http://localhost:3000";
    let city = ctx.store.state.geo.position.city;
    let keyword = ctx.query.good;
    let {
      status,
      data: { areas, types }
    } = await Axios.get(`${HOST}/products/crumbs`, {
      params: {
        city
      }
    });
    let {
      status1,
      data: { pois }
    } = await Axios.get(`${HOST}/search/resultsByKeywords`, {
      params: {
        keyword,
        city
      }
    });
    return {
      keyword,
      areas,
      types
    };
  }
};
</script>

<style lang='scss' scoped>
.productHeader {
  background: white;
  padding: 20px 0;
}
</style>
