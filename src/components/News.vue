<template>
  <div class="news">
    <div class="container">
      <div class="title">
        <i></i>
        <span>疫情最新资讯</span>
      </div>
    </div>
    <el-card shadow="always">
      <el-collapse accordion>
        <el-collapse-item
          v-for="(item, index) in newslist"
          :key="index"
          :title="item.title"
          :name="item.index"
        >
          <div>{{ item.summary }}...</div>
          <div>
            <br />
            <a
              :href="item.sourceUrl"
              style="text-decoration: none;color:blue"
              target="_blank"
              >点击查看具体新闻</a
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <span>发布时间：{{ item.pubDateStr }}</span
            >&nbsp;&nbsp;&nbsp;
            <span>源自：{{ item.infoSource }}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["newslist"],
  name: "News",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container /deep/ div {
  /* margin-left: 8px; */
  font-size: 0.16rem;
}
.news {
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
  background: #70ffe0;
  border-radius: 0.04rem;
}
.title span {
  margin-left: 10px;
}
</style>
