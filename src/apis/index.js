import ApiConfig from './config';
import fetch from './axios';

let Apis = {};
for (let key in ApiConfig) {
  let config_list = ApiConfig[key].split(/\s+/)
  let [method, url] = config_list
  method = method.toLocaleLowerCase()
  Apis[key] = async (data) => {
    try {
      return await fetch({url, method, data})
    } catch (error) {
      throw new Error('网络错误')
    }
  }
}

export default Apis;
