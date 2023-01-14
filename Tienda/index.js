class Producto{
    constructor(Nombre,Precio,foto,Descuento=0,href="#"){
        this.Nombre=Nombre
        this.Precio=Precio
        this.foto=foto
        this.Descuento=Descuento
        this.href=href
    }
}
let bergamasco=new Producto('Pastor bergamasco',2000000,'./Imagenes/1.png')
let chihuahua=new Producto('Chihuahua',1500000,'./Imagenes/2.png')
let boxer= new Producto('Boxer',2000000,'./Imagenes/3.png')
let beagle =new Producto('Beagle',1700000,'./Imagenes/4.png')
let abisinio=new Producto('Abisinio',1300000,'./Imagenes/5.png')
let bengali=new Producto('Bengali',1499000,'./Imagenes/6.png')
let burmes=new Producto('Burmés',1400000,'./Imagenes/7.png')
let balines=new Producto('Balines',1700000,'./Imagenes/8.png')
let canario=new Producto('Canario',200000,'./Imagenes/9.png')
let loro=new Producto('loro',300000,'./Imagenes/10.png')
let periquito=new Producto('Periquito',200000,'./Imagenes/11.png')
let cacatua=new Producto('Cacatua',400000,'./Imagenes/12.png')
let collar=new Producto('Collar',13000,'./Imagenes/13.png')
let gorrito=new Producto('Gorrito',10900,'./Imagenes/14.png')
let pelota=new Producto('Pelota',9600,'./Imagenes/15.png')
let frisby=new Producto('Frisby',12000,'./Imagenes/16.png')
let huesito=new Producto('Huesito',9000,'./Imagenes/17.png')
let jaula=new Producto('Jaula',15000,'./Imagenes/18.png')
let ratonsito=new Producto('Ratonsito',5000,'./Imagenes/19.png')
let huesitoId=new Producto('Hueso de ID',7000,'./Imagenes/20.png')
let affenpinscher=new Producto('Affenpinscher',1200000,'./Imagenes/21.png')
let shibaInuJapones=new Producto("Shiba Inu Japonés",1700000,'./Imagenes/22.png')
let basenji=new Producto('Basenji',1500000,'./Imagenes/23.png')
let bassetAzuldeGascuña=new Producto('Basset Azul de Gascuña',1800000,'./Imagenes/24.png')
let bassetGrifonVandeanoGrande=new Producto('Basset Grifón vandeano (grande)',1300000,'./Imagenes/25.png')
let bassetGrifonVandeanoPequeño=new Producto('Basset Grifón vandeano (pequeño)',1350000,'./Imagenes/26.png',)
let bassetHound=new Producto('Basset Hound',12000,'./Imagenes/24.png')
let bassetLeonadoDeBretaña=new Producto('Basset Leonado De Bretaña',1400000,'./Imagenes/25.png')
let beauceron=new Producto('Beauceron',1600000,'./Imagenes/28.png')
let bedlingtonTerrier=new Producto('Bedlington Terrier',1300000,'./Imagenes/30.png')
const productos=[bergamasco,chihuahua,boxer,beagle,abisinio,bengali,burmes,balines,canario,loro,periquito,cacatua,collar,gorrito,pelota,frisby,huesito,jaula,ratonsito,huesitoId,affenpinscher,shibaInuJapones,basenji,bassetAzuldeGascuña,bassetGrifonVandeanoGrande,bassetGrifonVandeanoPequeño,bassetHound,bassetLeonadoDeBretaña,beauceron,bedlingtonTerrier]
const main=document.getElementById('venta')
productos.forEach((producto)=>{
    if (producto.Descuento===0) {
        let inner=`<a href=${producto.href} class="producto"><img src=${producto.foto} alt=${producto.Nombre}><p>${producto.Nombre}</p><p><h4>$${producto.Precio}</h4></p></a>`
        main.innerHTML+=inner
    }else{
        let descuento=(100-producto.Descuento)*producto.Precio/100
        let inner=`<a href=${producto.href} class="producto"><p>${producto.Descuento}% </p><img src=${producto.foto} alt=${producto.Nombre} ><p>${producto.Nombre} </p><p><h5>Precio normal: <span>$${producto.Precio}<span></h5><p><p><h5>Precio ahora: $${descuento} </h5></p></a>`
        main.innerHTML+=inner
    }
})