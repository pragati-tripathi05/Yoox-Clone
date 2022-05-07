   /* Accordion Menu */
   const accordion = document.getElementsByClassName("contentBx");
   for(let i=0; i<accordion.length; i++)
   {
       accordion[i].addEventListener("click", function(){
           this.classList.toggle("active");
       })
   }

   let shop = [
    {
        image_url:
            "https://www.yoox.com/images/items/11/11672527cd_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11669201ct_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11661517gj_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11653655sr_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11661877jo_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11653520oe_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/17/17113071rh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11653718mj_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
        "https://www.yoox.com/images/items/11/11667952wk_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    brand: "PUMA",
    name: "Nova 90's Bloc Wn's",
    type: "Sneakers",
    price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11660884xa_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11663509of_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17187981aa_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17219457tv_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17219655iq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17239368dv_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11950813cu_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11713932gu_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17192959fa_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480",
    },
];

let cartProducts = JSON.parse(localStorage.getItem("cartData")) || [];

shop.map(function (elem) {
    displayData(shop)
});

function displayData(shop) {
    document.querySelector("#products").innerHTML = "";
    shop.map(function (elem) {
        let box = document.createElement("div");
        box.style.position = "relative"
        let img = document.createElement("img");
        img.src = elem.image_url;
        img.style.paddingBottom = "0px"
        img.style.marginBottom = "0px"
        // img.style.position = "relative"
       
        let name = document.createElement("p");
        name.textContent = elem.name;
        name.style.fontWeight = "600"
        name.style.fontSize = "14px"
        name.style.fontFamily = "Montserrat"
        name.style.paddingTop = "5px"

        let brand = document.createElement("p")
        brand.textContent = elem.brand;
        brand.style.fontSize = "14px"
        brand.style.fontFamily = "Montserrat"
        brand.style.paddingTop = "5px"
        brand.style.color = "#333"

        let type = document.createElement("p")
        type.textContent = elem.type;
        type.style.fontSize = "14px"
        type.style.fontFamily = "Montserrat"
        type.style.paddingTop = "5px"
        type.style.color = "#87878a"

        let price = document.createElement("p");
        price.innerText = "₹ " + elem.price;
        price.style.color = "#333";
        price.style.fontFamily = "Montserrat"
        price.style.fontWeight = "bold"
        price.style.fontSize = "14px"
        price.style.textAlign = "center"
        
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.innerText.color = "white"
        btn.style.fontFamily = "Montserrat"
        btn.style.width = "100%"
        btn.style.display = "block"
        btn.style.marginTop = "-6px"
        btn.style.paddingTop = "0px"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        btn.style.height = "40px"
        btn.style.border = "none"
        btn.onmouseover = function(){
            btn.style.color = "white"
            btn.style.backgroundColor = "grey"
        }
        btn.onmouseout = function(){
            btn.style.color = "white"
            btn.style.backgroundColor = "black"
        }
        // element.setAttribute("class", "democlass");
        btn.addEventListener("click", function () {
            addToCart(elem);
            window.location.reload();
            // <button onClick="window.location.reload();">
        });
        
        box.append(img, btn, brand, name, type, price);
        document.querySelector("#products").append(box);
    });
}