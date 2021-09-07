<template>
  <div class="hero pt-2 mt-2">
    <div v-if="!characters.loading" class="hero-body d-flex columns">
      <h1 class="column col-12">{{ character.name }}</h1>
      <div class="detail d-flex column col-12 hero pt-2">
        <img :src="character.image" :alt="character.name" />
        <div class="description">
          <p>
            {{ character.name }} is {{ character.species }} who lives on
            {{ character.location?.name }}, a
            {{ character.location?.type }} with
            {{ character.location?.residents.length }} habitants, at
            {{ character.location?.dimension }}.
          </p>
          <p>
            Originaly this character is from {{ character.origin?.name }}, a
            {{ character.origin?.type }} with
            {{ character.origin?.residents.length }} habitants.
          </p>
          <p>Your current status is {{ character.status }}.</p>
        </div>
        <p>
          Until now {{ character.name }} has appears in
          {{ character.episode?.length }} episodes.
        </p>
        <p />
        <div class="text-center">
          <h3>List of episodes from which {{ character.name }} has appears:</h3>
          <div class="columns list">
            <div
              v-for="epi in character.episode"
              class="colums text-center col-3 ml-2 pl-2 charact"
              :key="epi.id"
            >
              <div class="columns list">
                <router-link :to="`/episodes/${epi.id}`">
                  <p>{{ epi.id }} - {{ epi.episode }} - {{ epi.name }}</p>
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
  name: "CharacterDetail",
  data() {
    return {
      id: "",
      query: "",
      character: "",
    };
  },
  methods: {
    ...mapActions(["getChacterById"]),
  },
  computed: {
    ...mapState(["characters"]),
  },
  created() {
    const id = this.$route.params.id;
    this.id = id;
    this.getChacterById(this.id);
  },
  updated() {
    this.character = this.characters.character;
  },
};
</script>
<style scoped>
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
