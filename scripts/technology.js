let country = {
    "Argentina" : "ar", "Greece" : "gr", "Argentina" : "ar", "Australia" : "au",
    "Austria" : "at" ,"Belgium " : "be", "Brazil" : "br", "Bulgaria" : "bg",
    "Canada" : "ca", "China" : "cn", "Colombia" : "co", "Cuba" : "cu",
    "Czech Republic" : "cz", "Egypt" : "eg", "France" : "fr", "Germany" : "de",
    "Greec" : "gr", "Hong Kong" : "hk", "Hungary" : "hu", "India" : "in", "Indonesia" : "id",
    "Ireland" : "ie", "Israel" : "il", "Italy" : "it", "Japan" : "jp", "Latvia" : "lv",
    "Lithuania" : "lt", "Malaysia" : "my", "Mexico" : "mx", "Morocco" : "ma", 
    "South Africa" : "za","South Korea" : "kr","Sweden" : "se","Switzerland " : "ch",
    "Taiwan" : "tw","Thailand" : "th","Turkey" : "tr","UAE" : "ae","Ukraine" : "ua","United Kingdom" : "gb",
    "United States" : "us","Venuzuela" : "ve", "Russia" : "ru", 
}

let flag = false;
let apiId = "4f13a1ab0c1b4d5a882463a1693e2aa9";
function run(){
    let currRegion = 'in';
    let data, n;
    let main = document.getElementById("article-container");
    const button = document.getElementById("change-region");
    if (flag){
        region = prompt("Enter The Name Of The Country You Want To Get News From : ");
        if (country[region] == undefined){
            alert("News From The Required Region Is Not Available.");
            alert("Please Select A Diffrent Region.");
            changeRegion();
        }
        else{
            alert("Region Is Succesfully Changed.");
            currRegion = country[region];
        }
    }

    async function getData(){
        let api = `https://newsapi.org/v2/top-headlines?country=${currRegion}&category=technology&apiKey=${apiId}`
        const res = await fetch(`${api}`);
        const result = await res.json();
        data = result.articles;
        n = data.length;
        console.log(data);
        renderUI();
    }

    function renderUI(){
        for (let i=0; i<n; i++){
            const article = document.createElement('article');
            if (data[i].title == '[Removed]' || data[i].description == null) continue;
            article.innerHTML = `
            <img class = "article-image" src = "${data[i].urlToImage}" alt = "Image Not Available." onerror="this.src='images/noImage.webp'">
            <a class = "anchor-article" href = "${data[i].url}" target = "_blank" >
            <div class="article-content">
                <h2>
                    ${data[i].title}
                </h2>
                <p>
                    ${data[i].description}
                </p>
                <p class = "article-author">
                    Article Author : ${data[i].author}
                </p>
            </div>
            </a>    
            `;
            main.appendChild(article);
        }
    }
    getData();
    flag = true;
}


let button = document.getElementById("change-country");
run();

function clearScreen(){
    let div = document.getElementById("article-container");
    while (div.firstChild){
        div.removeChild(div.firstChild);
    }
    run();
}

button.addEventListener("click", clearScreen);
