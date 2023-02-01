window.onload=function(){
    setTimeout(quitar,1000)
   
}
function quitar() {
    $('#onload').fadeOut();
    $('body').removeClass("hidden");
}