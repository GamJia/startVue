import AuthService from '../services/auth.service';
const memberEntity = JSON.parse(localStorage.getItem('memberEntity'));

const initialState = memberEntity
  ? { status: { loggedIn: true }, memberEntity }
  : { status: { loggedIn: false }, memberEntity: null };

export const member = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, memberEntity) {
      return AuthService.login(memberEntity).then(
        memberEntity => {
          commit('loginSuccess', memberEntity);
          return Promise.resolve(memberEntity);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    signUp({ commit }, memberEntity) {
      return AuthService.signUp(memberEntity).then(
        response => {
          commit('signUpSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('signUpFailure');
          return Promise.reject(error);
        }
      );
    },    

    refreshToken({ commit }, accessToken) {
      commit('refreshToken', accessToken);
    }
  },
  mutations: {
    loginSuccess(state, memberEntity) {
      state.status.loggedIn = true;
      state.memberEntity = memberEntity;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.memberEntity = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.memberEntity = null;
    },
    signUpSuccess(state) {
      state.status.loggedIn = false;
    },
    signUpFailure(state) {
      state.status.loggedIn = false;
    },
    
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.memberEntity = { ...state.memberEntity, accessToken: accessToken };
    }
  }
};
