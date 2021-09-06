<template>
  <div class="hero pt-2">
    <section class="navbar-section pt-2 search">
      <div class="input-group input-inline">
        <input
          type="text"
          v-model="query"
          class="form-input"
          placeholder="Type to search"
        />
      </div>
    </section>
    <div class="hero-body">
      <h1>Episodes</h1>
      <div v-if="episodes.loading" class="loading loading-lg"></div>
      <div class="columns d-flex">
        <div v-if="episodes.loading"></div>
        <div
          v-else
          class="card column col-3 d-flex"
          :key="episode.id"
          v-for="episode in filterSearch"
        >
          <div class="card-header">
            <div class="card-title h5">{{ episode.name }}</div>
            <div class="card-subtitle text-dark">{{ episode.episode }}</div>
            <div>Released at {{ episode.air_date }}</div>
          </div>
          <div class="card-footer d-flex">
            <button class="btn btn-primary">
              <router-link :to="`/characters/${episode.id}`">
                Details
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Episodes",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["getAllEpisodes"]),
  },
  computed: {
    ...mapState(["episodes"]),
    filterSearch() {
      return this.episodes.episodes.filter((episode) => {
        return episode?.name?.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  mounted() {
    this.getAllEpisodes();
  },
};
</script>
