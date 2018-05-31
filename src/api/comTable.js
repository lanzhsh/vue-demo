import axios from 'axios';

//axios的get请求
export const getComAjax= (url,getAjaxData,tableData)=> {
  return axios.get(url, {
    params: {
      'getAjaxDataObj1': getAjaxData.obj1,//obj1为getAjaxData的一个属性
      'getAjaxDataObj2': getAjaxData.obj2
    }
}).then(data=>{ 
  //这里特别坑爹,axios读取本地的json转化为字符串了,所以要通过eval转化为对象
    tableData(eval('('+data.data+')').tabData);
      //成功返回
  }).catch(err=>{
      //错误返回
    tableData(err);      
  })
}

//axios的post请求
export const postComAjax= (url,postAjaxData)=> {
  return axios.post(url, {
      'postAjaxDataObj1': postAjaxData.obj1,//obj1为postAjaxData的一个属性
      'postAjaxDataObj2': postAjaxData.obj2
  }).then(data=>{
      //成功返回
  }).catch(err=>{
      //错误返回
  })
}