<template>
    <div class="info">
        <p class="title">
            <i></i>
            病毒信息
        </p>
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
    props:{
        covidInfos:{
            type:Object,
            default:function(){
                return{};
            }
        }
    },
  name: 'CovidInfo',
}
</script>
<style scoped>
.info {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.title {
    font-size: 0.2rem;
}

.title i {
    display: inline-block;
    width: 0.1rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
    Border-radius:0.04rem;
}
.content {
    padding: 0.06rem 0.16rem;
}

.content p {
    font-size: 13px;
    margin: 5px 0;
}
</style>   
