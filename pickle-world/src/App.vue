<template>
  <Home/>
  <EpisodeDetail />
  <CharactersList />
  <CharacterDetail />
</template>

<script>
import Home from './components/Home.vue'
import EpisodeDetail from './components/EpisodeDetail'
import CharactersList from './components/CharactersList'
import CharacterDetail from './components/CharacterDetail'

export default {
  name: 'App',
  components: {
    Home,
    EpisodeDetail,
    CharactersList,
    CharacterDetail,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
