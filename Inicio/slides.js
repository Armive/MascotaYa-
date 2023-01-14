var slider=document.getElementById("slides")
let fechaActual=new Date()
if(fechaActual.getDate() >= 10 && fechaActual.getDate()<=15&&fechaActual.getMonth()==0) {
    inner=`<li><a href="#mascotas"><img src="./Mascotas/Banner6.png" alt="Banner"></a></li>`
    slider.innerHTML+=inner
}


if(fechaActual.getMonth==10 && fechaActual.getDay==5 && fechaActual.getDaten>=24 && fechaActual.getDate<= 30){
    inner=`<li><a href="#mascotas"><img src="./Mascotas/Banner5.png" alt="Banner"></a></li>`
    slider.innerHTML+=inner
}
