const accordion = document.getElementsByClassName("contentBx");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}
var TopsData = [
{
image_url:
"https://www.yoox.com/images/items/12/12655168md_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Olive Solid Belted Blouse ",
off: "25% off",
price: "100",
strikedoffprice: "$150",
},
{
image_url:
"https://www.yoox.com/images/items/12/12625168dm_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Pink Buttoned Pleated Dobby Peplum Top",
off: "20% off",
price: "200",
strikedoffprice: "$250",
},
{
image_url:
"https://www.yoox.com/images/items/12/12439115pt_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " Wine Embellish High Neck Top",
off: "20% off",
price: "130",
strikedoffprice: "$180",
},
{
image_url:
"https://www.yoox.com/images/items/12/12733716ke_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Pink Ditsy Floral Elasticated Sleeve Wrap",
off: "20% off",
price: "180",
strikedoffprice: "$200",
},
{
image_url:
"https://www.yoox.com/images/items/12/12706016pp_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Turtle Neck Maxi Top - Navy ",
off: "30% off",
price: "130",
strikedoffprice: "$200",
},
{
image_url:
"https://www.yoox.com/images/items/12/12703545xd_14_f.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " Black Poplin Short Sleeve Kimono Top ",
off: "40% off",
price: "80",
strikedoffprice: "$190",
},
{
image_url:
"https://www.yoox.com/images/items/12/12717115bo_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " White Mesh Ruched Smocked Crop Top",
off: "19% off",
price: "139",
strikedoffprice: "$150",
},
{
image_url:
"https://www.yoox.com/images/items/12/12721970mv_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: "Black Embellished Neck Layered Top ",
off: "10% off",
price: "150",
strikedoffprice: "$160",
},
{
image_url:
"https://www.yoox.com/images/items/12/12645197di_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Black Embellished Neck Layered Top",
off: "15% off",
price: "200",
strikedoffprice: "$230",
},
{
image_url:
"https://www.yoox.com/images/items/12/12642343bo_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Blue Cold Shoulder Halter Embellished Top",
off: "10% off",
price: "199",
strikedoffprice: "%179",
},
{
image_url:
"https://www.yoox.com/images/items/12/12642829av_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: "Hot Pink Schiffli Puff Sleeve Top",
off: "10% off",
price: "180",
strikedoffprice: "$200",
},
{
image_url:
"https://www.yoox.com/images/items/12/12648147an_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Pink Floral Ruffled Halter Top",
off: "5% off",
price: "95",
strikedoffprice: "$100",
},
{
image_url:
"https://www.yoox.com/images/items/12/12645004bq_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Wine Mesh Full Sleeve Blouse",
off: "10% off",
price: "150",
strikedoffprice: "$160",
},
{
image_url:
"https://www.yoox.com/images/items/12/12651113ha_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Black Floral Wrap Peplum Top",
off: "8% off",
price: "102",
strikedoffprice: "$120",
},
{
image_url:
"https://www.yoox.com/images/items/12/12664471bd_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " Blush Pink Neck Tie Lace Top ",
off: "19% off",
price: "100",
strikedoffprice: "$119",
},
{
image_url:
"https://www.yoox.com/images/items/12/12647156sh_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Black Floral Pussy Bow Blouse",
off: "12% off",
price: "100",
strikedoffprice: "$112",

},
{
image_url:
"https://www.yoox.com/images/items/12/12646656ew_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Green Schiffli Ruffle Sleeve Top",
off: "9% off",
price: "125",
strikedoffprice: "$135",
},
{
image_url:
"https://www.yoox.com/images/items/12/12642543gi_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Maroon Lace Ruched Sleeve Top ",
off: "21% off",
price: "171",
strikedoffprice: "$190",
},
{
image_url:
"https://www.yoox.com/images/items/12/12660749dn_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " Military Mad Henley T-Shirt",
off: "19% off",
price: "103",
strikedoffprice: "$125",
},
{
image_url:
" https://www.yoox.com/images/items/13/13755356fl_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: " Pink Gingham Pussy Bow Top",
off: "10% off",
price: "75",
strikedoffprice: "$85",
},
{
image_url:
" https://www.yoox.com/images/items/12/12522064se_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Wine Puffed Sleeve Belted Blouse",
off: "19% off",
price: "100",
strikedoffprice: "$119",
},
{
image_url:
"https://www.yoox.com/images/items/12/12326556xp_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: " Yellow Gingham Belted Top ",
off: "15% off",
price: "135",
strikedoffprice: "$150",
},
{
image_url:
"https://www.yoox.com/images/items/12/12557418it_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: "White Satin Strappy Textured Top",
off: "10% off",
price: "100",
strikedoffprice: "$110",
},
{
image_url:
" https://www.yoox.com/images/items/12/12479398fc_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Maroon Ruched Sweetheart Neck Knit Top",
off: "12% off",
price: "78",
strikedoffprice: "$90",
},
{
image_url:
" https://www.yoox.com/images/items/12/12337135fm_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Dusty Pink Front Ruched Peplum Top",
off: "20% off",
price: "160",
strikedoffprice: "$180",
},
{
image_url:
"https://www.yoox.com/images/items/12/12493014uq_14_e.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: "Mustard Blouson Sleeve Buttoned Top ",
off: "50% off",
price: "150",
strikedoffprice: "$300",
},
{
image_url:
"https://www.yoox.com/images/items/12/12576115gc_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: " Blue Dotted Smocked Sleeves Top ",
off: "5% off",
price: "140",
strikedoffprice: "$150",
},
{
image_url:
"https://www.yoox.com/images/items/12/12548777dg_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Pink Striped Belted Wrap Top",
off: "29% off",
price: "149",
strikedoffprice: "$189",
},
{
image_url:
"https://www.yoox.com/images/items/14/14225042vh_14_f.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Red Striped Cuffed Detail Blouse",
off: "20% off",
price: "100",
strikedoffprice: "$140",
},
{
image_url:
"https://www.yoox.com/images/items/12/12343361ek_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Beige Pink Smocked Puff Sleeve Crop Top",
off: "60% off",
price: "80",
strikedoffprice: "$200",
},
{
image_url:
"https://www.yoox.com/images/items/12/12400857mf_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Navy Bow Shoulder",
off: "15% off",
price: "150",
strikedoffprice: "$180",
},
{
image_url:
"https://www.yoox.com/images/items/12/12730373tm_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Slate Blue Neck Tie Up Blouse",
off: "17% off",
price: "143",
strikedoffprice: "$160",
},
{
image_url:
"https://www.yoox.com/images/items/12/12479947dx_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "White Strappy Schiffli Peplum Top",
off: "15% off",
price: "145",
strikedoffprice: "$160",
},
{
image_url:
"https://www.yoox.com/images/items/12/12407025wl_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Blue Bell Sleeve Jacquard Wrap Top",
off: "12% off",
price: "168",
strikedoffprice: "$180",
},
{
image_url:
"https://www.yoox.com/images/items/12/12526878ct_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center ",
name: "Black Puffed Sleeve Belted Blouse",
off: "19% off",
price: "139",
strikedoffprice: "$160",
},
{
image_url:
"https://www.yoox.com/images/items/12/12532439ld_14_r.jpg?width=210&amp;height=272&amp;impolicy=crop&amp;gravity=Center",
name: "Pink Tie Dye Smocked Sleeve Layered Top",
off: "39% off",
price: "110",
strikedoffprice: "$199",
},
];


var cartData = JSON.parse(localStorage.getItem("cart")) || []

TopsData.map(function (elem) {
var box = document.createElement("div");

var img = document.createElement("img");
img.src = elem.image_url;


var name = document.createElement("p");
name.textContent = elem.name;

var off = document.createElement("h5");
off.innerText = elem.off;

var price = document.createElement("h4");
price.innerText = elem.price;


var strikedoffprice = document.createElement("strike");
strikedoffprice.innerText = elem.strikedoffprice;

var cart = document.createElement("button")
cart.innerText = "Add To Bag";
cart.innerText.color = "white"
    cart.style.fontFamily = "Montserrat"
    cart.style.width = "100%"
    cart.style.display = "block"
    cart.style.marginTop = "-6px"
    cart.style.paddingTop = "0px"
    cart.style.backgroundColor = "black"
    cart.style.color = "white"
    cart.style.height = "40px"
    cart.style.border = "none"
cart.addEventListener("click",function(){
cartclick(elem)
})

off.append(strikedoffprice)

box.append(img, name,  off, price, cart );

document.querySelector("#container").append(box);
});

var arr=JSON.parse(localStorage.getItem("completedbag")) || []
function cartclick(elem){
arr.push(elem)
localStorage.setItem("completedbag",JSON.stringify(arr))
window.location.href="cart.html"
}
