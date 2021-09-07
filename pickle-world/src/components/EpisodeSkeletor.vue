<template>
  <div class="card">
    <div class="card__slim">
      <div class="card__meta">
        <h2>
          <Skeletor width="50%" />
        </h2>
        <h4>
          <Skeletor width="50%" />
        </h4>
      </div>
      <p>
        <Skeletor width="75%" />
      </p>
    </div>
    <div class="card__actions">
      <Skeletor width="96" height="36" />
    </div>
  </div>
</template>
<script>
import { Skeletor } from "vue-skeletor";
export default {
  name: "EpisodeSkeletor",
  components: {
    Skeletor,
  },
};
</script>
