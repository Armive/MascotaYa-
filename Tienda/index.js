let caninos=0
let felinos=0
let aves=0
let accesorios=0
class Producto{
    constructor(Nombre,Precio,foto,categoria,Descuento=0,href="#"){
        this.Nombre=Nombre
        this.Precio=Precio
        this.foto=foto
        this.Descuento=Descuento
        this.href=href
        this.categoria=categoria
    }
}
let bergamasco=new Producto('Pastor bergamasco',2000000,'./Imagenes/1.png','caninos')
let chihuahua=new Producto('Chihuahua',1500000,'./Imagenes/2.png','caninos')
let boxer= new Producto('Boxer',2000000,'./Imagenes/3.png','caninos')
let beagle =new Producto('Beagle',1700000,'./Imagenes/4.png','caninos')
let abisinio=new Producto('Abisinio',1300000,'./Imagenes/5.png','felinos')
let bengali=new Producto('Bengali',1499000,'./Imagenes/6.png','felinos')
let burmes=new Producto('Burmés',1400000,'./Imagenes/7.png','felinos')
let balines=new Producto('Balines',1700000,'./Imagenes/8.png','felinos')
let canario=new Producto('Canario',200000,'./Imagenes/9.png','aves')
let loro=new Producto('loro',300000,'./Imagenes/10.png','aves')
let periquito=new Producto('Periquito',200000,'./Imagenes/11.png','aves')
let cacatua=new Producto('Cacatua',400000,'./Imagenes/12.png','aves')
let collar=new Producto('Collar',13000,'./Imagenes/13.png','accesorios')
let gorrito=new Producto('Gorrito',10900,'./Imagenes/14.png','accesorios')
let pelota=new Producto('Pelota',9600,'./Imagenes/15.png','accesorios')
let frisby=new Producto('Frisby',12000,'./Imagenes/16.png','accesorios')
let huesito=new Producto('Huesito',9000,'./Imagenes/17.png','accesorios')
let jaula=new Producto('Jaula',15000,'./Imagenes/18.png','accesorios')
let ratonsito=new Producto('Ratonsito',5000,'./Imagenes/19.png','accesorios')
let huesitoId=new Producto('Hueso de ID',7000,'./Imagenes/20.png','accesorios')
let affenpinscher=new Producto('Affenpinscher',1200000,'./Imagenes/21.png','caninos')
let shibaInuJapones=new Producto("Shiba Inu Japonés",1700000,'./Imagenes/22.png','caninos')
let basenji=new Producto('Basenji',1500000,'./Imagenes/23.png','caninos')
let bassetAzuldeGascuña=new Producto('Basset Azul de Gascuña',1800000,'./Imagenes/24.png','caninos')
let bassetGrifonVandeanoGrande=new Producto('Basset Grifón vandeano (grande)',1300000,'./Imagenes/25.png','caninos')
let bassetGrifonVandeanoPequeño=new Producto('Basset Grifón vandeano (pequeño)',1350000,'./Imagenes/26.png','caninos')
let bassetHound=new Producto('Basset Hound',12000,'./Imagenes/27.png','caninos')
let bassetLeonadoDeBretaña=new Producto('Basset Leonado De Bretaña',1400000,'./Imagenes/28.png','caninos')
let beauceron=new Producto('Beauceron',1600000,'./Imagenes/29.png','caninos')
let bedlingtonTerrier=new Producto('Bedlington Terrier',1300000,'./Imagenes/30.png','caninos')
const productos=[bergamasco,chihuahua,boxer,beagle,abisinio,bengali,burmes,balines,canario,loro,periquito,cacatua,collar,gorrito,pelota,frisby,huesito,jaula,ratonsito,huesitoId,affenpinscher,shibaInuJapones,basenji,bassetAzuldeGascuña,bassetGrifonVandeanoGrande,bassetGrifonVandeanoPequeño,bassetHound,bassetLeonadoDeBretaña,beauceron,bedlingtonTerrier]
const main=document.getElementById('venta')


function ofertasPerros(descuento) {
    productos.forEach(Element => {
        if (Element.categoria=='caninos') {
            Element.Descuento=descuento    
        }
    })
}
function ofertasGatos(descuento){
    productos.forEach(Element => {
        if(Element.categoria=='felinos'){
            Element.Descuento=descuento
        }
    }) 
}
function ofertasAves(descuento) {
    productos.forEach(Element => {
        if (Element.categoria=='aves') {
            Element.Descuento=descuento
        }
    });
}
function ofertasAccesorios(descuento) {
    productos.forEach(Element => {
        if (Element.categoria=='accesorios') {
            Element.Descuento=descuento
        }
    });
}
ofertasPerros(10)
ofertasGatos(15)
ofertasAves(20)
ofertasAccesorios(50)



productos.forEach((producto)=>{
    if (producto.Descuento===0) {
        let inner=`<a href=${producto.href} class="producto" id=${producto.Nombre} ><img src=${producto.foto} alt=${producto.Nombre}>${producto.Nombre}<p><h4>$${producto.Precio}</h4></p></a>`
        main.innerHTML+=inner
    }else{
        let descuento=(100-producto.Descuento)*producto.Precio/100
        let inner=`<a href=${producto.href} class="producto" id=${producto.Nombre}><p>${producto.Descuento}% </p><img src=${producto.foto} alt=${producto.Nombre} ><p>${producto.Nombre} </p><p><h5>Precio normal: <span>$${producto.Precio}<span></h5><p><p><h5>Precio ahora: $${descuento} </h5></p></a>`
        main.innerHTML+=inner
    }
})

document.addEventListener('keyup',e =>{
    if (e.target.matches('#buscador')) {
        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".producto").forEach(Element=>{
            
            Element.id.toLowerCase().includes(e.target.value.toLowerCase())
                ? Element.classList.remove('filtro')
                :Element.classList.add('filtro')
        })
    }
})