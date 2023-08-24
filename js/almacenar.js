let agregar = document.getElementById("agregar");
let item = document.getElementById("item");
let limpiar = document.getElementById("limpiar");
let contenedor = document.getElementById("contenedor");
let array = [];

function mostrarItems() {
    let lista = JSON.parse(localStorage.getItem("texto"));
    contenedor.innerHTML += `<li>${lista[lista.length - 1]}</li>`;
}

function forItems() {
    array = JSON.parse(localStorage.getItem("texto"));

    for (let i of array) {
        contenedor.innerHTML += `<li>${i}</li>`;
    }
}

agregar.addEventListener("click", function () {
    array.push(item.value);
    localStorage.setItem("texto", JSON.stringify(array));
    mostrarItems();
    item.value = "";
})

limpiar.addEventListener("click", function () {
    localStorage.clear();
    contenedor.innerHTML = ``;
})

window.addEventListener("load", function () {
    forItems();
})


