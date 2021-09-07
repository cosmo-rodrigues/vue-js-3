<template>
  <div class="hero pt-2 mt-2">
    <div v-if="!episodes.loading" class="hero-body d-flex columns">
      <h1 class="column col-12">{{ episode.name }}</h1>
      <div class="detail d-flex column col-12 hero pt-2">
        <div class="description ml-2 pl-2">
          <p>
            The {{ episode.name }} episode was relesed at
            {{ episode.air_date }} on Adult Swim Channel.
          </p>
          <p>
            In this episode we can meet
            {{ episode.characters?.length }} characters
          </p>
          <p>
            This is the {{ episode.id }}th episode from {{ episode.episode }}
          </p>
        </div>
        <div class="text-center">
          <h3>List of characters in this episode:</h3>
          <div class="columns list">
            <div
              v-for="charact in episode.characters"
              class="colums col-3 ml-2 pl-2 charact"
              :key="charact.id"
            >
              <div class="columns list">
                <router-link :to="`/characters/${charact.id}`">
                  <figure class="avatar avatar-xl">
                    <img :src="charact.image" :alt="charact.name" />
                  </figure>
                  <p>{{ charact.name }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "EpisodeDetail",
  data() {
    return {
      id: "",
      query: "",
      episode: "",
    };
  },
  methods: {
    ...mapActions(["getEpisodeById"]),
  },
  computed: {
    ...mapState(["episodes"]),
  },
  created() {
    const id = this.$route.params.id;
    this.id = id;
    this.getEpisodeById(this.id);
  },
  updated() {
    this.episode = this.episodes.episode;
  },
};
</script>
<style scoped>
.charact:hover {
  box-shadow: -9px 5px 15px 9px #2fbd03 !important;
  cursor: pointer;
  margin: 2px !important;
  -webkit-box-shadow: -9px 5px 15px 9px #2fbd03;
}
.detail {
  align-items: center;
  background-color: #232c3b !important;
  border: 8px solid rgba(0, 0, 0, 0.38);
  border-radius: 20px 0px 30px 0px;
  flex-flow: wrap !important;
  justify-content: space-around;
  padding: 5px;
  max-width: 70%;
}
</style>
