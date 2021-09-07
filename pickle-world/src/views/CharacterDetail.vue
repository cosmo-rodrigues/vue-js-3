<template>
  <div class="hero pt-2">
    <div class="hero-body">
      <h1>Character {{ id }}</h1>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CharacterDetail",
  data() {
    return {
      query: "",
      id: "",
    };
  },
  methods: {
    ...mapActions(["getChacterById"]),
  },
  computed: {
    ...mapState(["character"]),
  },
  created() {
    const id = this.$route.params.id;
    this.id = id;
  },
  mounted() {
    this.getChacterById(this.id);
  },
  beforeMount() {
    console.log("ID: ", this.id);
  },
};
</script>
