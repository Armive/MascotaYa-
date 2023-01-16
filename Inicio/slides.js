var slider=document.getElementById("slides")
let fechaActual=new Date()
if((fechaActual.getDate()>=21 && fechaActual.getMonth()==11)|| (fechaActual.getMonth()==0||fechaActual.getMonth()==1)||(fechaActual.getDate()<=20 &&fechaActual.getMonth()==2 )){
    inner=`<li><img src="./Banners/Banner11.png" alt="Banner11"></li>`
    slider.innerHTML+=inner

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==2)|| (fechaActual.getMonth()==3||fechaActual.getMonth()==4)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==5 )){
    inner=`<li><img src="./Banners/Banner8.png" alt="Banner8"></li>`
    slider.innerHTML+=inner
}
if((fechaActual.getDate()>=21 && fechaActual.getMonth()==5) || (fechaActual.getMonth()==6||fechaActual.getMonth()==7)||(fechaActual.getDate()<=23 &&fechaActual.getMonth()==8 )){
    inner=`<li><img src="./Banners/Banner9.png" alt="Banner9"></li>`
    slider.innerHTML+=inner

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==2)|| (fechaActual.getMonth()==3||fechaActual.getMonth()==4)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==5 )){
    inner=`<li><img src="./Banners/Banner10.png" alt="Banner10"></li>`
    slider.innerHTML+=inner

}
if((fechaActual.getDate()>=20 && fechaActual.getMonth()==8)|| (fechaActual.getMonth()==9||fechaActual.getMonth()==10)||(fechaActual.getDate()<=21 &&fechaActual.getMonth()==11 )){
    inner=`<li><img src="./Banners/Banner10.png" alt="Banner10"></li>`
    slider.innerHTML+=inner

}