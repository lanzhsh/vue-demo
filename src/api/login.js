import axios from 'axios';

//axios的post请求
export const loginPost= (url,data)=> {
  return axios.post(url,{
      userName:data.userName,
      password:data.password,
  })
}

//axios的get请求
export const checkcodeGet= (url,getAjaxData)=> {
  return axios.get(url, {
    params: {
      'getAjaxDataObj1': getAjaxData.obj1,//obj1为getAjaxData的一个属性
      'getAjaxDataObj2': getAjaxData.obj2
    }
}).then(data=>{ 
  //这里特别坑爹,axios读取本地的json转化为字符串了,所以要通过eval转化为对象
      //成功返回
  }).catch(err=>{
      //错误返回    
  })
}