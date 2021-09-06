import Vuex from "vuex";
import * as api from "../store/api";

const characters = {
  state: {
    characters: [],
    character: [],
    loading: false,
  },
  mutations: {
    SET_LOADING_STATUS(state, payload) {
      state.loading = payload;
    },
    GET_ALL_CHARACTERS(state, payload) {
      state.characters = payload;
    },
    GET_CHARACTER_BY_ID(state, payload) {
      state.character = payload;
    },
  },
  actions: {
    async getAllChacters(context) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getAllChacters();
      context.commit("SET_LOADING_STATUS", false);
      context.commit("GET_ALL_CHARACTERS", result.data.data.characters.results);
    },
    async getChacterById(context, id) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getChacterById(id);
      context.commit("SET_LOADING_STATUS", false);
      context.commit("GET_CHARACTER_BY_ID", result.data.data.character.results);
    },
  },
  getters: {
    filterByCharacterName: (state) => (name) => {
      return state.characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );
    },
  },
};

const episodes = {
  state: {
    episodes: [],
    episode: [],
    loading: false,
  },
  mutations: {
    SET_LOADING_STATUS(state, payload) {
      state.loading = payload;
    },
    GET_ALL_EPISODES(state, payload) {
      state.episodes = payload;
    },
    GET_EPISODE_BY_ID(state, payload) {
      state.episode = payload;
    },
  },
  actions: {
    async getAllEpisodes(context) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getAllEpisodes();
      context.commit("SET_LOADING_STATUS", false);
      context.commit(
        "GET_ALL_EPISODES",
        result.data.data.character.episodes.results
      );
    },
    async getEpisodeById(context, id) {
      context.commit("SET_LOADING_STATUS", true);
      const result = await api.getEpisodeById(id);
      context.commit("SET_LOADING_STATUS", false);
      context.commit(
        "GET_EPISODE_BY_ID",
        result.data.data.episodesByIds.results
      );
    },
  },
  getters: {
    filterByEpisodeName: (state) => (name) => {
      return state.episodes.filter((episode) =>
        episode.name.toLowerCase().includes(name.toLowerCase())
      );
    },
  },
};

const store = new Vuex.Store({
  modules: {
    episodes,
    characters,
  },
});

export default store;
