
const accordion = document.getElementsByClassName("contentBx");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}



var shop = [
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1564_360x.jpg?v=1643170743",
        gender: "men",
        brand: "YOOX",
        color: "red",
        size: "s",
        name: "Dark Brown Solid Patched Casual T-Shirt",
       price:"US $1399",
        strikedoffprice: "1899",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2192_20509851-b608-4052-b7b9-7ab8efb94241_360x.jpg?v=1643175668",
        gender: "men",
        brand: "YOOX",
        color: "red",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
       price:"US $1329",
        strikedoffprice: "1899",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2380_ea0fe150-74c6-4e8d-9909-620a35df0e1a_360x.jpg?v=1643175668",
        gender: "men",
        brand: "YOOX",
        color: "grey",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
       price:"US $1259",
        strikedoffprice: "1799",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/158435_00f4a1b3f50f4cd4a685d472def093f3_image1_zoom_360x.jpg?v=1646478437",
        gender: "men",
        brand: "K Denim",
        color: "white",
        size: "s",
        name: "Basic Skinny Jeans",
       price:"US $699",
        strikedoffprice: "1099",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/167205_140d6dc78b3a44d085d2179fa05732f8_image1_zoom_360x.jpg?v=1631100242",
        gender: "men",
        brand: "K Denim",
        color: "sky blue",
        size: "s",
        name: "Light-Wash Cropped Denim Jeans",
       price:"US $800",
        strikedoffprice: "1399",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161660_8dd9306099884f08ac83e9833a476c66_image1_zoom_360x.jpg?v=1631103586",
        gender: "men",
        brand: "BLUE SAINT",
        color: "yellow",
        size: "s",
        name: "Side Tape Slim Fit Jogger",
       price:"US $550",
        strikedoffprice: "999",
        type:"clothing",
    },
    {
        type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/163191_5392f71652b94c36894d1edbc86fbde1_image1_zoom_360x.jpg?v=1631114560",
        gender: "men",
        brand: "BLUE SAINT",
        color: "brown",
        size: "s",
        name: "Stay Cool Text Print T-Shirt",
       price:"US $250",
        strikedoffprice: "499",
    },
    {
        type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161672_aff8701ee02542ebafea272b68255eb7_image1_zoom_360x.jpg?v=1631103565",
        gender: "men",
        brand: "BLUE SAINT",
        color: "red",
        size: "s",
        name: "Basic Casual Slim Fit Jogger",
       price:"US $550",
        strikedoffprice: "999",
    },
    {
        type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/0U9A2587_360x.jpg?v=1634749626",
        gender: "men",
        brand: "BLUE SAINT",
        color: "grey",
        size: "s",
        name: "Blue Saint Chambray Patch Pocket Casual Shirt",
       price:"US $800",
        strikedoffprice: "1599",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_2593_3ab578f3-2ee5-4a57-9b3c-c213c51880b9_360x.jpg?v=1635999851",
        gender: "men",
        brand: "BLUE SAINT",
        color: "darkblue",
        size: "s",
        name: "Solid Ocean Blue Plain Basic Casual Denim Shirt",
       price:"US $600",
        strikedoffprice: "1499",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1352_360x.jpg?v=1643171045",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Patch Pocket Corduroy Jacket",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2223_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
       price:"US $1259",
        strikedoffprice: "1799",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1817_360x.jpg?v=1643170741",
        gender: "men",
        brand: "KOOVS",
        color: "white",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
       price:"US $1329",
        strikedoffprice: "1899",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1352_360x.jpg?v=1643171045",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Patch Pocket Corduroy Jacket",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2223_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
       price:"US $1259",
        strikedoffprice: "1799",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1817_360x.jpg?v=1643170741",
        gender: "men",
        brand: "KOOVS",
        color: "white",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
       price:"US $1329",
        strikedoffprice: "1899",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2112_360x.jpg?v=1643170740",
        gender: "men",
        brand: "KOOVS",
        color: "darkgreen",
        size: "s",
        name: "Notch Lapel Forest Green Luxe Spread Collar Satin Shirt",
       price:"US $1259",
        strikedoffprice: "1799",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1845_360x.jpg?v=1643171196",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Pastel Patched Casual Wear Stylish Shirt",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2409_360x.jpg?v=1643176212",
        gender: "men",
        brand: "KOOVS",
        color: "orange",
        size: "s",
        name: "Earthy Patched Casual Wear Funky Shirt",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0118_3c6369fb-31c8-47eb-91b3-fc5c138a3565_360x.jpg?v=1647928125",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Pastle Green Casual Wear Smart Shirt",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0061_c227930a-93d1-4af9-8b1d-5beb08fa3900_360x.jpg?v=1647928124",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Hot Black Must Have Solid Shirt",
       price:"US $1399",
        strikedoffprice: "1999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0033_360x.jpg?v=1647928124",
        gender: "men",
        brand: "KOOVS",
        color: "brown",
        size: "s",
        name: "Dark Brown Solid Patched Casual T-Shirt",
       price:"US $1999",
        strikedoffprice: "2999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1564_360x.jpg?v=1643170743",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Dark Brown Solid Patched Casual T-Shirt",
       price:"US $1399",
        strikedoffprice: "1899",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2192_20509851-b608-4052-b7b9-7ab8efb94241_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
       price:"US $1329",
        strikedoffprice: "1899",
    }, 
    { type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2380_ea0fe150-74c6-4e8d-9909-620a35df0e1a_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
       price:"US $1259",
        strikedoffprice: "1799",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/170846_e8234b215ce840d7a2493fb691ad987e_image1_zoom_360x.jpg?v=1631102332",
        gender: "men",
        brand: "FUGAZEE",
        color: "white",
        size: "s",
        name: "Skin Friendly And Breathable",
       price:"US $850",
        strikedoffprice: "1699",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_4347_360x.jpg?v=1634749590",
        gender: "men",
        brand: "FUGAZEE",
        color: "blue",
        size: "s",
        name: "Electric Blue V-Neck Tee",
       price:"US $600",
        strikedoffprice: "1699",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_5661_360x.jpg?v=1634749589",
        gender: "men",
        brand: "FUGAZEE",
        color: "green",
        size: "s",
        name: "Olive Patched V-Neck Tee",
       price:"US $600",
        strikedoffprice: "1199",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_5172_fc258cc0-1900-41a4-8b96-2ea221b365ce_360x.jpg?v=1634749587",
        gender: "men",
        brand: "FUGAZEE",
        color: "brown",
        size: "s",
        name: "Charcoal Bulletholes Scoop Neck Tee",
       price:"US $650",
        strikedoffprice: "1199",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_8250_360x.jpg?v=1634749616",
        gender: "men",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
       price:"US $550",
        strikedoffprice: "999",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_7760_360x.jpg?v=1634749615",
        gender: "men",
        brand: "KULTPRIT",
        color: "grey",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
       price:"US $350",
        strikedoffprice: "699",
    },
    {  type:"clothing",
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/171951_226c514b8b80445792ea5ed7945b6073_image1_super_zoom2_360x.jpg?v=1634749610",
        gender: "men",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
       price:"US $419",
        strikedoffprice: "699",
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
    document.querySelector("#container").innerHTML = "";
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
        document.querySelector("#container").append(box);
    });
}
