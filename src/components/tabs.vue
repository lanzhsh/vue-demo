<template>
<div class="tabs">
  
<el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSel" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
  <div @click="changeTabs" :class="['open-tabs',{'close-tabs':closeFlag}]">
    <i class="el-icon-caret-right"></i>
    <span class="tabs-content">展/收</span>
  </div>
  <div v-for="(item,index) in tabArr" :key="index">
  <el-submenu :index="String(index+1)" v-if="item.childFlag">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{item.name}}</span>
    </template>
    <el-menu-item-group>
      <el-menu-item :index="itemChild.index" v-for="(itemChild,indexChild) in item.tabChild" :key="indexChild">{{itemChild.content}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="String(index+1)" v-else>
    <i class="el-icon-document"></i>
    <span slot="title">{{item.name}}</span>
  </el-menu-item>
  </div>
</el-menu>
</div>
</template>

<style lang="scss">
.el-menu-vertical-demo {
  height: 600px;
  width:54px;
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.tabs {
  .open-tabs {
    width: 180px;
    height: 56px;
    line-height: 56px;
    text-align: left;
    background-color: #545c64;
    color: white;
    padding-left: 20px;
    cursor: pointer;
  }
  .close-tabs {
    width: 34px;
  }
  .tabs-content {
    margin-left: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      closeFlag: false,
      tabArr:[
        {name:'数据可视化',childFlag:true,tabChild:[{index:'1-1',content:'普通echarts',routerData:'comEcharts'},{index:'1-2',content:'特殊echarts',routerData:'speEcharts'},{index:'1-3',content:'地图',routerData:'map'}]},
        {name:'表格',childFlag:true,tabChild:[{index:'2-1',content:'普通表格',routerData:'comTable'},{index:'2-2',content:'可编辑表格',routerData:'speTable'},{index:'2-3',content:'表格合并',routerData:'mergeTable'}]},
        {name:'富文本编辑器',childFlag:false,routerData:'textEditor'}
        ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    handleSel(key,keyPath){
      if(keyPath=='String(index+1)'){
        this.$router.push({path:'/textEditor'})
      }else{
        this.tabArr[keyPath[0]-1].tabChild.forEach(item=>{
          if(item.index==keyPath[1]) this.$router.push({path:'/'+item.routerData});
        })
      }
    },
    changeTabs() {
      this.isCollapse ? (this.closeFlag = false) : (this.closeFlag = true);
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>