import axios from "axios";

const API_URL = "https://rickandmortyapi.com/graphql";

export function getAllChacters(pageId) {
  if (!pageId) pageId = 1;
  return axios.post(API_URL, {
    query: `
    {
      characters(page: ${pageId}) {
        info {
          next,
          prev,
          count,
          pages
        }
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
  });
}

export function getChacterById(id) {
  return axios.post(API_URL, {
    query: `
      {
        character(id: ${id}) {
          id,
          name,
          image,
          gender,
          status,
          species,
          episode {
            id,
            name,
            episode,
          }
          location {
            id,
            name,
            type,
            dimension,
            residents {
              id,
              name,
              status,
              species,

            }
          }
          origin {
            id,
            name,
            type,
            dimension,
            residents {
              id,
              status,
              species,
            }
          }
        }
      }
    `,
  });
}

export function getAllEpisodes() {
  return axios.post(API_URL, {
    query: `
      {
        character(id: ${1}) {
          episode {
            id,
            name,
            episode,
            air_date,
          }
        }
      }
    `,
  });
}

export function getEpisodeById(id) {
  return axios.post(API_URL, {
    query: `
      {
        episode(id: ${id}) {
          id,
          name,
          episode,
          air_date,
          characters {
            id,
            name,
            image,
          }
        }
      }
    `,
  });
}
