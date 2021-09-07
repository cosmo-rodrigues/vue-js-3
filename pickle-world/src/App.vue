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
  color: #ffffff !important;
  text-decoration: none !important;
  transform: 0.5;
}
a:hover {
  color: #2fbd03 !important;
  cursor: pointer;
}
button {
  border-radius: 10px !important;
  color: #000;
}
.card {
  border: none !important;
  border-radius: 25px !important;
  background-color: #232c3b !important;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 5px 5px;
  max-width: 300px !important;
  color: #000;
}
.card-footer {
  justify-content: flex-end !important;
}
.card-title {
  color: #ffffff !important;
}
.columns {
  justify-content: space-around !important;
}
img {
  border-radius: 25px !important;
}
img .name {
  background-color: #000;
}
.search {
  display: flex !important;
  justify-content: flex-end;
  margin-right: 20px;
}
.text-success {
  color: green !important;
}
</style>
