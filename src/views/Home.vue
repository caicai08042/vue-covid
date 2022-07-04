<template>
  <div class="home">
    <el-backtop :bottom="60"></el-backtop>
    <Header />
    <CovidInfo :covidInfos="covidInfos" />
    <CaseNum :covid="covid" />
    <News :newslist="newslist" />
    <MidHeight :midHeights="midHeights" :midL="midL" :highL="highL" />
    <Weibohot :wbhotlist="wbhotlist" />
    <Keeponrecord />
  </div>
</template>
<script>
import api from "../api";
import Header from "../components/Header";
import CovidInfo from "../components/CovidInfo";
import CaseNum from "../components/CaseNum";
import News from "../components/News";
import MidHeight from "../components/midHeight";
import Keeponrecord from "../components/Keeponrecord";
import Weibohot from "../components/Weibohot";

export default {
  name: "Home",
  components: {
    Header,
    CovidInfo,
    CaseNum,
    News,
    MidHeight,
    Keeponrecord,
    Weibohot,
  },
  data() {
    return {
      covidInfos: {
        note1:
          "新型冠状病毒肺炎（Corona Virus Disease 2019，COVID-19），简称“新冠肺炎”，世界卫生组织命名为“2019冠状病毒病”，是指2019新型冠状病毒感染导致的肺炎。",
        note2: "传染源：新冠肺炎的患者。无症状感染者也可能成为传染源。",
        note3:
          "传播途径：经呼吸道飞沫传播,以及密切接触传播,包括接触病毒污染的物品。此外,在相对密闭的环境中,长时间暴露于高浓度的气溶胶,也存在经气溶胶传播的可能。",
        note4:
          "防范措施：减少去拥挤人多的地方，不参加大型聚会，注意个人卫生，要保持室内空气流通，对外来物品擦拭消毒。",
      },
      covid: {},
      newslist: {},
      midHeights: {},
      highL: "",
      midL: "",
      wbhotlist: null,
    };
  },
  mounted() {
    //获取疫情数据
    api
      .getNcov({
        key: "720109106749f369a9573385fbf26500",
      })
      .then((res) => {
        //console.log(res.data);
        if (res.status === 200) {
          this.covid = res.data.newslist[0].desc;
          this.newslist = res.data.newslist[0].news;
          this.midHeights = res.data.newslist[0].riskarea;
          this.midL = res.data.newslist[0].desc.midDangerCount;
          this.highL = res.data.newslist[0].desc.highDangerCount;
          //console.log(this.midHeights);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //获取微博热搜榜
    api
      .getWb({
        key: "720109106749f369a9573385fbf26500",
      })
      .then((res) => {
        if (res.status === 200) {
          this.wbhotlist = res.data.newslist;
          //console.log(this.wbhotlist);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.home {
  height: 100%;
  overflow-x: hidden;
}
</style>
