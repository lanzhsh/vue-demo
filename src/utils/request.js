import axios from 'axios';
const baseUrl=process.env.API_ROOT;
function request({
  url,
  method = 'POST',
  data = {},
  header,
  ...param
}){
  const token=sessionStorage.getItem("token")||'';
  return new Promise((resolve, reject) => {
  axios({
    baseURL:baseUrl,
    url,
    method,
    headers: {'i-manage-token': token,'X-Requested-With': 'XMLHttpRequest','withCredentials': true,},
    data,
    timeOut:10000,//配置超时10s
    ...param
    }).then((res=>{
      resolve(res);
    })
    )
  })
}

export default request;
