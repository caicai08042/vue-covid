<template>
  <div class="wb">
    <el-row style="height: 34px">
      <el-col :span="24">
        <div class="title">
          <i></i>
          <span>微博实时热搜榜</span>
          <span
            ><a href="https://s.weibo.com/top/summary/" target="blank"
              >点击前往微博</a
            ></span
          >
        </div>
      </el-col>
    </el-row>
    <el-card shadow="always">
      <el-table
        :data="wbhotlist"
        style="width: 100%"
        height="550px"
        v-loading="loading"
        element-loading-text="努力加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 1)"
        class="tables"
      >
        <el-table-column type="index" width="50">
          <template slot-scope="scope">
            <i class="iclass" :class="getcls(scope)">{{ scope.$index + 1 }}</i>
          </template>
        </el-table-column>
        <el-table-column width="auto">
          <template slot-scope="scope">
            <span>{{ scope.row.hotword }}</span>
            <el-tag
              type="success"
              style="
                height: 24px;
                line-height: 24px;
                margin-left: 5px;
                padding: 0 5px;
              "
              >{{ scope.row.hotwordnum }}</el-tag
            >
            <el-tag
              type="danger"
              style="
                height: 24px;
                line-height: 24px;
                margin-left: 5px;
                padding: 0 5px;
              "
              v-if="scope.row.hottag"
              >{{ scope.row.hottag }}</el-tag
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["wbhotlist"],
  name: "Weibohot",
  data() {
    return {
      loading: true,
      one: true,
      two: true,
      three: true,
      four: true,
    };
  },
  watch: {
    wbhotlist() {
      this.loading = false;
    },
  },
  methods: {
    getcls(row) {
      if (row.$index === 0) {
        return { iclassone: this.one };
      } else if (row.$index === 1) {
        return { iclasstwo: this.one };
      } else if (row.$index === 2) {
        return { iclassthree: this.one };
      } else {
        return { iclassfour: this.four };
      }
    },
  },
};
</script>

<style scoped>
.wb {
  padding: 10px;
  background: #fff;
  max-width: 800px;
  margin: 0 auto;
}
.container /deep/ div {
  font-size: 0.16rem;
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
  background: rgb(255, 193, 59);
  border-radius: 0.04rem;
  margin-left: 10px;
  vertical-align: top;
}
.title span {
  margin-left: 15px;
  font-size: 0.16rem;
  vertical-align: top;
}
.title span a {
  float: right;
  font-size: 15px;
  color: #5570a1;
}
.iclassone {
  background-color: #db2222;
}
.iclasstwo {
  background-color: #d6601b;
}
.iclassthree {
  background-color: #d3d150;
}
.iclassfour {
  background-color: #b4c5ce;
}
.iclass {
  min-height: 20px;
  min-width: 20px;
  display: inline-block;
  line-height: 20px;
  text-align: center;
  border-radius: 8px 0 8px 0;
  color: #fff;
}
.tables /deep/ .el-table__header-wrapper {
  display: none;
}
</style>
