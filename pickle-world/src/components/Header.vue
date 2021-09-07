<template>
  <header class="navbar bg-dark d-flex">
    <div class="columns d-flex">
      <section class="column col-3">
        <div class="card-image">
          <figure class="figure">
            <img
              class="img-responsive"
              alt="Rick and Morty"
              src="../../public/rick-and-morty-31013.png"
              width="200"
            />
          </figure>
        </div>
      </section>
      <section class="navbar-section column col-6 col-md-6 name">
        <div class="card-image name">
          <figure class="figure">
            <img
              alt="Rick and Morty"
              class="img-responsive"
              src="../../public/rick_morty_name.png"
            />
          </figure>
        </div>
      </section>
      <section class="navbar-section column col-3">
        <router-link class="navbar-brand mr-2" to="/">Home</router-link>
        <router-link class="navbar-brand mr-2" to="/characters">
          Characters
        </router-link>
        <router-link class="navbar-brand mr-2" to="/episodes">
          Episodes
        </router-link>
      </section>
    </div>
  </header>
  <router-view />
</template>
<style scoped>
header {
  background-color: #232c3b !important;
}
section .container {
  justify-content: space-between !important;
}
figure .name {
  margin-right: 20px !important;
  max-width: 70% !important;
}
</style>
