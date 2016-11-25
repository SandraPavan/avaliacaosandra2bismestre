$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function(erro){
			alert(erro.responseText);
		},
		success: function(data){

			var divPlanetas = document.querySelector("#planetas");

			$.each(data.results, function(i, obj){
				divPlanetas.innerHTML += "<p><a id='planeta' href='javascript: mostra('"+obj.url+"')'>"   + obj.name + "</a></p>";
				
			});
		}
	});
});

$('.mostrarPlaneta').on('click', function() {
	var divPlanet = document.querySelector("#planeta");
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/' + planetas.value + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro){
			alert(erro.responseText);
		},
		success: function(data){
			var divPlanet = document.querySelector("#contPlanet");
			divPlanet.innerHTML = "";
			$.each(data.results, function(i, obj){
				divPlanet.innerHTML += "Nome: " + obj.name + "</br>Rotacao: " + obj.rotation_period + "</br>Orbita: " + obj.orbital_period + "</br>Populacao: " + obj.population + "</br></br>";
			});
		}
	});
});

