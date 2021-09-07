<template>
  <section class="navbar-section pt-2 search">
    <div class="input-inline">
      <input
        type="text"
        v-model="query"
        class="form-input"
        placeholder="Type to search"
      />
    </div>
  </section>
  <div class="hero pt-2">
    <div class="hero-body">
      <h1>Episodes</h1>
      <div v-if="episodes.loading">
        <EpisodeSkeletor />
      </div>
      <div class="columns d-flex">
        <div v-if="episodes.loading"></div>
        <div
          class="card column col-6 d-flex"
          v-for="episode in filterSearch"
          :key="episode.id"
          v-else
        >
          <div class="card-header">
            <div class="card-title text-ligth h5">{{ episode.name }}</div>
            <div class="card-subtitle text-success">{{ episode.episode }}</div>
            <div class="text-primary">Released at {{ episode.air_date }}</div>
          </div>
          <div class="card-footer d-flex">
            <button class="btn btn-primary">
              <router-link :to="`/episodes/${episode.id}`">
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
import EpisodeSkeletor from "../components/EpisodeSkeletor.vue";

export default {
  name: "Episodes",
  components: {
    EpisodeSkeletor,
  },
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
