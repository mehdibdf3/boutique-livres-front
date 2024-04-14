import axios from 'axios';
import router from '../router';

const state = {
  userToken: null,
  userRole: null
};

const mutations = {
  SET_USER(state, { token, role }) {
    state.userToken = token;
    state.userRole = role;
  },
  CLEAR_USER(state) {
    state.userToken = null;
    state.userRole = null;
  }
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      commit('SET_USER', { token: response.data.token, role: response.data.role });
      if (response.data.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Error on login', error);
    }
  },
  logout({ commit }) {
    commit('CLEAR_USER');
    router.push('/login');
  }
};

const getters = {
  isAuthenticated: state => !!state.userToken,
  isAdmin: state => state.userRole === 'admin'
};

export default {
  state,
  mutations,
  actions,
  getters
};
