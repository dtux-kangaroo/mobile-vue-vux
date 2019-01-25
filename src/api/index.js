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
