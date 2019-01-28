import http from '../utils/http'
import reqUrl from './reqUrl'
export default {
   getHomeData(param){
    return http.get(reqUrl.getHomeData, param);
  },
   getUserData(param){
    return http.get(reqUrl.getUserData, param);
  }
}
// import ReqUrl from './reqUrl';
// import http from '@/utils/http';
// const { keys }=Object;  // keys()  获得对象属性名数组
// function mapUrlObjToFuncObj(urlObj){ 
//   const API = {};
//    keys(urlObj).forEach((key)=>{
//     const item = urlObj[key]
//     API[key]=async function(params){
//       return await http[item.method](item.url,params)
//     }
//   });
//   return API;
// }
// function mapUrlObjToStrObj(urlObj){
//   const Url = {};
//   keys(urlObj).forEach((key)=>{
//     const item = urlObj[key]
//     Url[key]=item.url
//   });
//   return Url;
// }

// export const API = mapUrlObjToFuncObj(ReqUrl);
// export const URL = mapUrlObjToStrObj(ReqUrl);
