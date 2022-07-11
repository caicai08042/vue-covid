<template>
  <div class="info">
    <el-row style="height: 34px">
      <el-col :span="24">
        <div class="title">
          <i></i>
          <span>病毒概况</span>
        </div>
      </el-col>
    </el-row>
    <div class="content">
      <p>{{ covidInfos.note1 }}</p>
      <p>{{ covidInfos.note2 }}</p>
      <p>{{ covidInfos.note3 }}</p>
      <p>{{ covidInfos.note4 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    covidInfos: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  name: "CovidInfo",
};
</script>
<style scoped>
.info {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
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
  background: rgb(23, 72, 207);
  border-radius: 0.04rem;
  margin-left: 10px;
  vertical-align: top;
}
.title span {
  margin-left: 15px;
  font-size: 0.16rem;
  vertical-align: top;
}
.content {
  padding: 0.06rem 0.16rem;
}

.content p {
  font-size: 13px;
  margin: 5px 0;
}
</style>   
