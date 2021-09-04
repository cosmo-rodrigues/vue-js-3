<template>
  <div class="hello">
    <h1>Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        {{ character.name }}
        <img :src="character.image" alt="character.name">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',

    data() {
      return {
        characters: [],
      }
    },

    async mounted() {
      try {
        const result = await axios({
          method: 'POST',
          url: 'https://rickandmortyapi.com/graphql',
          data: {
            query: `{
              characters {
                results {
                  id,
                  name,
                  status,
                  gender,
                  species,
                  location {
                    name,
                    type,
                    dimension
                  },
                  episode {
                    name,
                    characters {
                      name
                    }
                  }
                  image
                }
              }
            }`
          }
        })
        this.characters = result.data.data.characters.results
      } catch (error) {
        console.error(error)
      }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
