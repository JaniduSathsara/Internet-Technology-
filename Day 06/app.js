console.log("hello");


/* function clickMeAdd() {
    //DOM Manupulatuon..


    //console.log("button clicked");
    //console.log(document.getElementById("txtSample").value);

    let txtValue = document.getElementById("txtSample1").value;
    let num01 = parseInt(txtValue);
    let txtValue2 = document.getElementById("txtSample2").value;
    let num02 = parseInt(txtValue2);

    let add = num01 + num02;

    document.getElementById("lblSection").innerHTML = "<h1>" + add + "</h1>";

}

function clickMeDiv() {
    let txtValue = document.getElementById("txtSample1").value;
    let num01 = parseInt(txtValue);
    let txtValue2 = document.getElementById("txtSample2").value;
    let num02 = parseInt(txtValue2);

    let subs = num01 - num02;

    document.getElementById("lblSection").innerHTML = "<h1>" + subs + "</h1>";

}  */

let calHistory = ["10", "20", "30", "40"];

/* for (let i = 0; i < calHistory.length; i++) {
    console.log(calHistory[i]);
    
} */

/* for (let num of calHistory) {
    console.log(num);
} */

    calHistory.forEach(data =>{
        console.log(data);
        
    });
    

