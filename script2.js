let main = document.querySelector("main");
let ShoppingList = []
function LoadShoppingList(){
    ShoppingList = JSON.parse(localStorage.getItem("ShoppingList"))
    console.log(ShoppingList.length)
    DrawShoppingList();
}

function DrawShoppingList(){
    main.innerHTML="";

    let titel = document.createElement("h1");
    titel.textContent="Shopping Lista: "
    let sum = document.createElement("h2")
    sum.textContent="Sum: " + CalculateSum(ShoppingList) + ":-";
    
    
    main.appendChild(titel)
    main.appendChild(sum) 

    for (let index = 0; index < ShoppingList.length; index++) {
        const article = ShoppingList[index];
        
        let div = document.createElement("div");
        
        let Title = document.createElement("h2");
        Title.textContent=article.name;

        let Img = document.createElement("img");
        if (article.isTea)
        {
            Img.src="./img/SleepyTime.webp"
        }
        else {
            Img.src = "./img/TeKopp.webp"
        }

        let Price = document.createElement("h3");
        Price.textContent=article.price+":-";

        let Button = document.createElement("button")
        Button.onclick=function(){RemoveFromShopping(index)}
        Button.textContent="Remove"

        


        div.appendChild(Img);
        div.appendChild(Title)
        div.appendChild(Price)
        div.appendChild(Button)

        main.appendChild(div);



    };
}

function CalculateSum(articles){
    let sum = 0;
    articles.forEach(element => {
        sum+=element.price;
    });
    console.log(sum)
    return sum;
}

function RemoveFromShopping(index){
    ShoppingList.splice(index, 1)
    console.log("Tried deleting: " + index)
    localStorage.setItem("ShoppingList", JSON.stringify(ShoppingList)) 
    DrawShoppingList();
}




