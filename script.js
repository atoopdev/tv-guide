
let show = "girls"

async function findShow(search_term){
   const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search_term}&embed=seasons`) 
   if(!response.ok){
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
}
let data = await response.json()
console.log(data)
return data
}

findShow(show).then(showInfo=>{
    console.log(showInfo)
    let showHTML = getShowHTML(showInfo)
    document.getElementById("tvguide").innerHTML = showHTML;
        
})

function getSeasons(arr){
    let htmlString = ""
    for(let i=0;i<arr.length;i++){
        htmlString += `
        <div class="show-season">Number: ${arr[i].number}</div>`
    }
    return htmlString

}

function getShowHTML(obj){
    let seasonsHTML = getSeasons(obj._embedded.seasons)
    return `
    <div class="show-img"><img src="${obj.image.medium}"></div>
    <div class="show-title">${obj.name}</div>
    <div class="show-summary">${obj.summary}</div>
    ` + seasonsHTML;
}
