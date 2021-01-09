import https from "https";
const agent = new https.Agent({rejectUnauthorized: false});
const initState = () => ({
  message: "init"
})

export const state = initState()

export const mutations = {
  setMessage(state, message) {
    state.message = message
  },
  reset(state) {
    Object.assign(state, initState());
  }
}

export const actions = {
  async fetchMessage({commit}) {
    const message = await this.$axios.get("https://localhost:5001/api/home").then(({data})=>{ return data;});
    commit("setMessage", message);
  },
  async nuxtServerInit({commit, dispatch}) {
    // const message = await this.$axios.get("https://localhost:5001/api/home", {httpsAgent: agent})
    //   .then(({data}) => {
    //   return data;
    // });
    dispatch("fetchMessage");
    // console.log(message);
    // commit("setMessage", message);
    console.log("dispatch server");
    dispatch("tricks/fetchTricks");
  }
}
