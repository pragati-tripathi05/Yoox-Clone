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
        img: "https://www.yoox.com/images/items/12/12701727HA_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "BOTTEGA VENETA",
        type: "Patterned shirt",
        strikedprice: "us $1.150,00",
        discount: "29% OFF",
        price: "us $816,00",
    },
    {
        img: "https://www.yoox.com/images/items/13/13723856NF_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "JACQUEMUS",
        type: "Casual pants",
        strikedprice: "us $708,00",
        discount: "30% OFF",
        price: "us $489,00",
    },
    {
        img: "https://www.yoox.com/images/items/45/45653325JS_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "OFF WHITE",
        type: "Backpack & fanny pack",
        strikedprice: "us $860,00",
        discount: "23% OFF",
        price: "us $662,00",
    },
    {
        img: "https://www.yoox.com/images/items/16/16102560VA_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "MARNI",
        type: "JACKET",
        strikedprice: "us $822,00",
        discount: "52% OFF",
        price: "us $387,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17199055SD_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "BOTTEGA VENETA",
        type: "Boots",
        strikedprice: "us $1.208,00",
        discount: "26% OFF",
        price: "us $882,00",
    },
    {
        img: "https://www.yoox.com/images/items/45/45649416BE_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "FENDI",
        type: "Backpack & fanny pack",
        strikedprice: "us $1.969,00",
        discount: "22% OFF",
        price: "us $1.535,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12781445FW_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "NEW BALANCE",
        type: "T-shiet",
        strikedprice: "",
        discount: "",
        price: "us $42,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17223165XI_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "DRIES VAN NOTEN",
        type: "sandals",
        strikedprice: "us $880,00",
        discount: "26% OFF",
        price: "us $644,00",
    },
    {
        img: "https://www.yoox.com/images/items/13/13757132DI_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VANS",
        type: "Casual pants",
        strikedprice: "",
        discount: "",
        price: "us $99,00",
    },
];

let container = document.getElementById("container");
data.forEach((el) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    name.setAttribute("class","back");
    let type = document.createElement("p");
    type.setAttribute("class","back");
    let div = document.createElement("div");
    div.setAttribute("class", "div")
    let strikedprice = document.createElement("p");
    strikedprice.setAttribute("class", "line")
    let discount = document.createElement("p");
    discount.setAttribute("class","back");
    let price = document.createElement("p");
    price.setAttribute("class", "price");

    img.src = el.img;
    img.height="250px"
    name.innerText = el.name;
    type.innerText = el.type;
    strikedprice.innerText = el.strikedprice;
    discount.innerText = el.discount;
    price.innerText = el.price;

    div.append(strikedprice, discount);
    box.append(img, name, type, div, price);
    container.append(box);

})

var data1 = [
    {
        img: "https://www.yoox.com/images/items/14/14193255PC_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "OFF WHITE",
        type: "Sweater",
        strikedprice: "US $2.061,00",
        discount: "46% OFF",
        price: "US $1.093,00",
    },
    {
        img: "https://www.yoox.com/images/items/41/41946235CN_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "STELLA McCATANEY MEN",
        type: "Coat",
        strikedprice: "US $1.832,00",
        discount: "38% OFF",
        price: "US $1.120,00",
    },
    {
        img: "https://www.yoox.com/images/items/14/14189081CP_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "GUCCI",
        type: "Sweater",
        strikedprice: "US $4.903,00",
        discount: "47% OFF",
        price: "US $ 2.550,00",
    },
    {
        img: "https://www.yoox.com/images/items/14/14201392TF_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "FENDI",
        type: "Turtelneck",
        strikedprice: "US $1.062,00",
        discount: "42% OFF",
        price: "US $ 611,00",
    },
    {
        img: "https://www.yoox.com/images/items/14/14195648MB_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "GUCCI",
        type: "Sweater",
        strikedprice: "US $ 4.220,00",
        discount: "38% OFF",
        price: "US $ 2.616,00",
    },
    {
        img: "https://www.yoox.com/images/items/13/13693721NB_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "BRUNELLO CUCINELLI",
        type: "Denim pants",
        strikedprice: "US $1.489,00",
        discount: "42% OFF",
        price: "US $852,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12735363LF_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "GIVENCHY",
        type: "Hooded sweatshirt",
        strikedprice: "US $2.110,00",
        discount: "41% OFF",
        price: "US $1.225,00",
    },
    {
        img: "https://www.yoox.com/images/items/12/12695025HJ_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VERSACE",
        type: "Sweater",
        strikedprice: "US $843,00",
        discount: "40% OFF",
        price: "US $498,00",
    },
    {
        img: "https://www.yoox.com/images/items/17/17170515GQ_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "VALENTINO GARAVANI",
        type: "Sneakers",
        strikedprice: "US $1.065,00",
        discount: "33% OFF",
        price: "US $707,00",
    },
]

data1.forEach((ele) => {
    let container1 = document.getElementById("container1");
    let box1 = document.createElement("div");
    box1.setAttribute("class", "box");
    let img1 = document.createElement("img");
    let name1 = document.createElement("h3");
    let type1 = document.createElement("p");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "div")
    let strikedprice1 = document.createElement("p");
    strikedprice1.setAttribute("class", "line")
    let discount1 = document.createElement("p");
    let price1 = document.createElement("p");
    price1.setAttribute("class", "price");

    name1.setAttribute("class","back");
    type1.setAttribute("class","back");
    discount1.setAttribute("class","back");




    img1.src = ele.img;
    img1.height="250px"
    name1.innerText = ele.name;
    type1.innerText = ele.type;
    strikedprice1.innerText = ele.strikedprice;
    discount1.innerText = ele.discount;
    price1.innerText = ele.price;
    // console.log(img1.src,name1.innerText,price1,type1,strikedprice1)

    div1.append(strikedprice1, discount1);
    box1.append(img1, name1, type1, div1, price1);
    container1.append(box1);

})

var data2 = [
    {
        img: "https://www.yoox.com/images/items/14/14193255PC_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "OFF WHITE",
        type: "Sweater",
        strikedprice: "US $2.061,00",
        discount: "46% OFF",
        price: "US $1.093,00",
    },
    {
        img: "https://www.yoox.com/images/items/41/41946235CN_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "STELLA McCATANEY MEN",
        type: "Coat",
        strikedprice: "US $1.832,00",
        discount: "38% OFF",
        price: "US $1.120,00",
    },
    {
        img: "https://www.yoox.com/images/items/14/14189081CP_14_f.jpg?impolicy=crop&width=306&height=390",
        name: "GUCCI",
        type: "Sweater",
        strikedprice: "US $4.903,00",
        discount: "47% OFF",
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
    div.setAttribute("class", "division")
    let strikedprice = document.createElement("p");
    strikedprice.setAttribute("class", "line")
    let discount = document.createElement("p");
    let price = document.createElement("p");
    price.setAttribute("class", "price");

    name.setAttribute("class","back");
    type.setAttribute("class","back");
    discount.setAttribute("class","back");

    img.src = el.img;
    img.height="250px"
    name.innerText = el.name;
    type.innerText = el.type;
    strikedprice.innerText = el.strikedprice;
    discount.innerText = el.discount;
    price.innerText = el.price;

    div.append(strikedprice, discount);
    box.append(img, name, type, div, price);
    container2.append(box);

})