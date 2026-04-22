let main = document.querySelector("main");

let articles = [];

let teaNamesPartOne = ["Sleepy", "Energizing", "Calming", "Green"]
let teaNamesPartTwo = ["Time", "Tea", "Deluxe", "Ultra"]
let cupNamesPartOne = ["Cup", "Porcelain", "Luxury", "The Perfect"]
let cupNamesPartTwo = ["Galore", "Deluxe", "Ultra", "Tea"]

let ShoppingList = [];
if (localStorage.getItem("ShoppingList")!=null)
{
    ShoppingList = JSON.parse(localStorage.getItem("ShoppingList"));
}

AddArticles(4)
function AddArticles(input){
    for (let x = 0; x<input; x++)
    {
        let teaArticle = {
            price:Math.floor(Math.random()*40)+70,
            isTea:true,
            name:teaNamesPartOne[Math.floor(Math.random(0,1)*4)] + " " + teaNamesPartTwo[Math.floor(Math.random(0,1)*4)]
        }
        let cupArticle = {
            price:Math.floor(Math.random()*50+80),
            isTea:false,
            name:cupNamesPartOne[[Math.floor(Math.random(0,1)*4)]] + " " + cupNamesPartTwo[[Math.floor(Math.random(0,1)*4)]]
        }
        articles.push(teaArticle);
        articles.push(cupArticle);
    }
}

function AddToShoppingList(article){
    ShoppingList.push(article)
}


function GoToShoppingList(){
    let list = JSON.stringify(ShoppingList)
    localStorage.setItem("ShoppingList", list)
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
                Image.src = "./img/TeKopp.webp"
            }
            else
            {
                Image.src = "./img/SleepyTime.webp"
            }
            Image.alt = article.name

            let Price = document.createElement("h3");
            Price.textContent=article.price+":-";

            let Button = document.createElement("button")
            Button.onclick= function(){AddToShoppingList(article)}
           
            Button.type="submit";
            Button.textContent="Lägg till";

            div.appendChild(Title)
            div.appendChild(Image);
            div.appendChild(Price);
            div.appendChild(Button)
            main.appendChild(div);
        }
    });
}
