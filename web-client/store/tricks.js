// const initState = () => ({
//   tricks: []
// })

export const state = ()=>({
  tricks: []
});

export const mutations = {
  setTricks(state, tricks){
    console.log("setTrick Mutations");
    state.tricks = tricks;
  },
  reset(state){
    state.tricks = [];
    // Object.assign(state, initState());
  }
}

export const actions = {
  async fetchTricks({commit}){
    console.log("fetched");
    const tricks = await this.$axios.get("http://localhost:5000/api/tricks");
    console.log(tricks.data);
    commit("setTricks", tricks.data);
  },
  async createTrick({commit, dispatch}, {trick}){
    await this.$axios.post("http://localhost:5000/api/tricks",trick);
    await dispatch('fetchTricks');
  }
}
