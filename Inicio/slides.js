var slider=document.getElementById("slides")
let fechaActual=new Date()
function imprimir(banner){
    let inner=`<li><img src="./Banners/banner${banner}.png" alt="Banner${banner}"></li>`
    slider.innerHTML+=inner
}

if((fechaActual.getDate()>=21 && fechaActual.getMonth()==11)|| (fechaActual.getMonth()==0||fechaActual.getMonth()==1)||(fechaActual.getDate()<=20 &&fechaActual.getMonth()==2 )){
    imprimir(11)
}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==2)|| (fechaActual.getMonth()==3||fechaActual.getMonth()==4)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==5 )){
    imprimir(8)
}
if((fechaActual.getDate()>=21 && fechaActual.getMonth()==5) || (fechaActual.getMonth()==6||fechaActual.getMonth()==7)||(fechaActual.getDate()<=23 &&fechaActual.getMonth()==8 )){
    imprimir(9)

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==8)|| (fechaActual.getMonth()==9||fechaActual.getMonth()==10)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==11 )){
    imprimir(10)

}
if(fechaActual.getDate()>=5 && fechaActual.getDate()<=15 && fechaActual.getMonth()==0){ 
    imprimir(12)
}
if (fechaActual.getDate()>=1 && fechaActual.getDate()<=10 && fechaActual.getMonth()==1) {
    imprimir(13)
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=20 && fechaActual.getMonth()==2) {
    imprimir(14)
}
if (fechaActual.getDate()>=13 && fechaActual.getDate()<=25 && fechaActual.getMonth()==3) {
    imprimir(16)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==4) {
    imprimir(17)
}
if (fechaActual.getDate()>=10 && fechaActual.getDate()<=15 && fechaActual.getMonth()==5) {
    imprimir(15)
}
if (fechaActual.getDate()>=12 && fechaActual.getDate()<=20 && fechaActual.getMonth()==6) {
    imprimir(1)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==7) {
    imprimir(2)
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==8) {
    imprimir(3)
}
if (fechaActual.getDate()>=25 && fechaActual.getDate()<=30 && fechaActual.getMonth()==9) {
    imprimir(4)
}
if (fechaActual.getDate()>=2 && fechaActual.getDate()<=7 && fechaActual.getMonth()==10) {
    imprimir(5)
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=25 && fechaActual.getMonth()==11) {
    imprimir(6)
}
if (fechaActual.getDay()==5 && fechaActual.getDate()>=24 && fechaActual.getDate()<=30 && fechaActual.getMonth()==10) {
    imprimir(7)
}
if (fechaActual.getDate()%2===0){
    imprimir(18)
}else if(fechaActual.getDate()%2===1){
    imprimir(19)
}

