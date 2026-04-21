let main = document.querySelector("main");
let ShoppingList = []
function LoadShoppingList(){
    ShoppingList = JSON.parse(localStorage.getItem("ShoppingList"))
    console.log(ShoppingList.length)
    ShoppingList.forEach(article => {
        let div = document.createElement("div");
        
        let Title = document.createElement("h2");
        Title.textContent=article.name;

        let Img = document.createElement("img");
        if (article.isTea)
        {
            Img.src="./img/SleepyTime.png"
        }
        else {
            Img.src = "./img/TeKopp.png"
        }

        let Price = document.createElement("h3");
        Price.textContent=article.price+":-";

        

        div.appendChild(Img);
        div.appendChild(Title)
        div.appendChild(Price)


        
        main.appendChild(div);



    });
    let total = document.createElement("h2")
    total.textContent=CalculateSum();
    main.appendChild(total)
}

function CalculateSum(articles){
    let sum = 0;
    articles.forEach(element => {
        sum+=element.price;
    });
    return sum;
}


function RemoveFromShopping(article){
    ShoppingList.splice(ShoppingList.indexOf(article))
}




