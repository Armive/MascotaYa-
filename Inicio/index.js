fechaActual = new Date();
//divs
perrosdiv = document.getElementById("perros");
const gatosdiv = document.getElementById("gatos");
const pajarosdiv = document.getElementById("pajaros");
const accesoriosdiv = document.getElementById("accesorios");

//  objetos
// perros
class Productos {
    constructor(nombre, id, precio, foto, descuento = 0, href = "#") {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.foto = foto;
        this.descuento = descuento;
        this.href = href;
    }
}

let bergamasco = new Productos(
    "Pastor bergamasco",
    "pastor-bergamasco",
    2000000,
    "./Mascotas/1.png"
);
let chihuahua = new Productos(
    "Chihuahua",
    "chihuahua",
    1500000,
    "./Mascotas/2.png"
);
let boxer = new Productos("Boxer", "boxer", 2000000, "./Mascotas/3.png");
let beagle = new Productos("Beagle", "beagle", 1700000, "./Mascotas/4.png");
let arrayPerros = [bergamasco, chihuahua, boxer, beagle];
// gatos
let abisinio = new Productos(
    "Abisinio",
    "abisinio",
    1300000,
    "./Mascotas/5.png"
);
let bengali = new Productos("Bengali", "bengali", 1499000, "./Mascotas/6.png");
let burmes = new Productos("Búrmes", "burmes", 1400000, "./Mascotas/7.png");
let balines = new Productos("Balines", "balines", 1700000, "./Mascotas/8.png");
let arrayGatos = [abisinio, bengali, burmes, balines];
// aves
let canario = new Productos("Canario", "canario", 200000, "./Mascotas/9.png");
let loro = new Productos("Loro", "loro", 300000, "./Mascotas/10.png");
let periquito = new Productos(
    "Periquito",
    "periquito",
    200000,
    "./Mascotas/11.png"
);
let cacatua = new Productos("Cacatua", "cacatua", 400000, "./Mascotas/12.png");
let arrayPajaros = [canario, loro, periquito, cacatua];

// accesorios
let collar = new Productos("Collar", "collar", 13000, "./Mascotas/13.png");
let gorrito = new Productos("Gorrito", "gorrito", 10900, "./Mascotas/14.png");
let pelota = new Productos("Pelota", "pelota", 9600, "./Mascotas/15.png");
let frisby = new Productos("Frisby", "frisby", 12000, "./Mascotas/16.png");
let arrayAccesorios = [collar, gorrito, pelota, frisby];
// algoritmo
function ofertasPerros(descuento) {
    arrayPerros.forEach((Element) => {
        Element.descuento = descuento;
    });
}
function ofertasGatos(descuento) {
    arrayGatos.forEach((Element) => {
        Element.descuento = descuento;
    });
}
function ofertasAves(descuento) {
    arrayPajaros.forEach((Element) => {
        Element.descuento = descuento;
    });
}
function ofertasAccesorios(descuento) {
    arrayAccesorios.forEach((Element) => {
        Element.descuento = descuento;
    });
}
// ofertas
if (
    fechaActual.getDate() >= 5 &&
    fechaActual.getDate() <= 15 &&
    fechaActual.getMonth() == 0
) {
    ofertasGatos(20);
}
if (
    fechaActual.getDate() >= 1 &&
    fechaActual.getDate() <= 10 &&
    fechaActual.getMonth() == 1
) {
    ofertasAccesorios(20);
}
if (
    fechaActual.getDate() >= 15 &&
    fechaActual.getDate() <= 20 &&
    fechaActual.getMonth() == 2
) {
    ofertasAccesorios(30);
    ofertasAves(30);
    ofertasPerros(30);
    ofertasGatos(30);
}
if (
    fechaActual.getDate() >= 13 &&
    fechaActual.getDate() <= 25 &&
    fechaActual.getMonth() == 3
) {
    ofertasGatos(12);
}
if (
    fechaActual.getDate() >= 20 &&
    fechaActual.getDate() <= 25 &&
    fechaActual.getMonth() == 4
) {
    ofertasPerros(20);
    ofertasGatos(30);
}
if (
    fechaActual.getDate() >= 10 &&
    fechaActual.getDate() <= 15 &&
    fechaActual.getMonth() == 5
) {
    ofertasPerros(13);
}
if (
    fechaActual.getDate() >= 12 &&
    fechaActual.getDate() <= 20 &&
    fechaActual.getMonth() == 6
) {
    ofertasAves(20);
}
if (
    fechaActual.getDate() >= 20 &&
    fechaActual.getDate() <= 25 &&
    fechaActual.getMonth() == 7
) {
    ofertasAccesorios(24);
    ofertasAves(24);
    ofertasPerros(24);
    ofertasGatos(24);
}
if (
    fechaActual.getDate() >= 20 &&
    fechaActual.getDate() <= 25 &&
    fechaActual.getMonth() == 8
) {
    ofertasAccesorios(20);
}
if (
    fechaActual.getDate() >= 25 &&
    fechaActual.getDate() <= 30 &&
    fechaActual.getMonth() == 9
) {
    ofertasGatos(19);
}
if (
    fechaActual.getDate() >= 2 &&
    fechaActual.getDate() <= 7 &&
    fechaActual.getMonth() == 10
) {
    ofertasPerros(25);
}
if (
    fechaActual.getDate() >= 15 &&
    fechaActual.getDate() <= 25 &&
    fechaActual.getMonth() == 11
) {
    ofertasAccesorios(28);
    ofertasAves(28);
    ofertasPerros(28);
    ofertasGatos(28);
}

if (
    fechaActual.getDay() == 5 &&
    fechaActual.getDate() >= 24 &&
    fechaActual.getDate() <= 30 &&
    fechaActual.getMonth() == 10
) {
    ofertasAccesorios(20);
    ofertasAves(20);
    ofertasPerros(20);
    ofertasGatos(20);
}

// mostrar
// perros
arrayPerros.forEach((ahora) => {
    if (ahora.descuento > 0) {
        ahoraPrecio = ((100 - ahora.descuento) * ahora.precio) / 100;
        let perroAhora = `<a class="mascota" href=${ahora.href} >${ahora.descuento}% <img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre} </p> <p> <h5>Antes: <span>$${ahora.precio} </span> </h5></p> <p> <h5>Ahora: $${ahoraPrecio}  </h5> </p> </a>`;
        perrosdiv.innerHTML += perroAhora;
    } else {
        let perroAhora = `<a class="mascota" href=${ahora.href} ><img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre}</p> <h4><p>$${ahora.precio}</h4> </p></a>`;
        perrosdiv.innerHTML += perroAhora;
    }
});
perrosdiv.innerHTML += `<a class="mas" href="../Tienda/index.html">Ver mas</a>`;
//gato

arrayGatos.forEach((ahora) => {
    if (ahora.descuento > 0) {
        ahoraPrecio = ((100 - ahora.descuento) * ahora.precio) / 100;
        let gatoAhora = `<a class="mascota" href=${ahora.href} >${ahora.descuento}% <img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre} </p> <p><h5> Antes: <span>$${ahora.precio} </span> </h5></p> <p><h5> Ahora: $${ahoraPrecio}  </h5> </p> </a>`;
        gatosdiv.innerHTML += gatoAhora;
    } else {
        let gatoAhora = `<a class="mascota" href=${ahora.href} ><img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre}</p> <p><h4> $${ahora.precio} </h4> </p></a>`;
        gatosdiv.innerHTML += gatoAhora;
    }
});
gatosdiv.innerHTML += `<a class="mas" href="../Tienda/index.html">Ver mas</a>`;

//PAJAROS
arrayPajaros.forEach((ahora) => {
    if (ahora.descuento > 0) {
        ahoraPrecio = ((100 - ahora.descuento) * ahora.precio) / 100;
        let pajaroAhora = `<a class="mascota" href=${ahora.href} >${ahora.descuento}% <img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre} </p> <p> <h5>Antes: <span>>$${ahora.precio} </span> </h5></p> <p> <h5>Ahora: $${ahoraPrecio} </h5>  </p> </a>`;
        pajarosdiv.innerHTML += pajaroAhora;
    } else {
        let pajaroAhora = `<a class="mascota" href=${ahora.href} ><img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre}</p> <p><h4>$${ahora.precio} </h4></p></a>`;
        pajarosdiv.innerHTML += pajaroAhora;
    }
});
pajarosdiv.innerHTML += `<a class="mas" href="../Tienda/index.html">Ver mas</a>`;

// accesorios
arrayAccesorios.forEach((ahora) => {
    if (ahora.descuento > 0) {
        ahoraPrecio = ((100 - ahora.descuento) * ahora.precio) / 100;
        let accesorioAhora = `<a class="mascota" href=${ahora.href} >${ahora.descuento}% <img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre} </p> <p> <h5> Antes: <span>$${ahora.precio} </span> </h5></p> <p><h5> Ahora: $${ahoraPrecio} </h5>  </p> </a>`;
        accesoriosdiv.innerHTML += accesorioAhora;
    } else {
        let accesorioAhora = `<a class="mascota" href=${ahora.href} ><img src=${ahora.foto} alt=${ahora.nombre}> <p class="p">${ahora.nombre}</p> <p><h4>$${ahora.precio} </h4></p></a>`;
        accesoriosdiv.innerHTML += accesorioAhora;
    }
});
accesoriosdiv.innerHTML += `<a class="mas" href="../Tienda/index.html">Ver mas</a>`;
