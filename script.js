
let show = "girls"
let showHTML = ""

async function findShow(search_term){
   const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search_term}`) 
   if(!response.ok){
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
}
let data = await response.json()
console.log(data)
return data
}

findShow(show).then(showInfo=>{
    // console.log(showInfo)
    // console.log(showInfo[0].show.image.medium)
    showHTML = showInfo.map(getShowHTML).join('')
    document.getElementById("search-term").innerText = `Searching for: "${show}"`
    document.getElementById("tvguide").innerHTML = showHTML;
        
})

function getShowHTML(obj){
    if(obj.show.summary === null){
        obj.show.summary = "Summary not found"
    }
    return `
    <div class = "show">
    <div class="show-title">${obj.show.name}</div>
    <div class="show-summary">${obj.show.summary}</div>
    </div>
    `;
}

// used to show seasons
// ${obj._embedded.seasons.map(season =>{
//     return `<div class="show-season"><a class="season-link" href="${season.url}">Season: ${season.number}</a></div>`
// }).join('')}

//  <div class="show-img"><img src="${obj.show.image.medium}"></div>