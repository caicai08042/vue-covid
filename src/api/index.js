import axios from "../utils/request";

const base = {
    baseUrl: "http://api.tianapi.com",
    suffix: "/ncov/index"
}
const wbhot = {
    baseUrl: "http://api.tianapi.com",
    suffix: "/weibohot/index"
}
const api = {
    // 疫情数据
    getNcov(params) {
        return axios.get(base.baseUrl + base.suffix, {
            params
        })
    },
    getWb(params) {
        return axios.get(wbhot.baseUrl + wbhot.suffix,{
            params
        })
    }
}

export default api;