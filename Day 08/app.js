const customerNames = []

function clickMeButton() {
    let txtName = document.getElementById("txtName").value;
    // document.getElementById("lblCustomerNames").innerHTML += `<li>${txtName}</li>`
    customerNames.push(txtName)
    loadNames();
}

function loadNames(){
    document.getElementById("lblCustomerNames").innerHTML = "";
    for(let cusName of customerNames){
        document.getElementById("lblCustomerNames").innerHTML+=`<li>${cusName}</li>`
    }
    
}

