let categorias=''
let caninos=0
let felinos=0
let aves=0
let accesorios=0
let ahoraIdSinGuion=''
let fechaActual=new Date()
class Producto{
    constructor(Nombre,Precio,foto,categoria,id,Descuento=0,href="#"){
        this.Nombre=Nombre
        this.Precio=Precio
        this.foto=foto
        this.Descuento=Descuento
        this.href=href
        this.categoria=categoria
        this.id=id
    }
}
let bergamasco=new Producto('Pastor bergamasco',2000000,'./Imagenes/1.png','caninos','pastor-bergamasco')
let chihuahua=new Producto('Chihuahua',1500000,'./Imagenes/2.png','caninos','chihuahua')
let basenji=new Producto('Basenji',1500000,'./Imagenes/23.png','caninos','basenji')
let boxer= new Producto('Boxer',2000000,'./Imagenes/3.png','caninos','boxer')
let beagle =new Producto('Beagle',1700000,'./Imagenes/4.png','caninos','beagle')
let abisinio=new Producto('Abisinio',1300000,'./Imagenes/5.png','felinos','abinisio')
let bengali=new Producto('Bengali',1499000,'./Imagenes/6.png','felinos','bengali')
let burmes=new Producto('Burmés',1400000,'./Imagenes/7.png','felinos','burmes')
let balines=new Producto('Balines',1700000,'./Imagenes/8.png','felinos','balines')
let canario=new Producto('Canario',200000,'./Imagenes/9.png','aves','canario')
let loro=new Producto('loro',300000,'./Imagenes/10.png','aves','loro')
let periquito=new Producto('Periquito',200000,'./Imagenes/11.png','aves','periquito')
let cacatua=new Producto('Cacatua',400000,'./Imagenes/12.png','aves','cacatua')
let collar=new Producto('Collar',13000,'./Imagenes/13.png','accesorios','collar')
let gorrito=new Producto('Gorrito',10900,'./Imagenes/14.png','accesorios','gorrito')
let pelota=new Producto('Pelota',9600,'./Imagenes/15.png','accesorios','pelota')
let frisby=new Producto('Frisby',12000,'./Imagenes/16.png','accesorios','frisby')
let huesito=new Producto('Huesito',9000,'./Imagenes/17.png','accesorios','huesito')
let jaula=new Producto('Jaula',15000,'./Imagenes/18.png','accesorios','jaula')
let ratonsito=new Producto('Ratonsito',5000,'./Imagenes/19.png','accesorios','ratonsito')
let huesitoId=new Producto('Hueso de ID',7000,'./Imagenes/20.png','accesorios','hueso-de-id')
let affenpinscher=new Producto('Affenpinscher',1200000,'./Imagenes/21.png','caninos','affenpinscher')
let shibaInuJapones=new Producto("Shiba Inu Japonés",1700000,'./Imagenes/22.png','caninos','shiba-Inu-Japones')
let bassetAzuldeGascuña=new Producto('Basset Azul de Gascuña',1800000,'./Imagenes/24.png','caninos','basset-azul-de-gascuña')
let bassetGrifonVandeanoGrande=new Producto('Basset Grifón vandeano (grande)',1300000,'./Imagenes/25.png','caninos','basset-grifon-vandeano-(grande)')
let bassetGrifonVandeanoPequeño=new Producto('Basset Grifón vandeano (pequeño)',1350000,'./Imagenes/26.png','caninos','basset-grifon-vandeano-(pequeño)')
let bassetHound=new Producto('Basset Hound',12000,'./Imagenes/27.png','caninos','basser-hound')
let bassetLeonardoDeBretaña=new Producto('Basset Leonardo De Bretaña',1400000,'./Imagenes/28.png','caninos','basset-leonardo-de-bretaña')
let beauceron=new Producto('Beauceron',1600000,'./Imagenes/29.png','caninos','beauceron')
let bedlingtonTerrier=new Producto('Bedlington Terrier',1300000,'./Imagenes/30.png','caninos','bedlington-terrier')
let bichonBoloñes=new Producto('Bichón Boloñés',1400000,'./Imagenes/31.png','caninos','bichon-boloñes')
let bichonFrise=new Producto('Bichón Frisé',1200000,'./Imagenes/32.png','caninos','bichon-frise')
let bobtail=new Producto('Bobtail (antiguo perro pastor inglés)',1900000,'./Imagenes/33.png','caninos','bobtail-(antiguo-perro-pastor-inglés)')
let borderCollie=new Producto('Border Collie',2600000,'./Imagenes/34.png','caninos','border-collie')
let borderTerrier=new Producto('Border Terrier',1800000,'./Imagenes/35.png','caninos','border-terrier')
let borzoi=new Producto('Borzoi',1950000,'./Imagenes/36.png','caninos','borzoi')
let bostonTerrier=new Producto('Boston Terrier',1700000,'./Imagenes/37.png','caninos','boston-terrier')
let boyerodeBerna=new Producto('Boyero de Berna',2100000,'./Imagenes/38.png','caninos','boyero-de-berna')
let boyerodeFlandes=new Producto('Boyero de Flandes',2000000,'./Imagenes/39.png','caninos','boyero-de-flandes')
let braccoItaliano=new Producto('Bracco italiano',1800000,'./Imagenes/40.png','caninos','bracco-italiano')
let bracoAlemanDePeloCorto=new Producto('Braco alemán de pelo corto',1900000,'./Imagenes/41.png','caninos','braco-aleman-de-pelo-corto')
let bracoAlemanDePeloDuro=new Producto('Braco alemán de pelo duro',2100000,'./Imagenes/42.png','caninos','braco-aleman-de-pelo-duro')
let bracoDeWeimar=new Producto('Braco de Weimar (de pelo corto y suave)',1800000,'./Imagenes/43.png','caninos','braco-de-weimar-(de-pelo-corto-y-suave)')
let bracoHungaro=new Producto('Braco hungaro',1600000,'./Imagenes/44.png','caninos','braco-hungaro')
let bracoHungaroDePeloDuro=new Producto('Braco húngaro de pelo duro',1700000,'./Imagenes/45.png','caninos','braco-hungaro-de-pelo-duro')
let breton=new Producto('Bretón',1200000,'./Imagenes/46.png','caninos','breton')
let buhundNoruego=new Producto('Buhund noruego',1700000,'./Imagenes/47.png','caninos','buhund-noruego')
let bullTerrier=new Producto('Bull Terrier',1200000,'./Imagenes/48.png','caninos','bull-terrier')
let bullTerrierMiniatura=new Producto('Bull Terrier miniatura',1000000,'./Imagenes/49.png','caninos','bull-terrier-miniatura')
let bulldog=new Producto('Bulldog',1300000,'./Imagenes/50.png','caninos','bulldog')
let bulldogFrances=new Producto('Bulldog francés',1200000,'./Imagenes/51.png','caninos','bulldog-frances')
let pastorBelgaMalinois=new Producto('Pastor belga malinois',2100000,'./Imagenes/52.png','caninos','pastor-belga-malinois')
let pastorAleman=new Producto('Pastor aleman',2300000,'./Imagenes/53.png','caninos','pastor-aleman')
let britanicoDePeloCorto=new Producto('Británico de pelo corto',1450000,'./Imagenes/54.png','felinos','britanico-de-pelo-corto')
let burmilla=new Producto('Burmilla',1350000,'./Imagenes/55.png','felinos','burmilla')
let chinchilla=new Producto('Chinchilla',1235000,'./Imagenes/56.png','felinos','chinchilla')
let cornishRex=new Producto('Cornish rex',1300000,'./Imagenes/57.png','felinos','cornish-rex')
let cymric=new Producto('Cymric',1980000,'./Imagenes/58.png','felinos','cymric')
let devonRex=new Producto('Devon Rex',1180000,'./Imagenes/59.png','felinos','devon-rex')
let ExoticoDePeloCorto=new Producto('Exótico de pelo corto',1680000,'./Imagenes/60.png','felinos','Exotico-de-pelo-corto')
let foldEscoces=new Producto('Fold escocés',1223000,'./Imagenes/61.png','felinos','fold-escoces')
let khaoManee=new Producto('Khao Manee',1230000,'./Imagenes/62.png','felinos','khao-Manee')
let korat=new Producto('Korat',1220000,'./Imagenes/63.png','felinos','korat')
let laperm=new Producto('Laperm',1400000,'./Imagenes/64.png','felinos','laperm')
let guacamaya=new Producto('Guacamaya',450000,'./Imagenes/65.png','aves','guacamaya')
let cotorra=new Producto('Cotorra',200000,'./Imagenes/66.png','aves','cotorra')
let guacal=new  Producto('Guacal',70000,'./Imagenes/67.png','accesorios','guacal')
let salvavidasParaPerro=new Producto('Salva vidas para perro', 50000, './Imagenes/68.png', 'accesorios','salva-vidas-para-perro')
let ifetch=new Producto('iFetch',200000,'./Imagenes/69.png','accesorios','ifetch')
let bebederoAutomaticoParaPerros=new Producto('Bebedero Automatico Para Perros',150000,'./Imagenes/70.png','accesorios','bebedero-automatico-para-perros')
let colchonetaRefrigeranteParaPerros=new Producto('Colchoneta Refrigerante para perros', 70000,'./Imagenes/71.png','accesorios','colchoneta-refrigerante-para-perros')
let laserParaGatos=new Producto('Laser Para Gatos',20000,'./Imagenes/72.png','accesorios','laser-para-gatos')
let ratonConControlRemoto=new Producto('Raton controlado a control remoto',30000,'./Imagenes/73.png','accesorios','raton-controlado-a-control-remoto')
const productos=[bergamasco,chihuahua,boxer,beagle,abisinio,bengali,burmes,balines,canario,loro,periquito,cacatua,collar,gorrito,pelota,frisby,huesito,jaula,ratonsito,huesitoId,affenpinscher,shibaInuJapones,basenji,bassetAzuldeGascuña,bassetGrifonVandeanoGrande,bassetGrifonVandeanoPequeño,bassetHound,bassetLeonardoDeBretaña,beauceron,bedlingtonTerrier,bichonBoloñes,bichonFrise,bobtail,borderCollie,borderTerrier,borzoi,bostonTerrier,boyerodeBerna,boyerodeFlandes,braccoItaliano,bracoAlemanDePeloCorto,bracoAlemanDePeloDuro,bracoDeWeimar,,bracoHungaro,bracoHungaroDePeloDuro,breton,buhundNoruego,bullTerrier,bullTerrierMiniatura,bulldog,bulldogFrances,pastorBelgaMalinois,pastorAleman,britanicoDePeloCorto,burmilla,chinchilla,cornishRex,cymric,devonRex,ExoticoDePeloCorto,foldEscoces,khaoManee,korat,laperm,guacamaya,cotorra,guacal,ifetch,bebederoAutomaticoParaPerros,colchonetaRefrigeranteParaPerros,laserParaGatos,ratonConControlRemoto]
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
    })
}
function ofertasAccesorios(descuento) {
    productos.forEach(Element => {
        if (Element.categoria=='accesorios') {
            Element.Descuento=descuento
        }
    })
}

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
function funcionesPerros() {categorias='caninos';valorInicialesCategorias()}
function funcionesGatos() {categorias='felinos'; valorInicialesCategorias()}
function funcionesPajaros() {categorias='aves'; valorInicialesCategorias()}
function funcionesAccesorios(){categorias='accesorios';valorInicialesCategorias()}
function valorInicialesCategorias() {
    document.getElementById('buscador').value=''
    document.getElementById('buscador').classList.remove('escrito')
    filtro()
}

productos.forEach((producto)=>{
    if (producto.Descuento===0) {
        let inner=`<a href=${producto.href} class="producto ${producto.categoria}" id=${producto.id} ><img src=${producto.foto} alt=${producto.Nombre}>${producto.Nombre}<p><h4>$${producto.Precio}</h4></p></a>`
        main.innerHTML+=inner
    }else{
        let descuento=(100-producto.Descuento)*producto.Precio/100
        let inner=`<a href=${producto.href} class="producto  ${producto.categoria} "  id=${producto.id} ><p>${producto.Descuento}% </p><img src=${producto.foto} alt=${producto.Nombre} ><p>${producto.Nombre} </p><p><h5>Precio normal: <span>$${producto.Precio}<span></h5><p><p><h5>Precio ahora: $${descuento} </h5></p></a>`
        main.innerHTML+=inner
    }
})
function filtro() {
    
    document.querySelectorAll('.producto').forEach(Element=>{
        if (Element.classList[1]==categorias) {
            Element.classList.remove('filtro')
        } else if(categorias=='') {
            Element.classList.remove('filtro')
        }else{
            Element.classList.add('filtro')
        }
    })
}

document.addEventListener('keyup',e =>{
    if (e.target.matches('#buscador')) {
        if (categorias!='') {
            categorias=''
            filtro()
        }
        categorias=''
        
        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".producto").forEach(Element=>{   
            ahoraIdSinGuion=''
            for (let i = 0; i < Element.id.length; i++) {
                if(Element.id.substring(i,i+1)=='-'){
                    ahoraIdSinGuion+=' '
                }else{
                    ahoraIdSinGuion+=Element.id.substring(i,i+1)
                }
                
            }
            ahoraIdSinGuion.toLowerCase().includes(e.target.value.toLowerCase())
                ? Element.classList.remove('filtro')
                :Element.classList.add('filtro')
        })
    }
    if (document.getElementById('buscador').value=='') {
        demora = setTimeout(quitar, 2000)
    } else {
        document.getElementById('buscador').classList.add('escrito') 
    }
})
function quitar() {
    document.getElementById('buscador').classList.remove('escrito')
}