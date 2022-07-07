<template>
  <div class="midHeight">
    <div class="container">
      <div class="title">
        <i></i>
        <span>中高风险地区</span>
      </div>
    </div>
    <el-card shadow="always">
      <el-tabs v-model="activeName" stretch class="tabs">
        <el-tab-pane name="mid">
          <span slot="label"><i class="el-icon-info"></i> 中风险地区</span>
          <span style="font-size: 16px;color:red">现存：{{midL}}个</span>
          <div>
            <el-table :data="mid" style="width: 100%" height="300">
              <el-table-column prop="title" label="地区" width="auto">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane name="height">
          <span slot="label"><i class="el-icon-warning"></i> 高风险地区</span>
          <span style="font-size: 16px;color:red">现存：{{highL}}个</span>
          <div>
            <el-table :data="high" style="width: 100%" height="300">
              <el-table-column prop="title" label="地区" width="auto">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["midHeights",'highL','midL'],
  name: "midHeight",
  data() {
    return {
      activeName: "mid",
      mid: [],
      high: [],
    };
  },
  watch: {
    midHeights() {
      var highArr = this.midHeights.high;
      var midArr = this.midHeights.mid;
      var a = ["title"];
      let b = [];
      let c = [];
      for (let i = 0; i < highArr.length; i++) {
        let tableObj = {};
        for (let j = 0; j < a.length; j++) {
          tableObj[a[j]] = highArr[i];
        }
        b.push(tableObj);
      }
      for (let o = 0; o < midArr.length; o++) {
        let tableObjs = {};
        for (let l = 0; l < a.length; l++) {
          tableObjs[a[l]] = midArr[o];
        }
        c.push(tableObjs);
      }
      this.mid = c;
      this.high = b;
      //console.log(this.mid);
    },
  },
};
</script>

<style scoped>
.container /deep/ div {
  /* margin-left: 8px; */
  font-size: 0.16rem;
}
.midHeight {
  padding: 10px;
  background: #fff;
  /* border-bottom: 1px solid #f1f1f1; */
}
.title {
  padding: 10px;
  font-size: 0.16rem;
}

.title i {
  display: inline-block;
  width: 0.1rem;
  height: 0.16rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background: #d85933;
  border-radius: 0.04rem;
}
.title span {
  margin-left: 10px;
}
::v-deep .el-tabs__nav-scroll {
  width: 100% !important;
  margin: 0 auto !important;
}
.tabs /deep/ .el-tabs__item {
  font-size: 16px;
}
</style>
