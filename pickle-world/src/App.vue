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
a {
  text-decoration: none !important;
  transform: 0.5;
}
a:hover {
  color: #ffffff !important;
  cursor: pointer;
}
button {
  border-radius: 10px !important;
  color: #000;
}
.card {
  border-radius: 25px !important;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 5px 5px;
  max-width: 300px !important;
  color: #000;
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
