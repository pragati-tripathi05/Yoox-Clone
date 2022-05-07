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


var data = [
    {
        img: "https://www.yoox.com/images/items/12/12788309HN_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VANS",
        type: "Sweatshirt",
        price: "us $92,00",
    },
    {
        img: "https://www.yoox.com/images/items/13/13773489EL_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NAME IT",
        type: "Denim pants",
        price: "us $40,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17239634NM_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "GOLDEN COOSE DELUXE BRAND",
        type: "Sneakers",
        price: "us $283,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17243856JI_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "THE MARC JACOBS",
        type: "SANDALS",
        price: "us $126,00",
    },
    {
        img: "https://www.yoox.com/images/items/16/16120939SP_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "KIDS ONLY",
        type: "Denim jacket",
        price: "us $67,00",
    },
    {
        img: "https://www.yoox.com/images/items/54/54183845NU_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NIKE",
        type: "Athletic outfit",
        price: "us $78,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17244691FX_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VANS",
        type: "Sneakers",
        price: "us $64,00",
    },
    {
        img: "https://www.yoox.com/images/items/15/15203434KD_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "BILLIEBLUSH",
        type: "Dress",
        price: "us $84,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12789523WK_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "MICHAEL MICHAEL KORS",
        type: "T-shirt",
        price: "us $64,00",
    },
];
let container = document.getElementById("container");
data.forEach((el) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let type = document.createElement("p");
   
    name.setAttribute("class","back");
    type.setAttribute("class","back");
   
   
    let price = document.createElement("p");
    price.setAttribute("class", "price");

    img.src = el.img;
    name.innerText = el.name;
    type.innerText = el.type;
   
    price.innerText = el.price;

    box.append(img, name, type, price);
    container.append(box);

})
var data1 = [
    {
        img: "https://www.yoox.com/images/items/54/54183813RE_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NIKE",
        type: "Athletic outfit",
        price: "us $71,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17240953XE_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VANS",
        type: "Sneakers",
        price: "us $78,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12789956EA_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "KENZO",
        type: "T-shirt",
        price: "us $98,00",
    },
    {
        img: "https://www.yoox.com/images/items/54/54184129AN_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "EMPORIO ARMANI",
        type: "Athletic outfit",
        price: "us $219,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17244656TG_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VANS",
        type: "Sneakers",
        price: "us $64,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12789499HB_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "PAUL SMITH",
        type: "T-shirt",
        price: "us $69,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12793446WA_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NAME IT",
        type: "T-shirt",
        price: "us $30,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17245571BL_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "SUPERGA",
        type: "Sneakers",
        price: "us $69,00",
    },
    {
        img: "https://www.yoox.com/images/items/13/13773558MD_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NAME IT",
        type: "Denim shorts",
        price: "us $33,00",
    },
];
let container1 = document.getElementById("container1");
data1.forEach((el) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let type = document.createElement("p");
   
    name.setAttribute("class","back");
    type.setAttribute("class","back");
   
   
    let price = document.createElement("p");
    price.setAttribute("class", "price");

    img.src = el.img;
    name.innerText = el.name;
    type.innerText = el.type;
   
    price.innerText = el.price;

    box.append(img, name, type, price);
    container1.append(box);

})
var data2 = [
    {
        img: "https://www.yoox.com/images/items/17/17223165XI_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "DRIES VAN NOTEN",
        type: "Sandals",
        strikedprice: "US $880,00",
        discount: "26% OFF",
        price: "US $644,00",
    },
    {
        img: "https://www.yoox.com/images/items/14/14193255PC_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "OFF WHITE",
        type: "Sweater",
        strikedprice: "US $2.061,00",
        discount: "46% OFF",
        price: "US $1.093,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12789523WK_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "MICHAEL MICHAEL KORS",
        type: "T-shirt",
        strikedprice: "",
        discount: "",
        price: "US $ 2.550,00",
    },
]
let container2 = document.getElementById("container2");
data2.forEach((el) => {
    console.log("kdbytcvrtfv")
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let type = document.createElement("p");
    let div = document.createElement("div");
    div.setAttribute("class", "div")
    let strikedprice = document.createElement("p");
    strikedprice.setAttribute("class", "line")
    let discount = document.createElement("p");
    let price = document.createElement("p");
    price.setAttribute("class", "price");

    name.setAttribute("class","back");
    type.setAttribute("class","back");
    discount.setAttribute("class","back");

    img.src = el.img;
    name.innerText = el.name;
    type.innerText = el.type;
    strikedprice.innerText = el.strikedprice;
    discount.innerText = el.discount;
    price.innerText = el.price;

    div.append(strikedprice, discount);
    box.append(img, name, type, div, price);
    container2.append(box);

})