<template>
  <div class="num">
    <el-row style="height: 34px">
      <el-col :span="24">
        <div class="title">
          <i></i>
          <span>全国数据统计时间截至</span>
          <span v-if="loading">
            {{ formatDate(covid.modifyTime) }}
          </span>
          <span v-if="!loading">
            <el-skeleton-item variant="p" style="width: 130px" animated />
          </span>
        </div>
      </el-col>
    </el-row>

    <el-card shadow="always">
      <el-row :gutter="10">
        <el-col :span="8" class="info">
          <span>现存确诊</span><br />
          <strong style="color: HotPink" v-if="loading">{{
            covid.currentConfirmedCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item variant="p" style="width: 80px; height: 18px"
          /></strong>
          <br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.currentConfirmedIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
        <el-col :span="8" class="info">
          <span>累计确诊</span><br />
          <strong style="color: Crimson" v-if="loading">{{
            covid.confirmedCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item
              variant="p"
              style="width: 80px; height: 18px" /></strong
          ><br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.confirmedIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
        <el-col :span="8" class="info">
          <span>累计境外输入</span><br />
          <strong style="color: MediumBlue" v-if="loading">{{
            covid.suspectedCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item
              variant="p"
              style="width: 80px; height: 18px" /></strong
          ><br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.yesterdaySuspectedCountIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
        <el-col :span="8" class="info">
          <span>累计治愈</span><br />
          <strong style="color: MediumSeaGreen" v-if="loading">{{
            covid.curedCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item
              variant="p"
              style="width: 80px; height: 18px" /></strong
          ><br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.curedIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
        <el-col :span="8" class="info">
          <span>累计死亡</span><br />
          <strong style="color: Maroon" v-if="loading">{{
            covid.deadCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item
              variant="p"
              style="width: 80px; height: 18px" /></strong
          ><br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.deadIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
        <el-col :span="8" class="info">
          <span>现存无症状</span><br />
          <strong style="color: OrangeRed" v-if="loading">{{
            covid.seriousCount
          }}</strong>
          <strong style="color: HotPink" v-if="!loading"
            ><el-skeleton-item
              variant="p"
              style="width: 80px; height: 18px" /></strong
          ><br />
          <p v-if="loading">
            较昨日<em>{{ numZore(covid.seriousIncr) }}</em>
          </p>
          <p v-if="!loading">
            较昨日<em
              ><el-skeleton-item variant="p" style="width: 45px; height: 10px"
            /></em>
          </p>
        </el-col>
      </el-row>
      <div style="margin: 10px 0 0 15px; color: rgb(170, 170, 170)">
        <span
          ><i class="el-icon-warning-outline"></i>
          数据来自第三方数据平台，可能与实际情况存在误差。</span
        >
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "CaseNum",
  props: {
    covid: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    formatDate(time) {
      var date = new Date(time);
      //console.log(date)
      var YY = date.getFullYear() + "-";
      var MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var DD =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "   ";
      var hh =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      return YY + MM + DD + hh + mm;
    },
    numZore(num) {
      if (num === 0) {
        return num;
      } else {
        return num > 0 ? "+" + num : "" + num;
      }
    },
  },
  mounted() {
    //console.log(this.numZore(-22))
    
  },
  watch: {
    covid() {
      this.loading = true;
    },
  },
};
</script>
<style scoped>
.num {
  padding: 10px;
  background-color: #fff;
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
  background: #30dddd;
  border-radius: 0.04rem;
  margin-left: 10px;
  vertical-align: top;
}
.title span {
  margin-left: 15px;
  font-size: 0.16rem;
  vertical-align: top;
}

.info {
  text-align: center;
  margin-top: 10px;
}
.info span {
  font-size: 16px;
}
.info p {
  color: rgb(148, 148, 148);
}
.info strong {
  font-size: 20px;
}
</style>
