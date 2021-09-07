<template>
  <div class="card">
    <div class="card__image">
      <Skeletor height="200" />
    </div>
    <div class="card__slim">
      <div class="card__meta">
        <h1>
          <Skeletor width="50%" />
        </h1>
        <p>
          <Skeletor width="75%" />
        </p>
      </div>
    </div>
    <div class="card__actions">
      <Skeletor width="96" height="36" />
    </div>
  </div>
</template>
<script>
import { Skeletor } from "vue-skeletor";
export default {
  name: "CharacterSkeletor",
  components: {
    Skeletor,
  },
};
</script>
