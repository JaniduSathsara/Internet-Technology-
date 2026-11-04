// const customerNames = []
// const itemsArray = []

// function clickMeButton() {
//     let txtName = document.getElementById("txtName").value;
//     // document.getElementById("lblCustomerNames").innerHTML += `<li>${txtName}</li>`
//     customerNames.push(txtName)
//     loadNames();
// }

// function loadNames() {
//     document.getElementById("lblCustomerNames").innerHTML = "";
//     for (let cusName of customerNames) {
//         document.getElementById("lblCustomerNames").innerHTML += `<li>${cusName}</li>`
//     }

// }

// ///////////////////////////////////////////////////////

// function ItemAddButton() {
//     let iName = document.getElementById("itemName").value;
//     itemsArray.push(iName)
//     loadItems();
// }

// function loadItems() {
//     document.getElementById("lblitem").innerHTML = "";
//     for (let itemsN of itemsArray) {
//         document.getElementById("lblitem").innerHTML += `<li>${itemsN}</li>`
//     }

// }

//////////////////////////////////////////////////////////////
const customers = [];

function AddCustomer(){
    let cusID = document.getElementById("ID").value;
    let cusName = document.getElementById("Name").value;
    let cusAge = document.getElementById("Age").value;
    let cusAddress = document.getElementById("Address").value;
    let cusSalary = document.getElementById("Salary").value;

    let customer = {
        ID: cusID,
        Name: cusName,
        Age: cusAge,
        Address: cusAddress,
        Salary: cusSalary
    }
    customers.push(customer);
    console.log(customers);
    
}