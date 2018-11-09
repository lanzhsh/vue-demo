<template>
  <table class="merge-table">
    <thead><th v-for="(item,index) in tableHead" :key="index">{{item}}</th></thead>
    <tbody>
      <tr v-for="(itemBody,indexBody) in tableBody" :key="indexBody"><td>{{itemBody.name}}</td><td>{{itemBody.sex}}</td><td>{{itemBody.age}}</td>
      <td><table><tr v-for="(itemDis,indexDis) in itemBody.disciplineArr" :key="indexDis">{{itemDis.discipline}}</tr></table></td>
      <td><table><tr v-for="(itemDis,indexDis) in itemBody.disciplineArr" :key="indexDis">{{itemDis.score}}</tr></table></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default{
    data(){
      return{
        tableHead:['姓名','性别','年龄','学科','分数'],
        tableBody:[{name:'曹操',sex:'女',age:'25岁',disciplineArr:[{discipline:'Javascript',score:'100分'},{discipline:'CSS',score:'100分'},{discipline:'html',score:'100分'},{discipline:'Java',score:'80分'}]},
        {name:'小乔',sex:'男',age:'25岁',disciplineArr:[{discipline:'Javascript',score:'80分'},{discipline:'CSS',score:'80分'},{discipline:'html',score:'80分'},{discipline:'Java',score:'90分'}]}]
      }
    }
  }
</script>

<style lang="scss" scoped>
.merge-table{
   width:100%;
   border:1px solid #dfe6ec;
   border-collapse: collapse;
   th{
    height:60px;
    border:1px solid #dfe6ec;
    background-color: #eef1f6;
  }
  td{
    border:1px solid #dfe6ec;
    text-align: center;
  }
  tr:hover{
    cursor: pointer;
    background-color: #eef1f6;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  tr {
    height: 30px;
    border-bottom: 1px solid #dfe6ec;
  }
  tr:last-child{
    border-bottom: none;
  }
  }
  .table-edit{
    color: #409EFF;
  }
}
</style>

