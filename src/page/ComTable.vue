<template>
<div>
  <div class="operation">
    <el-button type="primary" @click="addData">新增</el-button><el-button type="primary" @click="editData">修改</el-button>
  </div>
    <el-table
      :data="comData"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="totalItems">
    </el-pagination>
  </div>
  
  <!-- 新增和修改 -->
  <addTable :addFlag="addFlag" :editTableData="editTableData" @addFather="addFather"></addTable>
  </div>
  </template>

  <style lang="scss" scoped>
  .operation{
    height:40px;
    margin-bottom:20px;
    button{
      float:left;
    }
  }
  </style>
  

  <script>
import { mapGetters, mapActions } from "vuex";
import addTable from '@/components/addTable';
export default {
  components:{addTable},
  data(){
    return {
      currentPage:1,
      pageSize:4,
      totalItems:1,
      comTable:[],
      comData:[],
      addFlag:{flag:false},
      multipleSelection: [],
      editTableData:''
    }
  },
  computed: mapGetters({
    tableData: "allTableData",
  }),
  watch:{
    tableData(val){
      this.comTable=val;
      this.comData=val;
      this.totalItems=val.length;
    }
  },
  mounted() {
    this.getAllData();
  },
  methods:{
    ...mapActions([
    'getAllData'
    ]),
    //前端分页
    handleSizeChange(val){
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(val){
      this.currentPage = val;
      this.currentChangePage(this.comTable)
    },
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.comData = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.comData.push(list[from]);
        }
      }
    },
    //新增和修改
    addData(){
      this.addFlag.flag=true;
    },
    handleSelectionChange(val){
      this.multipleSelection=val;
    },
    editData(){
      if(this.multipleSelection.length!==1){
        this.$message.warning('修改请选择一条数据');
        return;
      };
      this.addFlag.flag=true;
      this.editTableData=this.multipleSelection;
    },
    //新增和修改传回值
    addFather(data){
      console.log(data)
      this.comData=this.comData.push(data);
      this.totalItems=this.comData.length;
      this.currentPage=1;
      this.pageSize=4;
    }
  }
};
</script>
