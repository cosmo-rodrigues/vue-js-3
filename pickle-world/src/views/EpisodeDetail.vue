<template>
  <div class="hero pt-2">
    <div class="hero-body">
      <h1>Episode {{ id }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
    ...mapState(["episode"]),
  },
  created() {
    const id = this.$route.params.id;
    this.id = id;
  },
  mounted() {
    this.getEpisodeById(this.id);
  },
  beforeMount() {
    console.log("ID: ", this.id);
  },
};
</script>
