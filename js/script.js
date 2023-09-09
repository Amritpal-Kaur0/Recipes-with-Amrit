const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let SearchQuery = "";
const API_ID='c7a037fe';
const API_key='25fd3862e1bab36d44de5742019f1a26';


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  SearchQuery = e.target.querySelector("input").value;
//   console.log(SearchQuery);
fetchApi();
});

async function fetchApi(){
    const url =`https://api.edamam.com/search?q=${SearchQuery}&app_id=${API_ID}&app_key=${API_key}`
    const response = await fetch(url);
    const data =await response.json();
    // console.log(data.hits);
    generateHTML(data.hits)
}
function generateHTML(results){
    let html='';
    results.map(result=>{result
        console.log(result);
       
html+=
`
<div class="item">
<img
  src=${result.recipe.image}

/>
<div class="flex-container">
  <h1 class="title">${result.recipe.label}</h1>
  <a class="view-button" href=${result.recipe.url} target="_blank">View Recipe</a>
</div>
<p class="item-data">Calories : ${result.recipe.calories.toFixed(2)}</p>
<p class="item-data">Diet Label : ${result.recipe.dietLabels}</p>
<p class="item-data">Health Label : ${result.recipe.healthLabels}</p>

</div>

`;
    })
    searchResult.innerHTML=html
}