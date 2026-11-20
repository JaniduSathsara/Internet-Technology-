// console.log("hi");

// localStorage.clear()

// localStorage.setItem("name","Janidu")

// let sname = localStorage.getItem("name")

// console.log(sname);

////////////////////////////////////////////////

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

