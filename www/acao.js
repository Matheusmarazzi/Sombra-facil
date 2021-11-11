//funçao cadastrar
$(document).on('submit','#cadastros',function(e) {
	var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

        $.ajax({
          url: url+'cadastrar.php',
          data:$(this).serialize(),
          type:'POST',
          success: function(retorno){
            //navigator.notification.alert(retorno, alertCallback, 'Aviso!');
            //alert(retorno);
            
            $('#nome').val("");
            $('#login').val("");
            $('#senha').val("");
            $('#rg').val("");
            $('#telefone').val("");
            $(".modal-body").html(retorno);
            $("#alerta").modal("show");
            //redirecionar('index.html');
          }
        });
        //enviar o form sem atualizar a pagina
        e.preventDefault();

});
// funcao redirecionar
function redirecionar(pagina){
window.location = pagina;

};

//funcao cadastrar localizao
$(document).on('submit','#adicionar',function(e) {
  var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

	$.ajax({
		url: url+'addlocal.php',
		data:$(this).serialize(),
		type:'POST',
		success: function(retorno){
			//navigator.notification.alert(retorno, alertCallback, 'Aviso!');
      //alert(retorno);
      $("#nomelocal").val("");
			$('#lat').val("");
			$('#long').val("");
      $(".modal-body").html(retorno);
      $("#alerta").modal("show");
		}
	});

	e.preventDefault();

});


//funçao login
function alertCallback (){};
$(document).on('submit','#logar',function(e) {
  var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

	$.ajax({
		url: url+'login.php',
		data:$(this).serialize(),
		type:'POST',
    success: function(retorno){
      //navigator.notification.alert(retorno, alertCallback, 'Login!');
      //alert(retorno);

        $('#login').val("");
        $('#senha').val("");
        var user = JSON.parse(retorno);
        
        if(user.correto){
          localStorage.setItem('cd', user.cd_usuario);
          localStorage.setItem('nome', user.nm_usuario);
          localStorage.setItem('login', user.login);
          localStorage.setItem('senha', user.senha);
          localStorage.setItem('nivel', user.nivel);
          localStorage.setItem('rg_usuario', user.rg_usuario);
          localStorage.setItem('telefone', user.telefone);
          

          if(user.nivel == ""){
            window.location.href = 'pagina.html';
          }else{
            window.location.href = 'paginaadm.html';
          }
        }else{
          $(".modal-body").html("Usuario ou senha invalidos");
          $("#alerta").modal("show");
        }
      }
	});

	e.preventDefault();

});
$(document).on('click','#pegarlocal',function(e) {
    var onSuccess = function(position) {
    	$('#lat').val(position.coords.latitude);
			$('#long').val(position.coords.longitude);
    };
    var onError = function(){};
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
function pegardados() {
    $('#cd').val(localStorage.cd);
    // $('#cd').hide();
    $('#cd2').val(localStorage.cd);
    $('#cd2').show();
    $('#name').val(localStorage.nome);
    $('#log').val(localStorage.login);
    $('#tel').val(localStorage.telefone);
    $('#sen').val(localStorage.senha);
    $('#reg').val(localStorage.rg_usuario);
    $('#log').attr('readonly','readonly');
    $('#tel').attr('readonly','readonly');
    $('#sen').attr('readonly','readonly');
    $('#name').attr('readonly','readonly');
    $('#reg').attr('readonly','readonly');
    $('#atualizar').hide();
    $('#habilita').show();
};
$(document).on('click','#habilita', function() {
    $('#log').prop('readonly',false);
    $('#tel').prop('readonly',false);
    $('#sen').prop('readonly',false);
    $('#habilita').hide();
    $('#atualizar').show();
});
// função atualizar
$(document).on('submit','#formulario',function(e) {
	var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

        $.ajax({
          url: url+'atualizar.php',
          data:$(this).serialize(),
          type:'POST',
          success: function(retorno){
            //navigator.notification.alert(retorno, alertCallback, 'Aviso!');
            //alert(retorno);

            $("#body").html(retorno);
            $("#alerta").modal("show");
            
            //redirecionar('index.html');
          }
        });
        //enviar o form sem atualizar a pagina
        e.preventDefault();

});
$(document).on('submit','#formulario2',function(e) {
	var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

        $.ajax({
          url: url+'deletar.php',
          data:$(this).serialize(),
          type:'POST',
          success: function(retorno){

            $("#body").html(retorno);
            $("#alerta").modal("show");
            
            // redirecionar('index.html');
          }
        });
        //enviar o form sem atualizar a pagina
        e.preventDefault();

});
// function listar(){
// alert('ok');
//  $.ajax({
//        url:'https://maestoques.profrodolfo.com.br/sombra-facil/listartodoslocais.php',
//        type:'get',
//        data: null,
//        success:function(data){
//          var lo = JSON.parse(data);
//          var x = lo.length;
//          var texto;
//          for(var i = 0; i<x;i++){
           
//            texto += '<a href="adddisponivel.html"><p id="'+lo[i].cd_localizacao+'" class="contato black-text text-black">'+lo[i].nome_posto+'</a><br>';
        
                
//             }
//             $('#listar').html(texto);
            
//         }
//     });

// }

$(document).on('click','.local',function(){
	var id = $(this).attr('id');

  localStorage.setItem('id',id);


	window.location="produto.html";

});

// cadastrar produto

$(document).on('submit','#produto',function(e) {
  var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

	$.ajax({
		url: url+'adddisponivel.php',
		data:$(this).serialize(),
		type:'POST',
		success: function(retorno){
			//navigator.notification.alert(retorno, alertCallback, 'Aviso!');
      //alert(retorno);
			$('#quant').val("");
      $(".modal-body").html(retorno);
      $("#alerta").modal("show");
		}
	});

	e.preventDefault();

});






// //função para aleatorizar as imagens

// //quantidade de imagens
// var totalCount = 6;
// function AleatorizarImagem() 
// {
// //random
// var num = Math.ceil( Math.random() * totalCount );
// //as imagem devem ser nomeadas com o numero, ex: 1.jpg, 2.jpg
// document.body.background = num+'.jpg';
// //para não repetir a imagem
// document.body.style.backgroundRepeat = "no-repeat";// Background repeat
// //para deixar a imagem do tamanho da tela
// document.body.style.backgroundSize="100% 100%";
// }