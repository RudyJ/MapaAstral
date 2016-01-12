/* DADOS */
var signos = [
	'Áries',
	'Touro',
	'Gêmeos',
	'Câncer',
	'Leão',
	'Virgem',
	'Libra',
	'Escorpião',
	'Sagitário',
	'Capricórnio',
	'Aquário',
	'Peixes'
]

/* FUNCOES */
function listaSignos( signoBase ) {
	var lista = [];
	for ( var i = signos.indexOf(signoBase); i < signos.length; i++ )
		lista.push(signos[i]);
	for ( var i = 0; i < signos.indexOf(signoBase); i++ )
		lista.push(signos[i]);
	return lista;
}

/* jQuery */

$('.label').hide();
$('.panel').hide();

$('#run').click(function() {
	// console.log( $('#signoBase').val() );
	var signo = $('#signoBase').val();

	var signos = listaSignos(signo);
	if ( signo != "") {
		for( var i = 1; i <= 12; i++ )
			$('#' + i + ' .signo').text(signos[i-1]);
		$('.label').show();
		$('.panel').show();
	}
	else {
		$('.label').hide();
		$('.panel').hide();
		for( var i = 1; i <= 12; i++ )
			$('#' + i + ' .signo').text("");	
	}

});
