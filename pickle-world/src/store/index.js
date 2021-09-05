import Vuex from "vuex";
import * as api from "../store/api";

const moduleA = {
  state: {
    characters: [],
    character: [],
    episode: [],
    loading: false,
    error: false,
  },
  mutations: {
    SET_LOADING_STATUS(state, payload) {
      state.loading = payload;
    },
    SET_CHARACTERS(state, payload) {
      state.characters = payload;
    },
    SET_CHARACTER(state, payload) {
      state.character = payload;
    },
    SET_EPISODE(state, payload) {
      state.episode = payload;
    },
  },
  actions: {
    async getAllChacters(context) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getAllChacters();
      context.commit("SET_LOADING_STATUS", false);
      context.commit("SET_CHARACTERS", result.data.data.characters.results);
    },
    async getChacterById(context, id) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getChacterById(id);
      context.commit("SET_LOADING_STATUS", false);
      context.commit("SET_CHARACTER", result.data.data.results);
    },
    async getEpisodeById(context, id) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getEpisodeById(id);
      context.commit("SET_LOADING_STATUS", false);
      context.commit("SET_EPISODE", result.data.data.results);
    },
  },
  getters: {
    filterByName: (state, name) => {
      return state.characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );
    },
  },
};

const store = new Vuex.Store({
  modules: {
    moduleA,
  },
});

export default store;
