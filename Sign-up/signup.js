document.querySelector("form").addEventListener("submit",submitForm)

let existingUsers = JSON.parse(localStorage.getItem("userCreds")) || []

function submitForm(){
    event.preventDefault()
    console.log(existingUsers)

    var userObj = {
        FirstName: document.getElementById("first_name").value,
        LastName: document.getElementById("first_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dob: document.getElementById("dob").value,
        Number:document.getElementById("number").value,
    }
    let present = false
    for(let i=0;i<existingUsers.length;i++){
        if(existingUsers[i].email == userObj.email){
            present = true
            break;
        }
    }

    if(present==true){
        if(userObj.email == ""){
            alert("Please enter credentials")
        }
        else{
            alert("email id already exist")
        }
    }

    else if(present == false){
        if(userObj.email == ""){
            alert("Please enter credentials")
        }
        else 
        {
            alert("signup successfull")
            window.location.href = "login.html"
            existingUsers.push(userObj)
        }
        localStorage.setItem("userCreds",JSON.stringify(existingUsers))
    }

    document.querySelector("input").innerText = null
}