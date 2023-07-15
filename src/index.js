import SlimSelect from 'slim-select'
import {fetchBreeds, fetchCatByBreed} from "./cat-api"
import { Report } from 'notiflix/build/notiflix-report-aio'


const selectContainer = document.querySelector(".breed-select")
const catCont = document.querySelector(".cat-info")


selectContainer.addEventListener("change", onSelect)



fetchBreeds()
.then(data => {selectContainer.innerHTML = createSelect(data);
new SlimSelect({
    select: ".breed-select"
  })
})

function onSelect(e) {
    const breedId = e.currentTarget.value;
    fetchCatByBreed(breedId)
    .then(data => catCont.innerHTML = catsMarkup(data))
    .catch(err => Report.failure('Oops!', "Something went wrong! Try reloading the page!"))

}

function createSelect (arr){
    return arr.map(({name, id})=>
    `<option value="${id}">${name}</option>`).join('');
}



 function catsMarkup(arr) {
     return arr.map(({url, breeds},)=>{
     const { origin, description, name, temperament } = breeds[0];
     return`<img class="cat-img" src="${url}" alt="${name}" width="400">
     <div class="cat-text"><h1 class="cat-name">${name}</h1>
     <p class="descr">${description}</p>
     <p class="temp">${temperament}</p>
     <p class="origin">${origin}</p></div>`}).join('')
 }

