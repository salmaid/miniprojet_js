var content2 = document.querySelector('.content2');

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}

// Filter :

function filter(category) {
    document.querySelector(".content2").innerHTML = "";
    if (category === "all") {
        courses.forEach((el) => {
            creationCours(el.image, el.title, el.price);
        })
    } else if (category === "HTML" || category === "CSS" || category === "PHP") {
        courses.forEach((el) => {
            if (el.category === category) {
                creationCours(el.image, el.title, el.price);
            }
        })
    }
}

function filterByTitle() {
    let titleCourse = document.getElementById("titleC").value;
    document.querySelector(".content2").innerHTML = "";
    courses.forEach((el) => {
        if (el.title.toString().includes(titleCourse)) {
            creationCours(el.image, el.title, el.price);
        }
    })
}

function filterByPrice() {
    let price = document.getElementById("price").value;
    document.querySelector(".content2").innerHTML = "";
    document.getElementById("valuePrice").innerText = price + "$";
    courses.forEach((el) => {
        if (el.price <= price) {
            creationCours(el.image, el.title, el.price);
        }
    })
}



courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})
