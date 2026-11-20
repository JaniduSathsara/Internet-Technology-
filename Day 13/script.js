console.log("hi");

localStorage.clear()

localStorage.setItem("name","Janidu")

let sname = localStorage.getItem("name")

console.log(sname);

////////////////////Local Storage//////////////////////////

const customerList = [
    {
        name:"janidu",
        age:20,
        city:"panadura"
    },
    {
        name:"Pasidi",
        age:20,
        city:"Negombo"
    },
    {
        name:"Sathsara",
        age:20,
        city:"Colombo"
    },
    {
        name:"saman",
        age:40,
        city:"walana"
    },
    {
        name:"kamal",
        age:45,
        city:"gampaha"
    },

]

let arcustomer = JSON.stringify(customerList)
localStorage.setItem("customerList",arcustomer)

let listOfCustomer = localStorage.getItem("customerList")

console.log(JSON.parse(listOfCustomer));

const customerArray = []

function btnAdd() {
    let cName = document.getElementById("txtName").value
    let cAge = document.getElementById("txtAge").value
    let cCity = document.getElementById("txtCity").value

    customerArray.push(
        {
            name: cName,
            age: cAge,
            city: cCity
        },
    )

    let listCustomers = JSON.stringify(customerArray)
    localStorage.setItem("customerArray", listCustomers)

    // console.log(customerArray);

}

function btnView() {

    let cusArray  = localStorage.getItem("customerArray")
    JSON.stringify(cusArray)
    console.log(cusArray);

    document.getElementById("lblDisplay").innerHTML = `
        <h2>${cusArray}</h2>
        
    `
}

// localStorage.clear()


/////////////////////JavaScript Modules//////////////////////////////


