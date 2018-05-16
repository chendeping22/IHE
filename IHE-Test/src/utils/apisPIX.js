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
      patIntoHospital: this.post.bind( this,`${baseUrl}/client/patIntoHospital`),
      patRegister: this.post.bind(this, `${baseUrl}/client/patRegister`),
      orderSubmit: this.post.bind(this, `${baseUrl}/client/orderSubmit`),
    };
    this.ServiceConfig = {
      queryAll: this.get.bind(this, `${baseUrl}/serviceConfig/queryAll`),
    };
    this.Organization = {
      getAll: this.get.bind(this, `${baseUrl}/organization/getAll`)
    }
    this.BasicInfo = {
      localSearchPatInfo:this.get.bind(this, `${baseUrl}/basicInfo/localSearchPatInfo`),
      localUpdate:this.post.bind(this, `${baseUrl}/basicInfo/localUpdate`),
      submitUpdate:this.post.bind(this, `${baseUrl}/basicInfo/submitUpdate`),
      localCombine:this.post.bind(this, `${baseUrl}/basicInfo/localCombine`),
      submitCombine:this.post.bind(this, `${baseUrl}/basicInfo/submitCombine`),
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
            store.commit('setLogs',response)
            resolve(response);
          },
          err => {
            store.commit('setLogs',err)
            reject(err);
          },
        )
        .catch(err => {
          store.commit('setLogs',err)
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

  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(
          response => {
            store.commit('setLogs',response)
            resolve(response);
          },
          err => {
            store.commit('setLogs',err)
            reject(err);
          },
        )
        .catch(err => {
          store.commit('setLogs',err)
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
