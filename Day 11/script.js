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
                        <a href="#" class="btn-solid theme-primary">${element.price}- Buy Now</a>
                    </div>
                </section>
            </div>
        `
    });

    document.getElementById("sectionData").innerHTML = body;
}