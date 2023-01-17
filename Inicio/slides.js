var slider=document.getElementById("slides")
let fechaActual=new Date()
if((fechaActual.getDate()>=21 && fechaActual.getMonth()==11)|| (fechaActual.getMonth()==0||fechaActual.getMonth()==1)||(fechaActual.getDate()<=20 &&fechaActual.getMonth()==2 )){
    inner=`<li><img src="./Banners/banner11.png" alt="Banner11"></li>`
    slider.innerHTML+=inner

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==2)|| (fechaActual.getMonth()==3||fechaActual.getMonth()==4)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==5 )){
    inner=`<li><img src="./Banners/banner8.png" alt="Banner8"></li>`
    slider.innerHTML+=inner
}
if((fechaActual.getDate()>=21 && fechaActual.getMonth()==5) || (fechaActual.getMonth()==6||fechaActual.getMonth()==7)||(fechaActual.getDate()<=23 &&fechaActual.getMonth()==8 )){
    inner=`<li><img src="./Banners/banner9.png" alt="Banner9"></li>`
    slider.innerHTML+=inner

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==8)|| (fechaActual.getMonth()==9||fechaActual.getMonth()==10)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==11 )){
    inner=`<li><img src="./Banners/banner10.png" alt="Banner10"></li>`
    slider.innerHTML+=inner

}
if(fechaActual.getDate()>=5 && fechaActual.getDate()<=15 && fechaActual.getMonth()==0){ 
    inner=`<li><img src="./Banners/banner12.png" alt="Banner12"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=1 && fechaActual.getDate()<=10 && fechaActual.getMonth()==1) {
    inner=`<li><img src="./Banners/banner13.png" alt="Banner13"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=20 && fechaActual.getMonth()==2) {
    inner=`<li><img src="./Banners/banner14.png" alt="Banner14"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=13 && fechaActual.getDate()<=25 && fechaActual.getMonth()==3) {
    inner=`<li><img src="./Banners/banner16.png" alt="Banner16"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==4) {
    inner=`<li><img src="./Banners/banner17.png" alt="Banner17"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=10 && fechaActual.getDate()<=15 && fechaActual.getMonth()==5) {
    inner=`<li><img src="./Banners/banner15.png" alt="Banner15"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=12 && fechaActual.getDate()<=20 && fechaActual.getMonth()==6) {
    inner=`<li><img src="./Banners/banner1.png" alt="Banner1"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==7) {
    inner=`<li><img src="./Banners/banner2.png" alt="Banner2"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=20 && fechaActual.getDate()<=25 && fechaActual.getMonth()==8) {
    inner=`<li><img src="./Banners/banner3.png" alt="Banner3"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=25 && fechaActual.getDate()<=30 && fechaActual.getMonth()==9) {
    inner=`<li><img src="./Banners/banner4.png" alt="Banner4"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=2 && fechaActual.getDate()<=7 && fechaActual.getMonth()==10) {
    inner=`<li><img src="./Banners/banner5.png" alt="Banner5"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDate()>=15 && fechaActual.getDate()<=25 && fechaActual.getMonth()==11) {
    inner=`<li><img src="./Banners/banner6.png" alt="Banner6"></li>`
    slider.innerHTML+=inner
}
if (fechaActual.getDay()==5 && fechaActual.getDate()>=24 && fechaActual.getDate()<=30 && fechaActual.getMonth()==10) {
    inner=`<li><img src="./Banners/banner7.png" alt="Banner7"></li>`
    slider.innerHTML+=inner
}
