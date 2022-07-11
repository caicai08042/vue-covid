<template>
  <div class="keep">
    <el-divider content-position="center">版本信息</el-divider>
    <div class="footer">
      <a target="_blank">v1.1.1</a>&nbsp;
      <a href="https://github.com/caicai08042/vue-covid" target="_blank"
        >Github地址</a
      >
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
  max-width: 800px;
  margin: 0 auto;
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
