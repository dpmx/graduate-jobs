import axios from "axios";

export const state = () => ({
  jobs: []
});

export const mutations = {
  setJobs(state, payload) {
    state.jobs = JSON.parse(JSON.stringify(payload));
  }
};

export const actions = {
  async fetchJobs({ commit }) {
    const res = await axios.get("https://api.thetraineeclub.com/job.json");
    if (res && res.status === 200 && res.data.jobs) {
      commit("setJobs", res.data.jobs);
    }
  }
};
