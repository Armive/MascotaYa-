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
//load
window.onload=function(){
    setTimeout(quitar,1000)
   
}
function quitar() {
    $('#onload').fadeOut();
    $('body').removeClass("hidden");
}