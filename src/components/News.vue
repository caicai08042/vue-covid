<template>
  <div class="news">
    <el-row style="height: 34px">
      <el-col :span="24">
        <div class="title">
          <i></i>
          <span>疫情最新资讯</span>
        </div>
      </el-col>
    </el-row>
    <el-card
      shadow="always"
      v-loading="loading"
      element-loading-text="努力加载中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 1)"
      style="min-height: 290px"
    >
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
              style="text-decoration: none; color: blue"
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
    return {
      loading: true,
    };
  },
  watch: {
    newslist() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.news {
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
  background: rgb(53, 230, 121);
  border-radius: 0.04rem;
  margin-left: 10px;
  vertical-align: top;
}
.title span {
  margin-left: 15px;
  font-size: 0.16rem;
  vertical-align: top;
}
</style>
