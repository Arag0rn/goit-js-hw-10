const BASE_URL = "https://api.thecatapi.com/v1";
const END_POINT ="/breeds";
const API_KEY = 'live_lpwpZWksmtNXBXU5NXMmT4ZRD92YVCzjJXLwENyFq6PLt8ck7iVRNrD8T2Z4ZHlI';

import { Loading } from 'notiflix/build/notiflix-loading-aio'



function fetchBreeds(){
    return fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}`)
     .then(response =>{
      if(!response.ok) {
  throw new Error (response.statusText)
      }
      return response.json()
  })
  }

  function fetchCatByBreed(breedId){
    Loading.arrows()
    const SEARCH = `/images/search?breed_ids=${breedId}`
    return fetch(`${BASE_URL}${SEARCH}&api_key=${API_KEY}`)
     .then(response =>{
      if(!response.ok) {
        throw new Error (response.statusText)
      }
      return response.json()
      .catch(err => console.log(err))
      .finally(()=>Loading.remove())
  })
  }

  export {fetchBreeds, fetchCatByBreed};