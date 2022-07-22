import axios from 'axios'
import {Toast} from 'vant'

axios.interceptors.response.use(
  (response) => {
    if (response.data.status !== 10000) {
      response.data.data = response.data.msg;
    }
    return response;
  }, (error) => {
    return Promise.reject(error);
  }
);

export default async ({url = '', data = '', method = '', type = ''}) => {
  const qs = require('qs');
  const request = {
    method: method,
    url: url,
    headers: {
      token: localStorage.token || null
    }
  }
  if (method === 'post' && type !== 'json') {
    request.data = qs.parse(data)
    request.headers['Content-Type'] = 'application/json'
  } else if (method === 'post' && type === 'json') {
    request.data = qs.stringify(data, {allowDots: true})
    request.data = JSON.stringify(data)
    request.headers['Content-Type'] = 'application/json'
  } else if (method === 'get') {
    if (navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf("rv:11.0") > -1) {
      // data['_t'] = generateMixed(16)
    }
    request.params = qs.parse(data)
  }
  return new Promise((resolve, reject) => {
    axios(request).then((resp) => {
      resolve(resp)
    }).catch((error) => {
      Toast.fail('网络错误')
      reject(error)
    })
  })
}
