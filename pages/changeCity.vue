<!--  -->
<template lang='pug'>
  div.changCityTop
    el-row 
      el-col(:span='24')
        h3.selectH3 按省份选择:
        el-select(v-model='curProvince'   placeholder='省份')
          el-option(v-for='item in provinces' :label='item.name'  :key='item.id' :value='item.name')
        el-select(v-model='city' multiple  placeholder='城市' :disabled='curProvince.length? false:true')
          el-option(v-for='item in curCities' :label='item.name' :value='item.name' :key='item.id')
        h3.selectH3 直接搜索
        el-autocomplete(v-model='state' :fetch-suggestions='querySearchAsync' placeholder='请输入城市名' @select='handleSelect')  
    el-row.m-hcity
      dl
        dt 热门城市
          dd(v-for='city in hotCities' :key='city.id') {{city.name=='市辖区'? city.province:city.name}}
    el-row
      dl.m-category
        dt 按拼音首字母选择：
          dd(v-for='alp in selectCity' :key='alp') {{alp}}
      dl.m-category-section
        dt.province(v-for='key in selectCity' :key='key') {{key}}
          dd.city(v-for='city in pinYinCities[key]' :key='city.id') {{ city['name'] }}
 </template>

<script>
import Axios from "axios";
import _ from "lodash";
import pinYin from "js-pinyin";

export default {
  data() {
    return {
      curProvince: "",
      provinces: [],
      initData: [],
      cities: {},
      city: "",
      state: "",
      hotCities: [],
      selectCity: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      pinYinCities: {}
    };
  },
  watch: {
    curProvince() {}
  },
  async mounted() {
    this.getCities();
    this.getHotCities();
  },
  computed: {
    curCities() {
      return this.cities[this.curProvince];
    }
  },
  methods: {
    querySearchAsync: _.debounce(async function(queryString, cb) {
      console.log(queryString);
      // let res = [];
      // this.initData.forEach(d => {
      //   if (d.name.includes(queryString)) {
      //     res.push({
      //       value: d.name
      //     });
      //   }
      // });
      let res = this.initData.reduce((pre, d) => {
        if (d.name.includes(queryString)) {
          pre.push({
            value: d.name
          });
        }
        return pre;
      }, []);
      console.log(res);
      cb(res);
    }, 50),
    handleSelect() {},
    async getHotCities() {
      let {
        data: { hots }
      } = await Axios.get("/geo/getHotCity");
      // console.log(hots);
      this.hotCities = hots;
    },
    async getCities() {
      let {
        data: { province }
      } = await Axios.get("/geo/province");
      this.provinces = province;

      let {
        data: { city }
      } = await Axios.get("/geo/getCity");
      city.forEach(d => {
        if (!this.cities[d.province]) {
          this.cities[d.province] = [];
        }
        this.cities[d.province].push(d);
      });
      city.forEach(d => {
        let f = pinYin.getFullChars(d.name).charAt(0)
        if(!this.pinYinCities[f]){
          this.pinYinCities[f] = []
        }
        this.pinYinCities[f].push(d)
      });
      console.log(this.pinYinCities);
      this.initData = city;
    }
  }
};
</script>

<style lang='scss' scoped>
.el-row {
  padding-bottom: 20px;
  &:after {
    content: "";
    height: 1px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding-top: 20px;
  }
}

.changCityTop {
  background: white;
}
.selectH3 {
  display: inline-block;
}
.m-hcity {
  dl {
    display: flex;
    dt {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    dd {
      margin: 0 20px;
      color: #666;
      line-height: 22px;
      display: inline-block;
    }
  }
}
.page-changeCity {
  box-sizing: border-box;
  margin: 20px auto 0;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
  .province {
    cursor: pointer;
    border-radius: 4px;
    margin: 0 10px 0 20px;
  .city {
    display: inline-block;
    cursor: not-allowed;
    border-radius: 4px;
    margin: 0 20px 0 10px;
  }
}
}
.m-category {
  display: flex;
  margin-bottom: 30px;
  dt {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  dd {
    display: inline-block;
    font-size: 15px;
    color: #666;
    margin: 0 6px;
    width: 24px;
    height: 24px;
    padding: 4px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
