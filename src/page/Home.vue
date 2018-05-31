<template>
  <div class="home">
    <div class="top">vue-demo</div>
    <div class="tab">
      <tabs></tabs>
    </div>
    <div class="router-child">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  html,body{
    width:100%;
    height: 100%;
    margin:0;
  }
  .home{
    width:100%;
    height: 100%;
    .top{
      width:calc(100% - 20px);
      height:60px;
      padding-left:20px;
      font-size:30px;
      line-height: 60px;
      text-align:left;
      background-color:#545c64;
      color:white;
    }
    .tab{
      float: left;
      height:calc( 100% - 60px);
      // height:100%;
      .tabs{
        height:100%;
        .el-menu{
          height:100%;
        }
      }
    }
    .router-child{
      float: left;
      width:calc(100% - 241px);
      height:calc(100% - 100px);
      padding:40px 0 0 40px;
      overflow: auto;
    }
  }
</style>

<script>
import tabs from '@/components/tabs'
  export default {
    components:{tabs},
    data() {
      return{

      }
    }
  };
</script>