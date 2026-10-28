// console.log("hello");
let calHistory = [];

function clickMeAdd() {

    //DOM Manupulatuon..
    //console.log("button clicked");
    //console.log(document.getElementById("txtSample").value);
    let txtValue = document.getElementById("txtSample1").value;
    let num01 = parseInt(txtValue);
    let txtValue2 = document.getElementById("txtSample2").value;
    let num02 = parseInt(txtValue2);

    let add = num01 + num02;

    document.getElementById("lblSection").innerHTML = "<h1>" + add + "</h1>";

    calHistory.push(add);
    for (let num of calHistory) {
        console.log(num);
        document.getElementById("lblSection2").innerHTML += "<li>" + num + "</li>";
        break;
    }

    console.log(calHistory);
}

function clickMeDiv() {
    let txtValue = document.getElementById("txtSample1").value;
    let num01 = parseInt(txtValue);
    let txtValue2 = document.getElementById("txtSample2").value;
    let num02 = parseInt(txtValue2);

    let subs = num01 - num02;

    document.getElementById("lblSection").innerHTML = "<h1>" + add + "</h1>";
    calHistory.push(subs);
    for (let num of calHistory) {
        console.log(num);
        document.getElementById("lblSection2").innerHTML += "<li>" + num + "</li>";
        break;
    }

    console.log(calHistory);
}


/* for (let num of calHistory) {
    console.log(num);
} */

/* for (let i = 0; i < calHistory.length; i++) {
    console.log(calHistory[i]);
    
} */

/* calHistory.forEach(data => {
    console.log(data);

}); */




