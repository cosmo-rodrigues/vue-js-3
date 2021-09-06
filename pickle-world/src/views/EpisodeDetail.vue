<template>
  <div class="hero pt-2">
    <div class="hero-body">
      <h1>Episode Detail</h1>
      <h1>{{ id }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "EpisodeDetail",
  data() {
    return {
      query: "",
      id: "",
    };
  },
  methods: {
    ...mapActions(["getEpisodeById"]),
  },
  computed: {
    ...mapState(["episodes"]),
    filterSearch() {
      return this.episodes.episodes.filter((episode) => {
        return episode?.name?.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  beforeCreate() {
    const route = useRoute();
    const id = route.params.id;
    this.id = id;
  },
  mounted() {
    this.getEpisodeById(1);
  },
  beforeMount() {
    console.log("ID: ", this.id);
  },
};
</script>
