//modo oscuro
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click',() =>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode','true')
    } else {
        localStorage.setItem('dark-mode','false')
    }
})

if(localStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark')
    btnSwitch.classList.add('active') 
}else{
    document.body.classList.remove('dark')
    btnSwitch.classList.remove('active')  
}


 
//divs
fechaActual=new Date()
const perrosdiv=document.getElementById('perros')
const gatosdiv=document.getElementById('gatos')
const pajarosdiv=document.getElementById('pajaros')
const accesoriosdiv=document.getElementById('accesorios')
const containers = [perrosdiv, gatosdiv, pajarosdiv, accesoriosdiv]
//  objetos
// perros
class Productos{
    constructor(nombre,id,precio,foto,contenedor,descuento=0){
        this.nombre=nombre
        this.id=id
        this.precio=precio
        this.foto=foto
        this.contenedor = contenedor
        this.descuento=descuento
        this.href = '#'
    }

}

const bergamasco=new Productos('Pastor bergamasco','pastor-bergamasco',2000000,"./Mascotas/1.png", perrosdiv)
const chihuahua=new Productos('Chihuahua','chihuahua',1500000,'./Mascotas/2.png', perrosdiv)
const boxer=new Productos('Boxer','boxer',2000000,'./Mascotas/3.png', perrosdiv)
const beagle=new Productos('Beagle','beagle',1700000,'./Mascotas/4.png', perrosdiv)
const arrayPerros = [bergamasco, chihuahua, boxer, beagle] 
// gatos
const abisinio=new Productos('Abisinio','abisinio',1300000,'./Mascotas/5.png', gatosdiv)
const bengali=new Productos('Bengali','bengali',1499000,'./Mascotas/6.png', gatosdiv)
const burmes=new Productos('Búrmes','burmes',1400000,'./Mascotas/7.png', gatosdiv)
const balines= new Productos('Balines','balines',1700000,'./Mascotas/8.png', gatosdiv)
const arrayGatos = [abisinio, bengali, burmes, balines] 
// aves
const canario=new Productos('Canario','canario',200000,'./Mascotas/9.png', pajarosdiv)
const loro=new Productos('Loro','loro',300000,'./Mascotas/10.png', pajarosdiv)
const periquito=new Productos('Periquito','periquito',200000,'./Mascotas/11.png', pajarosdiv)
const cacatua=new Productos('Cacatua','cacatua',400000,'./Mascotas/12.png', pajarosdiv)

const arrayPajaros = [canario, loro, periquito, cacatua]

// accesorios
const collar=new Productos ('Collar','collar',13000,'./Mascotas/13.png', accesoriosdiv)
const gorrito=new Productos ('Gorrito','gorrito',10900,'./Mascotas/14.png', accesoriosdiv)
const pelota=new Productos ('Pelota','pelota',9600,'./Mascotas/15.png', accesoriosdiv)
const frisby=new Productos ('Frisby','frisby',12000,'./Mascotas/16.png', accesoriosdiv)

const arrayAccesorios = [collar, gorrito, pelota, frisby]

const productos = [bergamasco,chihuahua,boxer,beagle, abisinio,bengali,burmes,balines, canario,loro,periquito,cacatua, collar,gorrito,pelota,frisby]
// algoritmo
function ofertasPerros(descuento) {
    arrayPerros.forEach(Element=>{
        Element.descuento=descuento
    })
}
function ofertasGatos(descuento) {
    arrayGatos.forEach(Element => {
        Element.descuento=descuento  
    })
}
function ofertasAves(descuento) {
    arrayPajaros.forEach(Element => {
        Element.descuento=descuento
    })
}
function ofertasAccesorios(descuento) {
    arrayAccesorios.forEach(Element => {
        Element.descuento=descuento
    })
}
// ofertas
if(fechaActual.getDate()>=5 && fechaActual.getDate()<=15 && fechaActual.getMonth()==0){ 
    ofertasGatos(20)
}
if (fechaActual.getDate()>=1 && fechaActual.getDate()<=10 && fechaActual.getMonth()==1) {
    ofertasAccesorios(20)
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=20 && fechaActual.getMonth()==2) {
    ofertasAccesorios(30)
    ofertasAves(30)
    ofertasPerros(30)
    ofertasGatos(30)
}
if (fechaActual.getDate()>=13 && fechaActual.getDate()<=25 && fechaActual.getMonth()==3) {
    ofertasGatos(12)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==4) {
    ofertasPerros(20)
    ofertasGatos(30)
}
if (fechaActual.getDate()>=10 && fechaActual.getDate()<=15 && fechaActual.getMonth()==5) {
    ofertasPerros(13)
}
if (fechaActual.getDate()>=12 && fechaActual.getDate()<=20 && fechaActual.getMonth()==6) {
    ofertasAves(20)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==7) {
    ofertasAccesorios(24)
    ofertasAves(24)
    ofertasPerros(24)
    ofertasGatos(24)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==8) {
    ofertasAccesorios(20)
}
if (fechaActual.getDate()>=25 && fechaActual.getDate()<=30 && fechaActual.getMonth()==9) {
    ofertasGatos(19)
}
if (fechaActual.getDate()>=2 && fechaActual.getDate()<=7 && fechaActual.getMonth()==10) {
    ofertasPerros(25)
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=25 && fechaActual.getMonth()==11) {
    ofertasAccesorios(28)
    ofertasAves(28)
    ofertasPerros(28)
    ofertasGatos(28)
}

if (fechaActual.getDay()==5 && fechaActual.getDate()>=24 && fechaActual.getDate()<=30 && fechaActual.getMonth()==10) {
    ofertasAccesorios(20)
    ofertasAves(20)
    ofertasPerros(20)
    ofertasGatos(20)
}
// mostrar
// perros
productos.forEach((item) => {
    if(item.descuento>0){
        ahoraPrecio=(100-item.descuento)*item.precio/100
        let itemInner=`<a class="mascota" href=${item.href} > <p>${item.descuento}%</p> <img loading="lazy" src=${item.foto} alt=${item.nombre }> <p>${item.nombre} </p>  <h5>Antes: <span>$${item.precio}</span> </h5><h5>Ahora: $${ahoraPrecio}</h5></a>`
        item.contenedor.innerHTML+= itemInner
    }else{
        let itemInner=`<a class="mascota" href=${item.href} ><img loading="lazy" src=${item.foto} alt=${item.nombre }> <p>${item.nombre}</p> <h4>$${item.precio}</h4></a>`
        item.contenedor.innerHTML+= itemInner
    }
    
})
containers.forEach(itemContainer => itemContainer.innerHTML+=`<a class="mas" href="../Tienda/index.html">Ver mas</a>`);