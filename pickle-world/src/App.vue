<template>
  <Header />
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
.card {
  border-radius: 25px !important;
  margin: 5px 5px;
  max-width: 300px !important;
}
.card-footer {
  justify-content: flex-end !important;
}
.columns {
  justify-content: space-around !important;
}
img {
  border-radius: 25px !important;
}
.search {
  display: flex !important;
  justify-content: flex-end;
  margin-right: 20px;
}
</style>
