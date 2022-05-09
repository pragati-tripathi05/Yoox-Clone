// local_data=JSON.parse(localStorage.getItem("cart"));
// local_data=[{
//     images:"https://www.yoox.com/images/items/12/12701727HA_14_f.jpg?impolicy=crop&width=306&height=390",
//     title:"VOTEGA VENETA",
//     type:"PAttend SHIRT",
//     stock:"LAST ONE",
//     color:"YELLOW",
//     size:'S',
//     prize:"$78",
// },
// {
//     images:"https://www.yoox.com/images/yoox80/banners/6825_1_KarlLagerfeld_M_Tris.jpg?634485886601286852#width=473&height=660",
//     title:"VOTEGA VENETA",
//     type:"PAttend SHIRT",
//     stock:"LAST ONE",
//     color:"YELLOW",
//     size:'S',
//     prize:"$88",
// },
// {
//     images:"https://www.yoox.com/images/items/14/14193255PC_14_f.jpg?impolicy=crop&width=306&height=390",
//     title:"VOTEGA VENETA",
//     type:"PAttend SHIRT",
//     stock:"LAST ONE",
//     color:"YELLOW",
//     size:'S',
//     prize:"$98",
// }
// ]
let local_data = JSON.parse(localStorage.getItem("products"));
let total=0;
let gift = () => {
    // alert("Addded")
    var click_g = document.getElementById("gift-add").innerText = "GIFT ADDED With Product Thank For Chooseing Us";
    click_g = true
    localStorage.setItem("total_price",(total+100));
    let after_gift=JSON.parse(localStorage.getItem("total_price"));
    show_total(after_gift);
    alert("Gift added With Your Items");
}

// gift



// console.log(local_data)
let append = ((local_data,key) => {
    let container = document.getElementById("items");
    container.innerHTML = null;
    document.getElementById("length").innerText =local_data.length;
    document.getElementById("length1").innerText = local_data.length;
    total=0;
    local_data.map(function (ele, i) {
        total=total+ele.price;
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image1;
        let p = document.createElement("p");
        p.innerText = ele.title;
        let stock = document.createElement("p");
        stock.innerText = "Availibility   :" + ele.stock
        stock.style.textDecorationLine = "yellow"
        let p1 = document.createElement("p");
        p1.innerText = ele.color
        let p2 = document.createElement("p");
        p2.innerText = ele.size;
        p3 = document.createElement("p");
        p3.innerText = ele.price;
        let btn = document.createElement("button");
        btn.innerText = "+"
        btn.style.padding="7px 20px 7px 20px"
        btn.style.color="white"
        btn.style.backgroundColor="black"
        btn.addEventListener("click", function () {
            p_repeat(ele);
        });


        btn.setAttribute("id", "addmore")
        let remove = document.createElement("button");
        remove.innerText = "- Remove Item"
        remove.style.color="white";
        remove.style.backgroundColor="black"
        remove.addEventListener("click",function(){
            p_remove(ele,i);
        })

        let gap = document.createElement("p")
        div1.append(img);
        div2.append(p, stock);
        div3.append(p1);
        div4.append(btn, gap, remove);
        div5.append(p3)
        container.append(div1, div2, div3, div4, div5);
    })
    localStorage.setItem("total_price",total);
    total=JSON.parse(localStorage.getItem("total_price"));
    show_total(total);
});
append(local_data,false)
function show_total(price){
    document.getElementById("total_p").innerText=price;
}
// end gift

// Product repeat
let p_repeat = (ele) => {
    let data = JSON.parse(localStorage.getItem("products"));
    data.push(ele)
    localStorage.setItem("products", JSON.stringify(data));
    append(data,false );
    alert("Product Repeated")
}

// end repeat

let chekout=()=>{
    window.location.href=("checkout.html")
}


let p_remove=(ele,i)=>{
    event.preventDefault();
    // document.getElementById("container").innerHTML = "";
    local_data.splice(i, 1)
    localStorage.setItem("products", JSON.stringify(local_data))
    append(local_data,false)
    window.location.reload();
}


      
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