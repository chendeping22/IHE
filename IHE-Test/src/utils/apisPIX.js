import axios from 'axios';
import store from '../store'
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = '';
// }

class Apis {
  constructor() {
    const baseUrl = '/apisPIX';
    this.Client = {
      savePatLocal: this.post.bind(this, `${baseUrl}/client/savePatLocal`),
      queryPatInfo: this.get.bind(this, `${baseUrl}/client/queryPatInfo`),
      patIntoHospital: this.post.bind(this, `${baseUrl}/client/patIntoHospital`),
      patRegister: this.post.bind(this, `${baseUrl}/client/patRegister`),
      orderSubmit: this.post.bind(this, `${baseUrl}/client/orderSubmit`),
    };
    this.ServiceConfig = {
      queryAll: this.get.bind(this, `${baseUrl}/serviceConfig/queryAll`),
      insert: this.post.bind(this, `${baseUrl}/serviceConfig/insert`),
      delete: this.post.bind(this, `${baseUrl}/serviceConfig/delete`),
      update: this.post.bind(this, `${baseUrl}/serviceConfig/update`)

    };
    this.Organization = {
      getAll: this.get.bind(this, `${baseUrl}/organization/getAll`),
      add: this.post.bind(this, `${baseUrl}/organization/add`),
      delete: this.post.bind(this,`${baseUrl}/organization/delete`),
      update: this.post.bind(this, `${baseUrl}/organization/update`)
    };
    this.match = {
      query: this.get.bind(this, `${baseUrl}/match/query`),
      update: this.post.bind(this, `${baseUrl}/match/update`)
    };
    this.BasicInfo = {
      localSearchPatInfo: this.get.bind(this, `${baseUrl}/basicInfo/localSearchPatInfo`),
      localUpdate: this.post.bind(this, `${baseUrl}/basicInfo/localUpdate`),
      submitUpdate: this.post.bind(this, `${baseUrl}/basicInfo/submitUpdate`),
      localCombine: this.post.bind(this, `${baseUrl}/basicInfo/localCombine`),
      submitCombine: this.post.bind(this, `${baseUrl}/basicInfo/submitCombine`),
      getIdList: this.post.bind(this, `${baseUrl}/basicInfo/getIdList`),
      getPatientinfo: this.get.bind(this, `${baseUrl}/basicInfo/getPatientinfo`)
    },
    this.Server = {
      printLog: this.post.bind(this, `${baseUrl}/server/printLog`),
    } 
  }

  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then(
          response => {
            if(response.data.log !== undefined){
              store.commit('setLogs', response.data.log)
            }
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(err => {
          reject(err);
        });
    });
  }

  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(
          response => {
            console.log(response.data.log,response.data.log !== undefined)
            if(response.data.log !== undefined){
              store.commit('setLogs', response.data.log)
            }
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(err => {
          reject(err);
        });
    });
  }

  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, {
          params: params,
        })
        .then(
          response => {
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(err => {
          reject(err);
        });
    });
  }

  put(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params)
        .then(
          response => {
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default new Apis();
