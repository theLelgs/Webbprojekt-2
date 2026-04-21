let main = document.querySelector("main");

let articles = [];
let article1 = {
    price:89,
    isTea:true,
    name:"Sleepy Time"
}
let article2 = {
    price:119,
    isTea:false,
    name:"Cup Galore"
}

AddArticles(4)
function AddArticles(input){
    for (let x = 0; x<input; x++)
    {
        console.log("loop")
        articles.push(article1);
        articles.push(article2);
    }
}

function LoadArticles(input){
    main.innerHTML="";
    articles.forEach(article => {
        if ((article.isTea&&input!=3)||(!article.isTea&&input!=1))
        {
            let div = document.createElement("div");
            div.className="ruta";

            let Title = document.createElement("h2");
            Title.textContent=article.name;

            let Image = document.createElement("img")
            if (!article.isTea)
            {
                Image.src = "./img/TeKopp.png"
            }
            else
            {
                Image.src = "./img/SleepyTime.png"
            }
            Image.alt = article.name

            let Price = document.createElement("h3");
            Price.textContent=article.price+":-";
            
            div.appendChild(Title)
            div.appendChild(Image);
            div.appendChild(Price);
            main.appendChild(div);
        }
    });
}
