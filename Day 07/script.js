// console.log("hii");

// -------------- OBJECT ARRAYS IN JavaScript-------------------//

/* let customer = {
    name : "Janidu",
    age : "20",
    address : "Panadura",
    contact : "0784512354",
    salary : 750000
}
 */
//-------------------------------------------------------------//

let customerList=[];

function AddButton() {
    // console.log("Add Student");

    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let salary = document.getElementById("txtSalary").value;
    let address = document.getElementById("txtAddress").value;
    let contact = document.getElementById("txtContact").value;

    console.log(name);
    console.log(age);
    console.log(salary);
    console.log(address);
    console.log(contact);
    
    let customers =  {
        name:name,
        age:age,
        salary:salary,
        address:address,
        contact:contact
    };

    customerList.push(customers);
    console.log(customerList);
    

}