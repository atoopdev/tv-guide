
let show = "girls"

async function findShow(search_term){
   const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search_term}`) 
   if(!response.ok){
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
}
data = await response.json()
console.log(data)
return data
}

findShow(show).then(showInfo=>{
    console.log(showInfo)
    document.getElementById("tvguide").innerHTML = `
        <div class="show-img"><img src="${showInfo.image.medium}"></div>
        <div class="show-title">${showInfo.name}</div>
        <div class="show-summary">${showInfo.summary}</div>
        `
})

// function getShowHTML(search_term){
    
//     return `
//     <div class="show-img"><img src="${search_term.image.medium}"></div>
//     <div class="show-title">${search_term.name}</div>
//     <div class="show-summary">${search_term.summary}</div>
//     <div class="show-summary">${search_term.summary}</div>
//     `
// }
