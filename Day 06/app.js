console.log("hello");


function clickMe(){
    //DOM Manupulatuon..


    //console.log("button clicked");
    //console.log(document.getElementById("txtSample").value);
    
    let txtValue = document.getElementById("txtSample").value;
    
    document.getElementById("lblSection").innerHTML ="<h1>"+txtValue+"</h1>";
}