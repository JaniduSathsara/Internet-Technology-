console.log("hi");

fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
    console.log(data)
    loadSection(data)

});



function loadSection(data) {
    let body = ``

    data.forEach(element => {

        body += `
            <div class="col">
                <section class="card" style="max-width: 320px">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${element.title}</h4>
                        <p class="card-text">${element.description}</p>
                        <button onclick="btnBuy()" class="btn-solid theme-primary">${element.price}- Buy Now</button>
                    </div>
                </section>
            </div>
        `
    });

    document.getElementById("sectionData").innerHTML = body;
}

function btnBuy() {
    Swal.fire({
        title: "Title!",
        text: "Modal with a custom image.",
        imageUrl: `${element.image}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
}