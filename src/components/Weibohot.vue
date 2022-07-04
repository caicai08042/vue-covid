<template>
  <div class="wb">
      <div class="container">
      <div class="title">
        <i></i>
        <span>微博实时热搜榜</span>
        <span><a href="https://s.weibo.com/top/summary/" target="blank">点击前往微博</a></span>
      </div>
    </div>
    <el-card shadow="always">
        <!-- <el-row :gutter="10">
            <el-col :span="4"></el-col>
            <el-col :span="10">2</el-col>
            <el-col :span="10">3</el-col>
        </el-row> -->
        <el-table
      :data="wbhotlist"
      style="width: 100%"
      height="525px">
      <el-table-column
        type="index"
        label="排名"
        width="50">
      </el-table-column>
      <el-table-column
        prop="hotword"
        label="标题"
        width="auto">
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

    };
  },
};
</script>

<style scoped>
.wb {
  padding: 10px;
  background: #fff;
}
.container /deep/ div {
  /* margin-left: 8px; */
  font-size: 0.16rem;
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
  background: #a0e646;
  border-radius: 0.04rem;
}
.title span {
  margin-left: 10px;
}
.title span a{
    float: right;
    font-size: 15px;
    color: #5570a1;
}
</style>
