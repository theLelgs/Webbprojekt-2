let main = document.querySelector("main");

let articles = [];
let article1 = {
    price:89,
    isTea:true,
    name:"Sleepy Time"
}
articles.push(article1);


function LoadArticles(){
    articles.forEach(article => {
    let div = document.createElement("div");
    div.class="ruta";
    let Price = document.createElement("p");
    Price.textContent=article.price;
    div.appendChild(Price);
    main.appendChild(div);
    });
}
