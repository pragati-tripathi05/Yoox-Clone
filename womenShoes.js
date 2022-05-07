
// Black strip options
let downArrivals = document.getElementById("dropArrivals")
let dropDesigners = document.getElementById("dropDesigners")
let dropClothing = document.getElementById("dropClothing")
let dropShoes = document.getElementById("dropShoes")
let dropBags = document.getElementById("dropBags")
let dropYoox = document.getElementById("dropYoox")
let dropYooxygen = document.getElementById("dropYooxygen")
let dropCollaborations = document.getElementById("dropCollaborations")
let dropOffers = document.getElementById("dropOffers")

function newArrivals() {
    downArrivals.classList.toggle("show")
}
function Designers() {
    dropDesigners.classList.toggle("show")
}
function Clothing() {
    dropClothing.classList.toggle("show")
}
function Shoes() {
    dropShoes.classList.toggle("show")
}
function Bags() {
    dropBags.classList.toggle("show")
}
function Yoox() {
    dropYoox.classList.toggle("show")
}
function Yooxygen() {
    dropYooxygen.classList.toggle("show")
}
function Collaborations() {
    dropCollaborations.classList.toggle("show")
}
function Offers() {
    dropOffers.classList.toggle("show")
}




/* Accordion Menu */
const accordion = document.getElementsByClassName("contentBx");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}



// Products
let shop = [
    {
        image_url:
            "https://www.yoox.com/images/items/11/11672527CD_10_f.jpg",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "142.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11669201CT_10_f.jpg",
        brand: "GIVENCHY",
        name: "Yooxygen",
        type: "Ankle boots",
        price: "718.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11661517GJ_10_r.jpg",
        brand: "VALENTINO GARVANI",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "556.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11653655SR_10_r.jpg",
        brand: "SAINT LAURENT",
        name: "Bloc Wn's",
        type: "Pumps",
        price: "480.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11661877JO_10_f.jpg",
        brand: "PUMA",
        name: "Nova GRL PWR Wn's",
        type: "Sneakers",
        price: "157.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11653520OE_10_r.jpg",
        brand: "GIVANVITO ROSSI",
        name: "Yooxygen",
        type: "Sandals",
        price: "485.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11663509OF_10_r.jpg",
        brand: "SCHUTZ",
        name: "Nova 90's Bloc Wn's",
        type: "Sandals",
        price: "314.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11667952WK_10_r.jpg",
        brand: "DOLCE & GABBANA",
        name: "Bloc Wn's",
        type: "Pumps",
        price: "630.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11661914DU_10_r.jpg",
        brand: "EYTYS",
        name: "Nova 90's",
        type: "Sneakers",
        price: "458.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11660884XA_10_f.jpg",
        brand: "SUECOMMA BONNIE x YOOX",
        name: "Yooxygen",
        type: "Sneakers",
        price: "149.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17187981AA_10_e.jpg",
        brand: "8 BY YOOX",
        name: "WIDE-FIT BALLET FLAT",
        type: "Ballet flats",
        price: "80.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11903892BG_10_r.jpg",
        brand: "MAISON MARGIELA",
        name: "Bloc Wn's",
        type: "Sneakers",
        price: "502.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17192959FA_10_r.jpg",
        brand: "CHLOE",
        name: "Nova 90's Bloc Wn's",
        type: "Sandals",
        price: "656.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17156998DK_10_f.jpg",
        brand: "PUMA",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/17/17005882SL_10_r.jpg",
        brand: "BOTTEGA VENETA",
        name: "Nova Wn's",
        type: "Sneakers",
        price: "859.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11666193XD_10_r.jpg",
        brand: "CHLOE",
        name: "Nova 90's Bloc Wn's",
        type: "Sneakers",
        price: "480.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11720598JP_10_f.jpg",
        brand: "ALAIA",
        name: "Nova Wn's",
        type: "Ankle boots",
        price: "1233.00",
    },
    {
        image_url:
            "https://www.yoox.com/images/items/11/11726313FC_10_r.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "Nova 90's",
        type: "Ankle boots",
        price: "286.00",
    },
];

let cartProducts = JSON.parse(localStorage.getItem("cartData")) || [];

shop.map(function (elem) {
    displayData(shop)
});

function addToCart(elem) {
    console.log(elem);
    cartProducts.push(elem);
    localStorage.setItem("cartData", JSON.stringify(cartProducts));
    alert("item added to cart");
}
document.querySelector(".countPlace").innerText = cartProducts.length

function SortDown() {
    var down = document.getElementById("downTown")
    down.classList.toggle("show")
}

function FilterLth() {
    var selected = document.querySelector("#lth").value;
    var sortedList = shop.sort(function (a, b) {
        return a.price - b.price;
    });
    displayData(sortedList);
}

function FilterHtl() {
    var selected = document.querySelector("#htl").value;
    var sortedList = shop.sort(function (a, b) {
        return b.price - a.price;
    });
    displayData(sortedList);
}


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
        // price.innerText = "₹ " + elem.price;
        price.innerText = "US$ " + elem.price;
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
        btn.onmouseover = function () {
            btn.style.color = "white"
            btn.style.backgroundColor = "grey"
        }
        btn.onmouseout = function () {
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
