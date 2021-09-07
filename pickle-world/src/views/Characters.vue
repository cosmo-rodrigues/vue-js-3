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
    <div class="hero-body container">
      <h1>List of characters</h1>
      <div v-if="characters.loading">
        <CharacterSkeletor />
      </div>
      <div class="columns d-flex">
        <div v-if="characters.loading"></div>
        <div
          v-else
          class="card column col-3 d-flex"
          :key="character.id"
          v-for="character in filterSearch"
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CharacterSkeletor from "../components/CharacterSkeletor.vue";

export default {
  name: "Character",
  components: {
    CharacterSkeletor,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["getAllChacters"]),
  },
  computed: {
    ...mapState(["characters"]),
    filterSearch() {
      return this.characters.characters.filter((characters) => {
        return characters?.name
          ?.toLowerCase()
          .includes(this.query.toLowerCase());
      });
    },
  },
  mounted() {
    this.getAllChacters();
  },
};
</script>
