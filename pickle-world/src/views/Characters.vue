<template>
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
  <div class="hero pt-2">
    <div class="hero-body container">
      <h1>Characters</h1>
      <div v-if="characters.loading">
        <CharacterSkeletor />
      </div>
      <div class="columns d-flex">
        <div v-if="characters.loading"></div>
        <div
          v-else
          v-for="character in filterSearch"
          class="card column col-6 d-flex"
          :key="character.id"
        >
          <div class="card-image text-center">
            <img
              width="350"
              :src="character.image"
              class="img-responsive mt-1"
            />
          </div>
          <div class="card-header">
            <div class="card-title text-light h5">{{ character.name }}</div>
            <div class="card-subtitle text-success">
              {{ character.species }}
            </div>
          </div>
          <div class="card-footer d-flex">
            <button class="btn btn-primary">
              <router-link :to="`/characters/${character.id}`">
                Details
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination class="text-center" :info="info" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CharacterSkeletor from "../components/CharacterSkeletor.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Character",
  components: {
    Pagination,
    CharacterSkeletor,
  },
  data() {
    return {
      info: "",
      query: "",
    };
  },
  methods: {
    ...mapActions(["getAllChacters"]),
  },
  computed: {
    ...mapState(["characters"]),
    filterSearch() {
      return this.characters.characters?.results?.filter((characters) => {
        return characters?.name
          ?.toLowerCase()
          .includes(this.query.toLowerCase());
      });
    },
  },
  mounted() {
    this.getAllChacters();
  },
  updated() {
    this.info = this.characters.characters?.info;
  },
};
</script>
