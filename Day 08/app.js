const customerNames = []
const itemsArray = []

function clickMeButton() {
    let txtName = document.getElementById("txtName").value;
    // document.getElementById("lblCustomerNames").innerHTML += `<li>${txtName}</li>`
    customerNames.push(txtName)
    loadNames();
}

function loadNames() {
    document.getElementById("lblCustomerNames").innerHTML = "";
    for (let cusName of customerNames) {
        document.getElementById("lblCustomerNames").innerHTML += `<li>${cusName}</li>`
    }

}
///////////////////////////////////////////////////////

function ItemAddButton() {
    let iName = document.getElementById("itemName").value;
    itemsArray.push(iName)
    loadItems();
}

function loadItems() {
    document.getElementById("lblitem").innerHTML = "";
    for (let itemsN of itemsArray) {
        document.getElementById("lblitem").innerHTML += `<li>${itemsN}</li>`
    }

}