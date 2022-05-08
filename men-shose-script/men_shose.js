let shoes_data=[
    {
      image1:"https://www.yoox.com/images/items/17/17228192di_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
      price:6548,
      color:"red",
      size:39,
      stock:"67",
      title:"AMBUSH",
      image2:"https://www.yoox.com/images/items/17/17228192DI_14_f.jpg?impolicy=crop&width=387&height=490"
    },
    {
        image1:"https://www.yoox.com/images/items/17/17236516qn_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        price:6548,
        color:"red",
        size:39,
        stock:"76",
        title:"XLRD",
        image2:"https://www.yoox.com/images/items/17/17236516QN_14_f.jpg?impolicy=crop&width=387&height=490"
      },
      {
        image1:"https://www.yoox.com/images/items/17/17176727hh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        price:6548,
        color:"red",
        size:39,
        title:"MEN RED CHIEF",
        stock:"23",
        title:"TYT",
        image2:"https://www.yoox.com/images/items/17/17228192DI_14_f.jpg?impolicy=crop&width=387&height=490"
      },
      {
        image1:"https://www.yoox.com/images/items/17/17216396no_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        price:6548,
        color:"red",
        size:39,
        stock:"787",
        title:"BATA",
        image2:"https://www.yoox.com/images/items/17/17228192DI_14_f.jpg?impolicy=crop&width=387&height=490"
      },
      {
        image1:"https://www.yoox.com/images/items/17/17228041NN_14_f.jpg?impolicy=crop&width=387&height=490",
        price:1199 ,
        color:"Black",
        size:"42 EU",
        title:"JIL SANDLER",
        stock:"767"
      },
      {
        image1:"https://www.yoox.com/images/items/17/17201308SH_14_f.jpg?impolicy=crop&width=306&height=390",
        price:1289 ,
        color:"Orange",
        size:"45 EU",
        title:"Flip FLOP",
        stock:"656"
      },
      {
        image1:"https://www.yoox.com/images/items/17/17176746PX_14_f.jpg?impolicy=crop&width=306&height=390",
        price:2989 ,
        color:"Red",
        size:"45 EU",
        title:"GUCCI Snekaers",
        stock:"656"
      },
      {
        image1:"https://www.yoox.com/images/items/11/11983440KO_14_f.jpg?impolicy=crop&width=387&height=490",
        price:2359,
        color:"Black",
        size:"47 EU",
        title:"Loafers in 100% hammered leather",
        stock:"656"
      },
      {
        image1:"https://www.yoox.com/images/items/11/11983440TX_14_f.jpg?impolicy=crop&width=306&height=390",
        price: 6778,
        color:"BROWN",
        size:"56 DF",
        title:"8 BY YOOX Loofers",
        stock:"656"
      },
      {
        image1:"https://www.yoox.com/images/items/11/11627016FW_14_f.jpg?impolicy=crop&width=306&height=390",
        price:1199 ,
        color:"Black",
        size:"55 UK",
        title:"8 By YOOX o Loffers",
        stock:"656"
      }
]



// Collapsible str
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// colapsible end

let shoes_append=(shoes_data)=>{
    let container=document.querySelector("#card_div-2")
    container.innerHTML=null
    console.log(container)
    shoes_data.forEach(function(ele){
        let div1=document.createElement("div");
        let image1=document.createElement("img");
        let image2=document.createElement("img")
        let title=document.createElement("p");
        let price=document.createElement("p");
        let color=document.createElement("p");
        let size=document.createElement("p");
        let hr=document.createElement("hr")

        image1.src=ele.image1;
        title.innerText="Title: "+ele.title;
        price.innerText="Price:  "+ele.price;
        color.innerText="Color:  "+ele.color;
        size.innerText="Size:  "+ele.size;

        div1.append(image1,hr,title,price,size,color);
        container.append(div1)
        // div1.style.boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"
        div1.addEventListener("click",function(){
            send_card(ele)
        })
    })
}

shoes_append(shoes_data);
console.log(shoes_data)

let card_data=JSON.parse(localStorage.getItem("products"))||[];
let send_card=(ele) =>{
    event.preventDefault();
    card_data.push(ele);
    localStorage.setItem("products",JSON.stringify(card_data));
    alert("Product Added in card..");
    window.location.href="cart.html"
}


// Filter
let lth=()=>{
  shoes_data.sort((a,b) =>{
    if(a.price>b.price){
      return 1
    }
    if(a.price<b.price){
      return -1;
    }
  });
  shoes_append(shoes_data);                
}


let htl=()=>{
  shoes_data.sort((a,b) =>{
    if(a.price>b.price){
      return -1
    }
    if(a.price<b.price){
      return 1;
    }
  })
  shoes_append(shoes_data);
}
// end filter