
//let detailObj1 = {};
let detailObj2 = {};

// document.getElementById("form1").addEventListener("click",leftdata);
// var details1 = JSON.parse(localStorage.getItem("shippingDetails1")) || [];
// function leftdata()
// {
//     detailObj1 = {
//           street : document.getElementById("street").value,
//           city : document.getElementById("city").value,
//           country : document.getElementById("country").value,
//     };

    
//     details1.push(detailObj1);
//     localStorage.setItem("shippingDetails1", JSON.stringify(details1));
// }
// console.log("detailObj1:",detailObj1);


document.getElementById("form2").addEventListener("submit", data);
var details2 = JSON.parse(localStorage.getItem("shippingDetails2")) || [];

function data()
{
    event.preventDefault();
    detailObj2 = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        state : document.getElementById("state").value,
        zip : document.getElementById("zip").value,
    };

    console.log("detailObj2:",detailObj2);
    details2.push(detailObj2);
    localStorage.setItem("shippingDetails2", JSON.stringify(details2));
    // window.location.href = "/layouts/payment.html";
}
let products_detail=JSON.parse(localStorage.getItem("products"));
let total=document.getElementById("total");
total.innerText=products_detail.length;

let sum=0;
for(let i=0;i<products_detail.length;i++){
    sum=sum+products_detail[i].price;
}
document.getElementById("sub_total").innerText=sum;



let checkout=()=>{
    window.location.href=("/payment.html")
}
