import { createStore } from "vuex";
const store = createStore({
state(){
  return{
    userToken: localStorage.getItem("user_token") || "",
  }

},
mutations: {
  setCurrentUserData(state, payload) {
    if (payload.token) {
      state.userToken = payload.token;
      localStorage.setItem("user_token", payload.token);
    }
  },
},
getters:{
  token(state) {
    return state.userToken;
  },
  isLoggedIn(state) {
    return !!state.userToken;
  },
}

});
export default store;
