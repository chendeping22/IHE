import Apis from '../../utils/apisPIX';

const state = {
  logs:[],
  serviceAll: [],
  organizations: [],
  pixAdminIp: '',
  pixAdminPort: '',
  receiveApp: '',
  receiveFacility: '',
};

const getters = {
  getLogs: state => state.logs,
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
  getServiceAll({ commit }) {
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
  getOrganizationAll({ commit }) {
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
};

const mutations = {
  setLogs(state,log){
      state.logs.push(log);
  },  
  setServiceAll(state, serviceAll) {
    state.serviceAll = serviceAll;
  },
  setOrganizations(state, organizations) {
    state.organizations = organizations;
  },
  setPixAdminIp(state, pixAdminIp) {
    state.pixAdminIp = pixAdminIp;
  },
  setPixAdminPort(state, pixAdminPort) {
    state.pixAdminPort = pixAdminPort;
  },
  setReceiveApp(state, receiveApp) {
    state.receiveApp = receiveApp;
  },
  setReceiveFacility(state, receiveFacility) {
    state.receiveFacility = receiveFacility;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
