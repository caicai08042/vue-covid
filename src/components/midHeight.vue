<template>
  <div class="midHeight">
    <el-row style="height: 34px">
      <el-col :span="24">
        <div class="title">
          <i></i>
          <span>中高风险地区概况</span>
        </div>
      </el-col>
    </el-row>
    <el-card shadow="always">
      <el-tabs v-model="activeName" stretch class="tabs">
        <el-tab-pane name="mid">
          <span slot="label"
            ><i class="el-icon-info"></i> 中风险地区
            <el-tag
              style="
                height: 24px;
                line-height: 24px;
                margin-left: 5px;
                padding: 0 5px;
              "
              type="warning"
              ><span v-if="mh">{{ midL }}</span
              ><span v-if="!mh">???</span></el-tag
            ></span
          >
          <div
            v-loading="loading"
            element-loading-text="努力加载中..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 1)"
            style="min-height: 290px"
          >
            <el-table
              :data="mid"
              style="width: 100%"
              height="300"
              v-if="activeName === 'mid'"
            >
              <el-table-column prop="title" label="地区" width="auto">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane name="height">
          <span slot="label"
            ><i class="el-icon-warning"></i> 高风险地区
            <el-tag
              style="
                height: 24px;
                line-height: 24px;
                margin-left: 5px;
                padding: 0 5px;
              "
              ><span v-if="mh">{{ highL }}</span
              ><span v-if="!mh">???</span></el-tag
            ></span
          >

          <div
            v-loading="loading"
            element-loading-text="努力加载中..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 1)"
            style="min-height: 290px"
          >
            <el-table
              :data="high"
              style="width: 100%"
              height="300"
              v-if="activeName === 'height'"
            >
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
  props: ["midHeights", "highL", "midL"],
  name: "midHeight",
  data() {
    return {
      activeName: "mid",
      mid: [],
      high: [],
      loading: true,
      mh: false,
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
      this.loading = false;
      this.mh = true;
    },
  },
};
</script>

<style scoped>
.midHeight {
  padding: 10px;
  background: #fff;

  max-width: 800px;
  margin: 0 auto;
}
.title {
  align-items: center;
  justify-content: space-between;
  padding: 0.08rem 0 0.07rem;
  line-height: 0.16rem;
  display: inline-table;
}
.title i {
  display: inline-block;
  width: 0.1rem;
  height: 0.17rem;

  vertical-align: middle;
  background: rgb(218, 42, 71);
  border-radius: 0.04rem;
  margin-left: 10px;
  vertical-align: top;
}
.title span {
  margin-left: 15px;
  font-size: 0.16rem;
  vertical-align: top;
}
::v-deep .el-tabs__nav-scroll {
  width: 100% !important;
  margin: 0 auto !important;
}
.tabs /deep/ .el-tabs__item {
  font-size: 16px;
}
</style>
