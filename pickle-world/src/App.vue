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
  box-shadow: -9px 5px 15px 9px rgba(0, 0, 0, 0.81) !important;
  color: #000;
  background-color: #232c3b !important;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 5px 2px 30px 2px;
  max-width: 300px !important;
  -webkit-box-shadow: -9px 5px 15px 9px rgba(0, 0, 0, 0.81);
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
h1 {
  font-family: sans-serif;
  font-size: 3rem !important;
  font-weight: 700 !important;
  text-align: center !important;
  text-shadow: -5px 2px 8px #2fbd03;
}
header {
  height: 17vh;
}
head > div {
  flex-flow: row wrap !important;
}
img {
  border-radius: 25px !important;
}
section .name {
  margin-left: 30px !important;
}
.search {
  display: flex !important;
  justify-content: flex-end;
  margin-right: 20px;
}
.text-success {
  color: #2fbd03 !important;
}
</style>
