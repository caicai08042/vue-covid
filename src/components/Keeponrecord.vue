<template>
  <div class="keep">
    <el-divider content-position="center">备案信息</el-divider>
    <div class="footer">
      <a href="https://beian.miit.gov.cn" target="_blank">闽ICP备2021009795号-2</a>&nbsp;
      <a href="https://github.com/caicai08042/vue-covid" target="_blank">Github地址</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Keeponrecord",
};
</script>
<style scoped>
.keep {
  padding: 10px;
  background: #fff;
}
.footer {
  text-align: center;
  font-size: 10px;
  text-decoration: none;
  margin-bottom: 10px;
}
.footer /deep/ a {
    color: rgb(33, 125, 230);
}
</style>
