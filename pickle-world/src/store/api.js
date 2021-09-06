import axios from "axios";

export function getAllChacters() {
  return axios({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    data: {
      query: `
      {
        characters {
          results {
            id,
            name,
            image,
            status,
            species,
          }
        }
      }
      `,
    },
  });
}

export function getChacterById(id) {
  return axios({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    data: {
      query: `
        {
          charactersByIds(ids: ${id}) {
            id,
            name,
            image,
            gender,
            status,
            episode {
              id,
              name,
              episode,
            }
          }
        }
      `,
    },
  });
}

export function getAllEpisodes() {
  return axios({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    data: {
      query: `
        {
          episodes{
            results {
              id,
              name,
              episode,
              air_date
            }
          }
        }
      `,
    },
  });
}

export function getEpisodeById(id) {
  return axios({
    method: "POST",
    url: "https://rickandmortyapi.com/graphql",
    data: {
      query: `
        {
          episodesByIds(ids: ${id}) {
            id,
            name,
            episode,
            characters {
              id,
              name,
              image,
            }
          }
        }
      `,
    },
  });
}
