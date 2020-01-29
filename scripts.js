$(function () {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function(){ // Modal iniciado ao entrar no site
  $('#Modalinicial').modal("show");
});
$("#grato").click(function(){
  $('#Modalinicial').modal("show");
});
$("#email").click(function(){
  $('#Modalemail').modal("show");
});

$('#ferramentas').click(function(elemento){
    elemento.preventDefault(); // Pega o input com id = fe e deixa Default seus eventos
    let id = $(this).attr('href'), // pega o valor href do elemento
        targetOffset = $(id).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset
    }, 1000);
        console.log(targetOffset);
  });

$('#midia').click(function(elemento){
    elemento.preventDefault();
    let id = $(this).attr('href'),
       targetOffset = $(id).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset
    }, 1000);
        console.log(targetOffset);
  });

$('#atualizacoes').click(function(elemento){
    elemento.preventDefault();
    let id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
     $('html, body').animate({
      scrollTop: targetOffset
    }, 2000);
        console.log(targetOffset);
  });
  function formatar(mascara, documento){
    let i = documento.value.length;
    let saida = mascara.substring(0,1);
    let texto = mascara.substring(i)
  if (texto.substring(0,1) != saida) {
      documento.value += texto.substring(0,1);
    }
  }

  function trocar(id){ 
    id.innerHTML = ("<i class='fa fa-code mr-4 text-primary' aria-hidden='true'> </i>Site desenvolvido para teste"); 
}   