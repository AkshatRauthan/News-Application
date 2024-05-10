const main = document.getElementById("article-container");

const api = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7e7e71e96fab4315835bf13e26e68662'
let data, n;

async function getData(){
    const res = await fetch(`${api}`);
    const result = await res.json();
    data = result.articles;
    n = data.length;
    console.log(data);
    renderUI();
}
getData();
function renderUI(){
    for (let i=0; i<n; i++){
        const article = document.createElement('article');
        article.innerHTML = `
        <img class = "article-image" src = "${data[i].urlToImage}" alt = "Image Not Available.">
        <div class="article-content">
            <h2>
                ${data[i].title}
            </h2>
            <p>
                ${data[i].description}
            </p>
            <b><a class = "anchor-article" href = "${data[i].url}" target = "_blank" >Read More...</a></b>
        </div>
        `;
        main.appendChild(article);
    }
}