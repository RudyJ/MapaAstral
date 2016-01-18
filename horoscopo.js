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

var aspectos = [
	'Lua',
	'Mercúrio',
	'Vênus',
	'Marte',
	'Júpiter',
	'Saturno',
	'Urano',
	'Netuno',
	'Plutão',
	'Nódulo Lunar'
]

/* FUNCOES */
function listaSignos( signoBase ) {
	while ( signos[0] != signoBase )
		signos.unshift(signos.pop());
	return signos;
}

/* jQuery */

var insereOpcoesdeSignos = function() {
	$.each(signos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-signo'));
	});
}

var montaAspectos = function() {
	$.each(aspectos, function(chave, valor) {
		$('<option>').attr('value', valor).text(valor).appendTo($('.seletor-aspecto '));
	});
}

var preencheLinha = function(signos) {
 	var i = 0;
 	$('.signo').each(function() {
 		$(this).text(signos[i]);
 		i++;
 	});
}

var montaTabela = function() {
	
	var tabela = $('<table>').attr('id', 'tabela-signo').addClass('table table-striped table-hover');
	
	var head = $('<thead>').appendTo(tabela);
	$('<th>').text('Casas').appendTo(head);
	$('<th>').text('Signo').appendTo(head);
	$('<th>').text('Aspectos').appendTo(head);

	var body = $('<tbody>').appendTo(tabela);
	for ( var i = 0; i < 12; i++ ) {
		var linha = $('<tr>').appendTo(body);
		if ( i == 0 ) linha.addClass('info'); // refatorar
		$('<td>').text(i+1).appendTo(linha);
		$('<td>').appendTo(linha).addClass('signo');
		$('<td>').appendTo(linha).addClass('aspecto');
	}

	tabela.appendTo($('#dados'));
}

var adicionaAspecto = function() {
	var signo = $(".seletor-signo option:selected").val();
	var aspecto = $(".seletor-aspecto option:selected").val();
	console.log('Inserindo ' + aspecto + ' em ' + signo);
}

$(document).ready( function() {
	$(insereOpcoesdeSignos());
	$(montaTabela());
	$(montaAspectos());
	
	$('#run').click(function() {
		var signo = $(".seletor-signo option:selected").val();
		$(preencheLinha(listaSignos(signo)));
		$('select').removeAttr('disabled');
	});
	
	$('#adiciona-aspecto').click(adicionaAspecto);
});
