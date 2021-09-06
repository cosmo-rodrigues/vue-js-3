<template>
  <header class="navbar bg-dark">
    <div class="container columns">
      <section class="navbar-section pt-2">
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
      <section class="navbar-center">
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
