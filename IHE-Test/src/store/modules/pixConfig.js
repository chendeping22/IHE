import Apis from '../../utils/apisPIX';

const state = {
  clientlogs: [],
  serverLogs: [],
  serviceAll: [],
  organizations: [],
  pixAdminIp: '',
  pixAdminPort: '',
  receiveApp: '',
  receiveFacility: '',
};

const getters = {
  allLogs: state => state.clientlogs,
  allServerLogs: state =>state.serverLogs,
  allService: state => state.serviceAll,
  organizations: state => state.organizations,
  serviceConfig: state => {
    let pixAdminIp = state.pixAdminIp;
    let pixAdminPort = state.pixAdminPort;
    let receiveApp = state.receiveApp;
    let receiveFacility = state.receiveFacility;
    return {
      pixAdminIp,
      pixAdminPort,
      receiveApp,
      receiveFacility,
    };
  },
};

const actions = {
  getServiceAll({
    commit
  }) {
    return new Promise((resolve, reject) => {
      Apis.ServiceConfig.queryAll()
        .then(res => {
          if (res.status === 200) {
            commit('setServiceAll', res.data);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getOrganizationAll({
    commit
  }) {
    return new Promise((resolve, reject) => {
      Apis.Organization.getAll()
        .then(res => {
          if (res.status === 200) {
            commit('setOrganizations', res.data);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getServerLogs({ commit }){
    return new Promise((resolve, reject) => {
      Apis.Server.printLog().then(res => {
        if (res.status === 200) {
          // console.log(typeof res.data === 'string' && res.data.trim() !== '')
           if(typeof res.data === 'string' && res.data.trim() !== ''){
             commit('setServerLogs', res.data);
           }
        }
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }
};

const mutations = {
  setLogs(state, log) {
    state.clientlogs.push(log);
  },
  clearLogs(state) {
    state.clientlogs.splice(0, state.clientlogs.length);
  },
  setServerLogs(state, log) {
    state.serverLogs.push(log);
  },
  clearServerLogs(state) {
    state.serverLogs.splice(0, state.serverLogs.length);
  },
  setServiceAll(state, serviceAll) {
    state.serviceAll = serviceAll;
  },
  setOrganizations(state, organizations) {
    state.organizations = organizations;
  },
  setPixAdminIp(state, pixAdminIp) {
    state.pixAdminIp = pixAdminIp.trim();
  },
  setPixAdminPort(state, pixAdminPort) {
    state.pixAdminPort = pixAdminPort.trim();
  },
  setReceiveApp(state, receiveApp) {
    state.receiveApp = receiveApp.trim();
  },
  setReceiveFacility(state, receiveFacility) {
    state.receiveFacility = receiveFacility.trim();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
