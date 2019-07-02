
import axios from 'axios'
// import store from '../store'

// import cardManageListData from '../mock/cardManage.js'
// import data2 from '../mock/cardManagePage.js'
const back = axios.create() // 后台axios实例
const front = axios.create() // 前台axios实例

// back.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = 'dailu';
axios.defaults.headers.post['Content-Type'] = 'application/json'

// if (localStorage.getItem('jwt')) {
//   /* localStorage.getItem('jwt')是带引号的字符串
//     Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
//   */
//   back.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt').replace(/(^\")|(\"$)/g, '')
// }
// axios拦截请求
axios.interceptors.request.use = back.interceptors.request.use = front.interceptors.request.use

front.interceptors.request.use(config => {
  // store.dispatch('showProgress', 20)
  return config
}, err => {
  // store.dispatch('showProgress',100)
  return Promise.reject(err)
})

// axios拦截响应
front.interceptors.response.use(response => {
  // store.dispatch('showProgress', 100)
  return response
}, err => {
  // store.dispatch('showProgress', 100)
  return Promise.reject(err)
})

export default {
  // 注册
  // localReg (data) {
  //   return axios.post('/api/admin/reg', data)
  // },
  // // 登录
  // localLogin (data) {
  //   return axios.post('/api/admin/login', data)
  // },
  // // 获取卡列表{带分页获取}
  getTest (params) {
    return axios.get('/api/test/lists', params)
  },
  postTest (params) {
    return axios.post('/api/test/single', params)
  },
  async getCardManageList (params) {
    // const result = await axios.get('/api/cardManage/list', params)
    return axios.get('/api/cardManage/list', params)
  },
  async delCardManageList (params) {
    // const result = await axios.get('/api/cardManage/list', params)
    return axios.get('/api/cardManage/:id', params)
  },
  async EditCardManageList (params) {
    // const result = await axios.get('/api/cardManage/list', params)
    return axios.get('/api/cardManage/:id', params)
  },
  getCreatCard (params) {
    return axios.get('/api/createCard/list', params)
  },
  getAgentList (params) {
    return axios.post('/api/agent/getAll', params)
  }
}
