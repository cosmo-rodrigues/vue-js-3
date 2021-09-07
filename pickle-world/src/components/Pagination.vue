<template>
  <div class="comntainer text-center">
    <div class="text-center">
      <div class="page-item">
        <button
          class="btn btn-success my-2"
          @click="changePage(info.prev)"
          tabindex="-1"
        >
          Previous
        </button>
      </div>
      <div class="page-item">
        <button class="btn btn-success my-2" @click="changePage(info.next)">
          Next
        </button>
      </div>
    </div>
    <h5>Page {{ +info?.next - 1 }} from {{ info.pages }}</h5>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Pagination",
  props: {
    info: { type: Object, required: true },
  },
  methods: {
    ...mapActions(["getAllChacters"]),
    changePage(pageId) {
      this.$store.dispatch("getAllChacters", pageId);
    },
  },
};
</script>
